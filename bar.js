import { $ } from "https://esm.sh/jquery";

function error(text) {
    console.log("Calling error")

    const $bar = $("#notification-bar");
    
    $("#notification-text").text(text);
    
    // 1. Clear the animation
    $bar.css("animation", "none");
    
    // 2. Force a DOM reflow so the browser registers the removal
    $bar[0].offsetWidth; 
    
    // 3. Re-apply the animation (Fix: Removed the extra "animation: " text)
    $bar.css("animation", "enter 5s forwards");
}

// await setInterval(() => {
//     error("new error")
// }, 10000);

error("Test");