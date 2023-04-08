import { inputWeight } from "./modules/input.js";
import { moduleOneFirstDay } from "./modules/moduleOneFirstDay.js";
import { moduleOneSecondDay } from "./modules/moduleOneSecondDay.js";
import { moduleOneThirdDay } from "./modules/moduleOneThirdDay.js";

window.addEventListener("DOMContentLoaded", () => {
    if (
        window.location.href.includes("index.html" || "http://localhost:3000/")
    ) {
        localStorage.clear();
        inputWeight();
    } else if (window.location.href.includes("module-one-first-day.html")) {
        moduleOneFirstDay();
    } else if (window.location.href.includes("module-one-second-day.html")) {
        moduleOneSecondDay();
    } else if (window.location.href.includes("module-one-third-day.html")) {
        moduleOneThirdDay();
    } else {
        console.log("error: locationChange");
    }
});
