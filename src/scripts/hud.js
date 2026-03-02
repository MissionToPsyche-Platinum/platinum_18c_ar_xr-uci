import $ from "jquery";

import { log } from "./util.js";

import params from "../data/params.json";
import milestones from "../data/milestones.json";

document.addEventListener("DOMContentLoaded", function () {
    $("#hud").hide();
    $("#end-screen").hide();
});

export class Timer {
    constructor() {
        this.minute = 0;
        this.second = 0;
        this.timerId = null;
        this.timeLimit = params.TIME_LIMIT;
    }

    tick() {
        this.second++;

        if (this.second === 60) {
            this.minute++;
            this.second = 0;
        }

        const formattedSecond = String(this.second).padStart(2, "0");
        $("#timer").text(`${this.minute}:${formattedSecond}`);

        if (this.isTimesUp()) this.onTimesUp();
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
        return this.minute * 60 + this.second >= this.timeLimit;
    }

    onTimesUp() {
        $("#hud").hide();
        $("#end-screen").show();
        this.pause();
    }
}

export function initHUD(timer, tools, sensors) {
    $("#hud").show();
    $("#instructions").hide();
    log(`Sensors are${sensors ? "" : " not"} ready`);

    milestones.forEach((_, i) => {
        $("#milestones").prepend(
            `<button class="milestone-buttons locked-milestones" id="milestone-${i}"></button>`,
        );
        log(`Added milestone ${i}`);
    });

    tools.forEach((_, i) => {
        $("#upgrade-options").prepend(
            `<button class="upgrade-button" data-index=${i}>${i}</button>`,
        );
    });

    for (let i = 0; i < Object.keys(sensors).length; i++) {
        $("#upgrade-options").prepend(
            `<button class="sensor-upgrade-button" data-index=${(i + 2) * 2}>${(i + 2) * 2}</button>`,
        );
    }

    $("#upgrade-options").on("click", ".upgrade-button", function () {
        const i = $(this).data("index");
        log(`Buying ${i}`);
        tools[i].buy();
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

    addResources(timer, 100);
    timer.start();
}

export function getResources() {
    return Number($("#resources").text());
}

export function addResources(timer, cnt) {
    const currCnt = Number($("#resources").text());
    const resources = currCnt + cnt;
    const totalTarget = params.TARGET_RESOURCES;
    const unit = $("#milestones").height() / totalTarget;

    // Update UI
    log(`Updating Resouces: ${resources}`);
    $("#resources").text(resources);
    $("#milestones-tracker").height(unit * Math.min(resources, totalTarget));

    milestones.forEach((milestone, i) => {
        const $el = $(`#milestone-${i}`);
        const localTarget = (totalTarget / milestones.length) * (i + 1);

        // Check if it was previously locked
        const wasLocked = $el.hasClass("locked-milestones");
        if (!wasLocked) return;

        const showPopUp = () => {
            $("#pop-up-title").text(milestone.title);
            $("#pop-up-text").text(milestone.text);
            $("#pop-up").addClass("visible");
            $("#milestones-container").addClass("milestone-expand");
            timer.pause();
        };

        $el.off("click");

        if (resources >= localTarget) {
            $el.addClass("unlocked-milestones").removeClass(
                "locked-milestones",
            );

            $el.on("click", showPopUp);

            if (wasLocked) showPopUp();
        } else {
            $el.on("click", () => {
                alert(
                    `${localTarget - resources} resources away from this milestone!`,
                );
            });
        }
    });
}
