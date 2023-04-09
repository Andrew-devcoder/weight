import {
    changeWeightElems,
    squatStorage,
    benchPressStorage,
    increaseByPercentage,
} from "./globalVars.js";
import { calculateResult } from "./calculateResult.js";

export function moduleOneThirdDay(loadPercentage) {
    changeWeightElems.forEach((changeWeightElem) => {
        const workSquatElem = changeWeightElem.querySelector(".work-squat");
        const workPressElem = changeWeightElem.querySelector(".work-press");
        const workInclinePressElem = changeWeightElem.querySelector(
            ".work-incline-press"
        );
        const workBicepsElem = changeWeightElem.querySelector(".work-biceps");
        const maxWeightPercentElem = changeWeightElem.querySelector(
            ".max-weight-percent"
        );
        const maxWeightPercentValue = maxWeightPercentElem.textContent;

        if (workSquatElem) {
            let loadWeightUp = increaseByPercentage(
                squatStorage,
                loadPercentage
            );
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workSquatElem.textContent = calculatedResult;
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
        } else if (workInclinePressElem) {
            let loadWeight = benchPressStorage * 0.8;
            let loadWeightUp = increaseByPercentage(loadWeight, loadPercentage);
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workInclinePressElem.textContent = calculatedResult;
        } else if (workBicepsElem) {
            let loadWeight = benchPressStorage * 0.35;
            let loadWeightUp = increaseByPercentage(loadWeight, loadPercentage);
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            workBicepsElem.textContent = calculatedResult;
        } else {
            console.log("error moduleOneThirdDay");
        }
    });
}
