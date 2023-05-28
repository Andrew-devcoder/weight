import { inputWeight } from "./modules/input.js";
import { isModulePage } from "./modules/globalVars.js";
import { moduleFirstDay } from "./modules/moduleFirstDay.js";
import { moduleSecondDay } from "./modules/moduleSecondDay.js";
import { moduleThirdDay } from "./modules/moduleThirdDay.js";

window.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.endsWith("localhost:3000/")) {
        localStorage.clear();
        inputWeight();
    } else if (window.location.href.includes("index.html")) {
        localStorage.clear();
        inputWeight();
    } else if (window.location.href.endsWith("netlify.app/")) {
        console.log("code work");
        localStorage.clear();
        inputWeight();
    } else if (window.location.href.includes("first-day")) {
        moduleFirstDay(isModulePage());
    } else if (window.location.href.includes("second-day")) {
        moduleSecondDay(isModulePage());
    } else if (window.location.href.includes("third-day")) {
        moduleThirdDay(isModulePage());
    } else {
        // } else if (/first-day/.test(window.location.href)) {
        //     moduleFirstDay(isModulePage());
        // } else if (/second-day/.test(window.location.href)) {
        //     moduleSecondDay(isModulePage());
        // } else if (/third-day/.test(window.location.href)) {
        //     moduleThirdDay(isModulePage());
        // } else {
        console.log("error: locationChange");
    }
});

//dumbbell press need change (example : 22.5 -> 22 )
