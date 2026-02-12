import $ from "jquery";
import data from "../data/data.json";

const TARGET = 12;

document.addEventListener("DOMContentLoaded", function () {
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
        $(".milestones").prepend(
            `<button class="milestone-button" id="${i}"></button>`,
        );
    });

    data.forEach((_, i) => {
        const localTarget = (TARGET / data.length) * (i + 1);
        $(`.milestone-button#${i}`).on("click", function () {
            alert(`${localTarget} resources away from this milestones!`);
        });
    });

    $(".pop-up").hide();
    $(".upgrade-options").hide();

    $(".pop-up-close-button").on("click", function () {
        $(".pop-up").hide();
    });

    $(".upgrade-trigger").on("click", function () {
        $(".upgrade-options").toggle();
        addResources(1);
    });
});

export function addResources(cnt) {
    const currCnt = Number($(".resources").text());
    const unit = $(".milestones").height() / TARGET;
    const resources = currCnt + cnt;

    console.log(currCnt, resources);

    $(".milestone-button").off();
    $(".resources").text(resources);
    $(".milestones-tracker").height(unit * resources);
    data.forEach((_, i) => {
        const localTarget = (TARGET / data.length) * (i + 1);
        if (resources >= localTarget) {
            $(`.milestone-button#${i}`).css("background-color", "darkgreen");
            $(`.milestone-button#${i}`).on("click", function () {
                const index = this.id;
                $(".pop-up-title").text(data[index].title);
                $(".pop-up-text").text(data[index].text);
                $(".pop-up").toggle();
            });
        } else {
            $(`.milestone-button#${i}`).on("click", function () {
                alert(
                    `${localTarget - resources} resources away from this milestones!`,
                );
            });
        }
    });
}
