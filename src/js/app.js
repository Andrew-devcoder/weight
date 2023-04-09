import { inputWeight } from "./modules/input.js";
import { isModulePage } from "./modules/globalVars.js";
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
        moduleOneFirstDay(isModulePage());
    } else if (window.location.href.includes("module-one-second-day.html")) {
        moduleOneSecondDay(isModulePage());
    } else if (window.location.href.includes("module-one-third-day.html")) {
        moduleOneThirdDay(isModulePage());
    } else {
        console.log("error: locationChange");
    }
});
