import $ from "jquery";
import data from "./data.json";


document.addEventListener("DOMContentLoaded", function () {
    const TARGET = 1000
    const unit = $(".milestones").height() / TARGET

    data.forEach(() => {
        $(".milestones").prepend('<button class="milestone-button"></button>')
    })

    $(".milestone-button").on("click", function () {
        $(".pop-up").toggle()
    });

    $(".milestones-tracker").height(unit * 200)

    $(".pop-up-close-button").on("click"), function () {
        $(".pop-up").hide()
    }

    $(".upgrade-trigger").on("click", function () {
        $(".upgrade-options").toggle()
    })

});
