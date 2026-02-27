import $ from "jquery";
import { log } from "./util";
import params from "../data/params.json";
import milestones from "../data/milestones.json";
import upgrades from "../data/upgrades.json";
import { CrewManagerFactory, ManualDrillFactory } from "./components";

document.addEventListener("DOMContentLoaded", function () {
    $("#hud").hide();
});

export function initiateHUD() {
    $("#hud").show();
    $("#instructions").hide();

    let minute = 0;
    let second = 0;
    let timerId = null;

    let factories = [new ManualDrillFactory(), new CrewManagerFactory()];

    function updateTimer() {
        second++;

        if (second === 60) {
            minute++;
            second = 0;
        }

        const formattedSecond = String(second).padStart(2, "0");
        $("#timer").text(`${minute}:${formattedSecond}`);
    }

    $("#start").on("click", function () {
        if (!timerId) {
            timerId = setInterval(updateTimer, 1000);
        }
    });

    $("#pause").on("click", function () {
        clearInterval(timerId);
        timerId = null;
    });

    milestones.forEach((_, i) => {
        $("#milestones").prepend(
            `<button class="milestone-buttons locked-milestones" id="milestone-${i}"></button>`,
        );
        log(`Added milestone ${i}`);
    });

    upgrades.forEach((_, i) => {
        $("#upgrade-options").prepend(
            `<button class="upgrade-button" data-index=${i}>${i}</button>`,
        );
    });

    $("#upgrade-options").on("click", ".upgrade-button", function () {
        const i = $(this).data("index");
        log(`Buying ${i}`);
        factories[i].buy();
    });

    $("#upgrade-options").hide();

    $("#pop-up-close-button").on("click", function () {
        $("#pop-up").removeClass("visible");
        $("#milestones-container").removeClass("milestone-reached");
    });

    $("#upgrade-trigger").on("click", function () {
        $("#upgrade-options").toggle();
    });
}

export function getResources() {
    return Number($("#resources").text());
}

export function addResources(cnt) {
    const currCnt = Number($("#resources").text());
    const resources = currCnt + cnt;
    const totalTarget = params.TARGET_RESOURCES;
    const unit = $("#milestones").height() / totalTarget;

    $("#resources").text(resources);
    $("#milestones-tracker").height(unit * Math.min(resources, totalTarget));

    milestones.forEach((milestone, i) => {
        const $el = $(`#milestone-${i}`);
        const localTarget = (totalTarget / milestones.length) * (i + 1);

        const wasLocked = $el.hasClass("locked-milestones");
        if (!wasLocked) return;

        const showPopUp = () => {
            $("#pop-up-title").text(milestone.title);
            $("#pop-up-text").text(milestone.text);
            $("#pop-up").addClass("visible");
            $("#milestones-container").addClass("milestone-reached");
        };

        $el.off("click");

        if (resources >= localTarget) {
            $el.addClass("unlocked-milestones")
               .removeClass("locked-milestones");

            $el.on("click", showPopUp);

            if (wasLocked) showPopUp();
        } else {
            $el.on("click", () => {
                alert(`${localTarget - resources} resources away from this milestone!`);
            });
        }
    });
}