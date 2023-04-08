import * as flsFunctions from "./modules/function.js";
import { inputWeight } from "./modules/input.js";
import { calculateResult } from "./modules/calculateResult.js";
import { moduleOneFirstDay } from "./modules/moduleOneFirstDay.js";

flsFunctions.isWebp();

function updateWeights() {
    const changeWeightElems = document.querySelectorAll(".change-weight");
    changeWeightElems.forEach((changeWeightElem) => {
        const workSquatElem = changeWeightElem.querySelector(".work-squat");
        const workPressElem = changeWeightElem.querySelector(".work-press");
        const workDumbbellPressElem = changeWeightElem.querySelector(
            ".work-dumbbell-press"
        );
        const workFrenchPressElem =
            changeWeightElem.querySelector(".work-french-press");
        const workDeadliftElem =
            changeWeightElem.querySelector(".work-deadlift");
        const workMorningDeadliftElem = changeWeightElem.querySelector(
            ".work-morning-deadlift"
        );
        const workMilitaryPressElem = changeWeightElem.querySelector(
            ".work-military-press"
        );
        const workMiddlePressElem =
            changeWeightElem.querySelector(".work-middle-press");
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
        } else if (workDumbbellPressElem) {
            let benchPress = localStorage.getItem("benchPress");
            let loadWeight = benchPress * 0.32;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workDumbbellPressElem.textContent = calculatedResult;
        } else if (workFrenchPressElem) {
            let benchPress = localStorage.getItem("benchPress");
            let loadWeight = benchPress * 0.46;
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                loadWeight,
                maxWeightPercentValue
            );
            workFrenchPressElem.textContent = calculatedResult;
        } else if (workDeadliftElem) {
            let deadlift = localStorage.getItem("deadlift");
            const maxWeightPercentValue = maxWeightPercentElem.textContent;
            const calculatedResult = calculateResult(
                deadlift,
                maxWeightPercentValue
            );
            workDeadliftElem.textContent = calculatedResult;
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
            console.log("error: updateWeights()");
        }
    });
}

function locationChange() {
    if (
        window.location.href.includes("index.html" || "http://localhost:3000/")
    ) {
        localStorage.clear();
        inputWeight();
    } else if (window.location.href.includes("module-one-first-day.html")) {
        moduleOneFirstDay();
    } else if (window.location.href.includes("module-one-first-day.html")) {
        moduleOneFirstDay();
    } else {
        updateWeights();
    }
}

locationChange();
