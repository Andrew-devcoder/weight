import {
    changeWeightElems,
    squatStorage,
    benchPressStorage,
} from "./globalVars.js";
import { calculateResult } from "./calculateResult.js";

function fnc(a, b) {
    let loadWeight = squatStorage * b;
    let loadWeightUp = loadWeight + parseFloat(a);
    return loadWeightUp;
}

export function moduleOneFirstDay(i) {
    changeWeightElems.forEach((changeWeightElem) => {
        const workSquatElem = changeWeightElem.querySelector(".work-squat");
        const workPressElem = changeWeightElem.querySelector(".work-press");
        const workDumbbellPressElem = changeWeightElem.querySelector(
            ".work-dumbbell-press"
        );
        const workFrenchPressElem =
            changeWeightElem.querySelector(".work-french-press");
        const maxWeightPercentElem = changeWeightElem.querySelector(
            ".max-weight-percent"
        );
        const maxWeightPercentValue = maxWeightPercentElem.textContent;

        if (workSquatElem) {
            let loadWeightUp = fnc(squatStorage, i);
            // let loadWeight = squatStorage * i;
            // console.log(loadWeight);
            // console.log(squatStorage);
            // let loadWeightUp = loadWeight + parseFloat(squatStorage);
            // console.log(loadWeightUp);
            const calculatedResult = calculateResult(
                loadWeightUp,
                maxWeightPercentValue
            );
            console.log(calculatedResult);
            workSquatElem.textContent = calculatedResult;
        } else if (workPressElem) {
            const calculatedResult = calculateResult(
                benchPressStorage,
                maxWeightPercentValue
            );
            workPressElem.textContent = calculatedResult;
        } else if (workDumbbellPressElem) {
            let loadWeight = benchPressStorage * 0.32;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workDumbbellPressElem.textContent = calculatedResult;
        } else if (workFrenchPressElem) {
            let loadWeight = benchPressStorage * 0.46;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workFrenchPressElem.textContent = calculatedResult;
        } else {
            console.log("error muduleOneFirstDay");
        }
    });
}
