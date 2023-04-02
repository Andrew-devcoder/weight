import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

function inputWeight() {
    const squatInput = document.getElementById("squat-input");
    const benchPressInput = document.getElementById("benchpress-input");
    const deadliftInput = document.getElementById("deadlift-input");

    document
        .getElementById("submit-button")
        .addEventListener("click", function () {
            let squat = squatInput.value;
            let benchPress = benchPressInput.value;
            let deadlift = deadliftInput.value;

            localStorage.setItem("squat", squat);
            localStorage.setItem("benchPress", benchPress);
            localStorage.setItem("deadlift", deadlift);

            console.log("Squat:", squat);
            console.log("Bench Press:", benchPress);
            console.log("Deadlift:", deadlift);

            window.location.assign("modul1-one-day.html");
        });
}

function calculateResult(maxWeight, maxWeightPercent) {
    let percent = maxWeightPercent / 100;
    let result = percent * maxWeight;
    let closestNumber;

    if (result % 5 === 0 || result % 2.5 === 0) {
        closestNumber = result;
    } else {
        let candidate1 = Math.ceil(result / 2.5) * 2.5;
        let candidate2 = Math.floor(result / 2.5) * 2.5;
        let candidate3 = Math.ceil(result / 5) * 5;
        let candidate4 = Math.floor(result / 5) * 5;

        let diff1 = Math.abs(result - candidate1);
        let diff2 = Math.abs(result - candidate2);
        let diff3 = Math.abs(result - candidate3);
        let diff4 = Math.abs(result - candidate4);

        let minDiff = Math.min(diff1, diff2, diff3, diff4);

        if (minDiff === diff1) {
            closestNumber = candidate1;
        } else if (minDiff === diff2) {
            closestNumber = candidate2;
        } else if (minDiff === diff3) {
            closestNumber = candidate3;
        } else {
            closestNumber = candidate4;
        }
    }

    return closestNumber;
}

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
        } else {
            console.log("error1");
        }
    });
}

function locationChange() {
    if (window.location.href.includes("modul1-one-day.html")) {
        let squat = localStorage.getItem("squat");
        let benchPress = localStorage.getItem("benchPress");
        let deadlift = localStorage.getItem("deadlift");

        console.log(squat);
        console.log(benchPress);
        console.log(deadlift);

        updateWeights();
    } else if (window.location.href.includes("modul1-two-day.html")) {
        let squat = localStorage.getItem("squat");
        let benchPress = localStorage.getItem("benchPress");
        let deadlift = localStorage.getItem("deadlift");

        console.log(squat);
        console.log(benchPress);
        console.log(deadlift);

        updateWeights();
    } else if (window.location.href.includes("index.html")) {
        // for index.html
        localStorage.clear();
        inputWeight();
    } else {
        console.log("error2");
    }
}

locationChange();

// function test() {
//     let benchPress = localStorage.getItem("benchPress");

//     let loadWeight = benchPress * 0.46;
//     let result = Math.floor(loadWeight * 0.45);
//     console.log(result);
// }
// test();
