import $ from "jquery";
import data from "../data/data.json";
import { log } from "./util";

const TARGET = 120;

document.addEventListener("DOMContentLoaded", function () {
    $("#hud").hide();
});

export function initiateHUD() {
    $("#hud").show();
    $("#instructions").hide();

    let minute = 0;
    let second = 0;
    let timerId = null;

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
            // prevent multiple intervals
            timerId = setInterval(updateTimer, 1000);
        }
    });

    $("#pause").on("click", function () {
        clearInterval(timerId);
        timerId = null;
    });

    data.forEach((_, i) => {
        $("#milestones").prepend(
            `<button class="milestone-button" id="${i}"></button>`,
        );
    });

    data.forEach((_, i) => {
        const localTarget = (TARGET / data.length) * (i + 1);
        $(`.milestone-button#${i}`).on("click", function () {
            alert(`${localTarget} resources away from this milestones!`);
        });
    });

    $("#pop-up").hide();
    $("#upgrade-options").hide();

    $("#pop-up-close-button").on("click", function () {
        $("#pop-up").hide();
    });

    $("#upgrade-trigger").on("click", function () {
        $("#upgrade-options").toggle();
    });
}

export function addResources(cnt) {
    const currCnt = Number($("#resources").text());
    const unit = $("#milestones").height() / TARGET;
    const resources = currCnt + cnt;

    $("#resources").text(resources);
    $("#milestones-tracker").height(unit * Math.min(resources, TARGET));
    data.forEach((_, i) => {
        function initiatePopUp(index) {
            $("#pop-up-title").text(data[index].title);
            $("#pop-up-text").text(data[index].text);
        }

        $(`.milestone-button#${i}`).off("click");
        const localTarget = (TARGET / data.length) * (i + 1);
        if (resources >= localTarget) {
            $(`.milestone-button#${i}`).css("background-color", "darkgreen");
            $(`.milestone-button#${i}`).on("click", function () {
                initiatePopUp(i);
                $("#pop-up").toggle();
            });
            if (resources === localTarget) {
                initiatePopUp(i);
                $("#pop-up").show();
            }
        } else {
            $(`.milestone-button#${i}`).on("click", function () {
                alert(
                    `${localTarget - resources} resources away from this milestones!`,
                );
            });
        }
    });
}
