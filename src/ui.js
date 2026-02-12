import $ from "jquery";
import data from "./data.json";

document.addEventListener("DOMContentLoaded", function () {
    const TARGET = 1200;
    const unit = $(".milestones").height() / TARGET;

    let minute = 0;
    let second = 0;

    setInterval(() => {
        if (second >= 60) {
            minute++;
            second = 0;
        } else {
            second++;
        }

        $(".timer").text(`${minute}:${String(second).padStart(2, "0")}`);
    }, 1000);

    data.forEach((_, i) => {
        $(".milestones").prepend(
            `<button class="milestone-button" id="${i}"></button>`,
        );
    });

    $(".pop-up").hide();
    $(".upgrade-options").hide();

    $(".milestone-button").on("click", function () {
        const index = this.id;
        $(".pop-up-title").text(data[index].title);
        $(".pop-up-text").text(data[index].text);
        $(".pop-up").toggle();
    });

    $(".pop-up-close-button").on("click", function () {
        $(".pop-up").hide();
    });

    $(".upgrade-trigger").on("click", function () {
        $(".upgrade-options").toggle();
    });

    const RESOURCES = 800;
    $(".milestones-tracker").height(unit * RESOURCES);
    data.forEach((_, i) => {
        const localTarget = (TARGET / data.length) * (i + 1);
        if (RESOURCES >= localTarget) {
            $(`.milestone-button#${i}`).css("background-color", "darkgreen");
        }
    });
});
