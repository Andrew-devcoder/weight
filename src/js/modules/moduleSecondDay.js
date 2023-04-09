import {
    changeWeightElems,
    deadliftStorage,
    benchPressStorage,
    increaseByPercentage,
} from "./globalVars.js";
import { calculateResult } from "./calculateResult.js";

export function moduleSecondDay(loadPercentage) {
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
            let loadWeightUp = increaseByPercentage(
                deadliftStorage,
                loadPercentage
            );
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workDeadliftElem.textContent = calculatedResult;
        } else if (workPressElem) {
            let loadWeightUp = increaseByPercentage(
                benchPressStorage,
                loadPercentage
            );
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workPressElem.textContent = calculatedResult;
        } else if (workMorningDeadliftElem) {
            let loadWeight = deadliftStorage * 0.55;
            let loadWeightUp = increaseByPercentage(loadWeight, loadPercentage);
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workMorningDeadliftElem.textContent = calculatedResult;
        } else if (workMilitaryPressElem) {
            let loadWeight = benchPressStorage * 0.6;
            let loadWeightUp = increaseByPercentage(loadWeight, loadPercentage);
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workMilitaryPressElem.textContent = calculatedResult;
        } else if (workMiddlePressElem) {
            let loadWeight = benchPressStorage * 0.85;
            let loadWeightUp = increaseByPercentage(loadWeight, loadPercentage);
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workMiddlePressElem.textContent = calculatedResult;
        } else {
            console.log("error moduleOneSecondtDay");
        }
    });
}
