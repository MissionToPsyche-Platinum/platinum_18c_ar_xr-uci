import $ from "jquery";

import { log, notify } from "./util.js";

import params from "../data/params.json";
import milestones from "../data/milestones.json";

let globalTimer;
let rewardMap;
let maxResources = 0;

const milestoneUnit = params.TARGET_RESOURCES / milestones.length;

document.addEventListener("DOMContentLoaded", function () {
    $("#hud").hide();
    $("#end-screen-overlay").hide();
    $("loading").css("opacity", "0");
});

function notEnoughResources(localTarget, resources = 0) {
    notify(`${localTarget - resources} resources away from this milestone!`);
}

export class Timer {
    constructor() {
        this.timeInSecond = params.TIME_LIMIT;
        this.timerId = null;
        this.infiniteMode = false;
    }

    format() {
        const minute = Math.floor(this.timeInSecond / 60);
        const second = this.timeInSecond % 60;

        const formattedSecond = String(second).padStart(2, "0");
        return `${minute}:${formattedSecond}`;
    }

    tick() {
        this.timeInSecond--;

        if (!this.infiniteMode) {
            $("#timer").text(this.format());
            if (this.isTimesUp()) this.onTimesUp();
        } else $("#timer").text("∞");
    }

    start() {
        if (!this.timerId) {
            // prevent multiple intervals
            this.timerId = setInterval(() => this.tick(), 1000);
        }
    }

    pause() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    isPaused() {
        return this.timerId === null;
    }

    isTimesUp() {
        return this.timeInSecond <= 0;
    }

    onTimesUp() {
        $("#hud").hide();
        initEndScreen();
        this.pause();
    }

    infinite() {
        $("#end-screen-overlay").hide();
        this.timeInSecond = Number.MAX_SAFE_INTEGER;
        this.infiniteMode = true;
        this.start();
        $("#hud").show();
    }
}

function initEndScreen() {
    $(".resources-count").text(getResources());
    $(".milestones-count").text(Math.floor(getResources() / milestoneUnit));
    Object.values(rewardMap).forEach((upgrade) => {
        $(".upgrades-stat-group").append(`
            <div class="stat-row">
            <span class="stat-label">${upgrade.name}</span>
            <span class="stat-value">Lvl ${upgrade.level}</span>
            </div>`);
    });
    $("#end-screen-overlay").show();
}

export function initHUD(timer, tools, sensors, exitAR) {
    hideNonHUD();

    $("#resources").text("0");
    $("#timer").text(timer.format());
    $("#hud").show();
    log(`Sensors are${sensors ? "" : " not"} ready`);

    for (const i in milestones) {
        log(`Added milestone ${i}`);
        $("#milestones").prepend(
            `<button class="milestone-buttons locked-milestones" id=${i} data-index=${i}></button>`,
        );
    }

    $("#milestones").on("click", ".locked-milestones", function () {
        const i = $(this).data("index");
        notEnoughResources(milestoneUnit * (i + 1));
    });

    for (const [i, tool] of Object.values(tools).entries()) {
        if (!tool.isBuyable()) continue;
        $("#upgrade-options").prepend(
            `<button class="tool-upgrade-button" data-index=${i}>${i}</button>`,
        );
    }

    for (const [i, sensor] of Object.values(sensors).entries()) {
        if (!sensor.isBuyable()) continue;
        $("#upgrade-options").prepend(
            `<button class="sensor-upgrade-button" data-index=${(i + 2) * 2}>${(i + 2) * 2}</button>`,
        );
    }

    $("#upgrade-options").on("click", ".tool-upgrade-button", function () {
        const i = $(this).data("index");
        log(`Buying Tool ${i}`);
        Object.values(tools)[i].buy();
    });

    $("#upgrade-options").on("click", ".sensor-upgrade-button", function () {
        const i = $(this).data("index");
        log(`Buying Sensor ${i}`);
        Object.values(sensors)[Math.trunc(i / 2 - 2)].buy();
    });

    $("#upgrade-options").hide();

    $("#pop-up-close-button").on("click", function () {
        $("#pop-up").removeClass("visible");
        $("#milestones-container").removeClass("milestone-expand");
        timer.start();
    });

    $("#upgrade-trigger").on("click", function () {
        $("#upgrade-options").toggle();
    });

    $(".btn-continue").on("click", () => globalTimer.infinite());
    $(".btn-exit").on("click", exitAR);

    // Construct timer
    globalTimer = timer;

    // Construct reward map
    rewardMap = {
        MAX_BUTTON: sensors.MAX_BUTTON,
        MULTICLICK_SPLIT: sensors.MULTICLICK_SPLIT,
        MULTICLICK_TIMEOUT: sensors.MULTICLICK_TIMEOUT,
        MANUAL_DRILL: tools.MANUAL_DRILL,
        CREW_MANAGER: tools.CREW_MANAGER,
    };

    globalTimer.start();
}

export function getResources() {
    return Number($("#resources").text());
}

export function addResources(cnt) {
    const currCnt = getResources();
    const resources = currCnt + cnt;
    const totalTarget = params.TARGET_RESOURCES;
    const unit = $("#milestones").height() / totalTarget;

    // Update UI
    log(`Updating Resouces: ${resources}`);
    $("#resources").text(resources);
    maxResources = Math.max(maxResources, resources);
    $("#milestones-tracker").height(unit * Math.min(maxResources, totalTarget));

    milestones.forEach((milestone, i) => {
        const $el = $(`.milestone-buttons#${i}`);
        const localTarget = milestoneUnit * (i + 1);

        // Check if it was previously locked
        const wasLocked = $el.hasClass("locked-milestones");
        if (!wasLocked) return;

        const showPopUp = () => {
            $("#pop-up-title").text(milestone.title);
            $("#pop-up-text").text(milestone.text);
            $("#pop-up-upgrade-box").text(milestone.reward);
            $("#pop-up").addClass("visible");
            $("#milestones-container").addClass("milestone-expand");

            // Timer
            globalTimer.pause();
        };

        $el.off("click");

        if (resources >= localTarget) {
            $el.addClass("unlocked-milestones").removeClass(
                "locked-milestones",
            );

            $el.on("click", showPopUp);

            if (wasLocked) {
                // Reward
                rewardMap[milestone.reward].reward();
                showPopUp();
            }
        } else {
            $el.on("click", () => notEnoughResources(localTarget));
        }
    });
}

export function startLoadingPhase() {
    $("#loading").css("opacity", "1");
    $("#tracking-prompt").hide();
}

export function startScanningPhase() {
    $("#loading").hide();
    $("#tracking-prompt").show();
}

export function startAnchoringPhase() {
    $("#tracking-prompt").hide();
    $("#instructions").show();
}

function hideNonHUD() {
    $("#loading").hide();
    $("#tracking-prompt").hide();
    $("#instructions").hide();
}
