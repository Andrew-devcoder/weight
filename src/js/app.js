import { inputWeight } from "./modules/input.js";
import { isModulePage } from "./modules/globalVars.js";
import { moduleFirstDay } from "./modules/moduleFirstDay.js";
import { moduleSecondDay } from "./modules/moduleSecondDay.js";
import { moduleThirdDay } from "./modules/moduleThirdDay.js";

window.addEventListener("DOMContentLoaded", () => {
    if (
        window.location.href.includes("index.html" || "http://localhost:3000/")
    ) {
        localStorage.clear();
        inputWeight();
    } else if (window.location.href.includes("module-one-first-day.html")) {
        moduleFirstDay(isModulePage());
    } else if (window.location.href.includes("module-one-second-day.html")) {
        moduleSecondDay(isModulePage());
    } else if (window.location.href.includes("module-one-third-day.html")) {
        moduleThirdDay(isModulePage());
    } else if (window.location.href.includes("module-two-first-day.html")) {
        moduleFirstDay(isModulePage());
    } else if (window.location.href.includes("module-two-second-day.html")) {
        moduleSecondDay(isModulePage());
    } else if (window.location.href.includes("module-two-third-day.html")) {
        moduleThirdDay(isModulePage());
    } else if (window.location.href.includes("module-three-first-day.html")) {
        moduleFirstDay(isModulePage());
    } else if (window.location.href.includes("module-three-second-day.html")) {
        moduleSecondDay(isModulePage());
    } else if (window.location.href.includes("module-three-third-day.html")) {
        moduleThirdDay(isModulePage());
    } else if (window.location.href.includes("module-four-first-day.html")) {
        moduleFirstDay(isModulePage());
    } else if (window.location.href.includes("module-four-second-day.html")) {
        moduleSecondDay(isModulePage());
    } else if (window.location.href.includes("module-four-third-day.html")) {
        moduleThirdDay(isModulePage());
    } else {
        console.log("error: locationChange");
    }
});

//dumbbell press need change 22.5 -> 22 example
