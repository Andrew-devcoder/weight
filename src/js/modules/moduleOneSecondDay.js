import {
    changeWeightElems,
    deadliftStorage,
    benchPressStorage,
} from "./globalVars.js";
import { calculateResult } from "./calculateResult.js";

export function moduleOneSecondDay() {
    changeWeightElems.forEach((changeWeightElem) => {
        const workDeadliftElem =
            changeWeightElem.querySelector(".work-deadlift");
        const workPressElem = changeWeightElem.querySelector(".work-press");
        const workMorningDeadliftElem = changeWeightElem.querySelector(
            ".work-morning-deadlift"
        );
        const workMilitaryPressElem = changeWeightElem.querySelector(
            ".work-military-press"
        );
        const workMiddlePressElem =
            changeWeightElem.querySelector(".work-middle-press");
        const maxWeightPercentElem = changeWeightElem.querySelector(
            ".max-weight-percent"
        );
        const maxWeightPercentValue = maxWeightPercentElem.textContent;

        if (workDeadliftElem) {
            const calculatedResult = calculateResult(
                deadliftStorage,
                maxWeightPercentValue
            );
            workDeadliftElem.textContent = calculatedResult;
        } else if (workPressElem) {
            const calculatedResult = calculateResult(
                benchPressStorage,
                maxWeightPercentValue
            );
            workPressElem.textContent = calculatedResult;
        } else if (workMorningDeadliftElem) {
            let loadWeight = deadliftStorage * 0.55;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workMorningDeadliftElem.textContent = calculatedResult;
        } else if (workMilitaryPressElem) {
            let loadWeight = benchPressStorage * 0.6;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workMilitaryPressElem.textContent = calculatedResult;
        } else if (workMiddlePressElem) {
            let loadWeight = benchPressStorage * 0.85;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workMiddlePressElem.textContent = calculatedResult;
        } else {
            console.log("error moduleOneSecondtDay");
        }
    });
}
