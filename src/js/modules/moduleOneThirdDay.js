import { changeWeightElems } from "./globalVars.js";
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

        if (workSquatElem) {
            let squat = localStorage.getItem("squat");
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                squat,
                maxWeightPercentValue
            );
            workSquatElem.textContent = calculatedResult;
        } else if (workPressElem) {
            let benchPress = localStorage.getItem("benchPress");
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                benchPress,
                maxWeightPercentValue
            );
            workPressElem.textContent = calculatedResult;
        } else if (workInclinePressElem) {
            let benchPress = localStorage.getItem("benchPress");
            let loadWeight = benchPress * 0.8;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workInclinePressElem.textContent = calculatedResult;
        } else if (workBicepsElem) {
            let benchPress = localStorage.getItem("benchPress");
            let loadWeight = benchPress * 0.35;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
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
