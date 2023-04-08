import {
    changeWeightElems,
    squatStorage,
    benchPressStorage,
} from "./globalVars.js";
import { calculateResult } from "./calculateResult.js";

export function moduleOneThirdDay() {
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
            const calculatedResult = calculateResult(
                squatStorage,
                maxWeightPercentValue
            );
            workSquatElem.textContent = calculatedResult;
        } else if (workPressElem) {
            const calculatedResult = calculateResult(
                benchPressStorage,
                maxWeightPercentValue
            );
            workPressElem.textContent = calculatedResult;
        } else if (workInclinePressElem) {
            let loadWeight = benchPressStorage * 0.8;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workInclinePressElem.textContent = calculatedResult;
        } else if (workBicepsElem) {
            let loadWeight = benchPressStorage * 0.35;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workBicepsElem.textContent = calculatedResult;
        } else {
            console.log("error moduleOneThirdDay");
        }
    });
}
