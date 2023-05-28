import { inputWeight } from "./modules/input.js";
import { isModulePage } from "./modules/globalVars.js";
import { moduleFirstDay } from "./modules/moduleFirstDay.js";
import { moduleSecondDay } from "./modules/moduleSecondDay.js";
import { moduleThirdDay } from "./modules/moduleThirdDay.js";

window.addEventListener("DOMContentLoaded", () => {
    if (
        window.location.href.includes(
            "index.html" || "http://localhost:3000/" || "lifter"
        )
    ) {
        localStorage.clear();
        inputWeight();
    } else if (/first-day/.test(window.location.href)) {
        moduleFirstDay(isModulePage());
    } else if (/second-day/.test(window.location.href)) {
        moduleSecondDay(isModulePage());
    } else if (/third-day/.test(window.location.href)) {
        moduleThirdDay(isModulePage());
    } else {
        console.log("error: locationChange");
    }
});

//dumbbell press need change (example : 22.5 -> 22 )
