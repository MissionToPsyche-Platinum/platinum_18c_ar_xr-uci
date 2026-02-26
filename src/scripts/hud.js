import $ from "jquery";

import { log } from "./util.js";

import params from "../data/params.json";
import milestones from "../data/milestones.json";

document.addEventListener("DOMContentLoaded", function () {
    $("#hud").hide();
});

export function initHUD(tools, sensors) {
    $("#hud").show();
    $("#instructions").hide();
    log(`Sensors are${sensors ? "" : " not"} ready`)

    // let minute = 0;
    // let second = 0;
    // let timerId = null;

    // function updateTimer() {
    //     second++;

    //     if (second === 60) {
    //         minute++;
    //         second = 0;
    //     }

    //     const formattedSecond = String(second).padStart(2, "0");
    //     $("#timer").text(`${minute}:${formattedSecond}`);
    // }

    // $("#start").on("click", function () {
    //     if (!timerId) {
    //         // prevent multiple intervals
    //         timerId = setInterval(updateTimer, 1000);
    //     }
    // });

    // $("#pause").on("click", function () {
    //     clearInterval(timerId);
    //     timerId = null;
    // });

    milestones.forEach((_, i) => {
        $("#milestones").prepend(
            `<button class="milestone-buttons locked-milestones" id="${i}"></button>`,
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
            `<button class="sensor-upgrade-button" data-index=${(i+2)*2}>${(i+2)*2}</button>`,
        );
    };
    
    $("#upgrade-options").on("click", ".upgrade-button", function () {
        const i = $(this).data("index");
        log(`Buying ${i}`);
        tools[i].buy();
    });

    $("#upgrade-options").on("click", ".sensor-upgrade-button", function () {
        const i = $(this).data("index");
        log(`Buying Sensor ${i}`);
        Object.values(sensors)[Math.trunc(i/2 - 2)].buy();
    });

    $("#pop-up").hide();
    $("#upgrade-options").hide();

    $("#pop-up-close-button").on("click", function () {
        $("#pop-up").hide();
    });

    $("#upgrade-trigger").on("click", function () {
        $("#upgrade-options").toggle();
    });

    addResources(100);
}

export function getResources() {
    return Number($("#resources").text());
}

export function addResources(cnt) {
    const currCnt = Number($("#resources").text());
    const resources = currCnt + cnt;
    const totalTarget = params.TARGET_RESOURCES;
    const unit = $("#milestones").height() / totalTarget;

    // Update UI
    log(`Updating Resouces: ${resources}`)
    $("#resources").text(resources);
    $("#milestones-tracker").height(unit * Math.min(resources, totalTarget));

    milestones.forEach((milestone, i) => {
        const $el = $(`.milestone-buttons#${i}`); // Select by ID first for efficiency
        const localTarget = (totalTarget / milestones.length) * (i + 1);

        // Check if it was previously locked
        const wasLocked = $el.hasClass("locked-milestones");
        // No change after unlocked
        if (!wasLocked) return;

        // Helper to populate the popup
        const showPopUp = () => {
            $("#pop-up-title").text(milestone.title);
            $("#pop-up-text").text(milestone.text);
            $("#pop-up").show();
        };

        // Clear previous listeners to prevent stacking
        $el.off("click");

        if (resources >= localTarget) {
            $el.addClass("unlocked-milestones").removeClass(
                "locked-milestones",
            );

            $el.on("click", showPopUp);

            // Auto-open popup only the moment it unlocks
            if (wasLocked) showPopUp();
        } else {
            // Still locked logic
            $el.on("click", () => {
                alert(
                    `${localTarget - resources} resources away from this milestone!`,
                );
            });
        }
    });
}
