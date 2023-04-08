import { changeWeightElems } from "./globalVars.js";
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

        if (workDeadliftElem) {
            let deadlift = localStorage.getItem("deadlift");
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                deadlift,
                maxWeightPercentValue
            );
            workDeadliftElem.textContent = calculatedResult;
        } else if (workPressElem) {
            let benchPress = localStorage.getItem("benchPress");
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                benchPress,
                maxWeightPercentValue
            );
            workPressElem.textContent = calculatedResult;
        } else if (workMorningDeadliftElem) {
            let deadlift = localStorage.getItem("deadlift");
            let loadWeight = deadlift * 0.55;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workMorningDeadliftElem.textContent = calculatedResult;
        } else if (workMilitaryPressElem) {
            let benchPress = localStorage.getItem("benchPress");
            let loadWeight = benchPress * 0.6;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workMilitaryPressElem.textContent = calculatedResult;
        } else if (workMiddlePressElem) {
            let benchPress = localStorage.getItem("benchPress");
            let loadWeight = benchPress * 0.85;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
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
