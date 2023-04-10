// id
export const squatInput = document.getElementById("squat-input");
export const benchPressInput = document.getElementById("benchpress-input");
export const deadliftInput = document.getElementById("deadlift-input");

// selector
export const changeWeightElems = document.querySelectorAll(".change-weight");

// local storage
export const squatStorage = localStorage.getItem("squat");
export const benchPressStorage = localStorage.getItem("benchPress");
export const deadliftStorage = localStorage.getItem("deadlift");

// cal + %
export function increaseByPercentage(localStorage, loadPercentage) {
    let loadWeight = localStorage * loadPercentage;
    let loadWeightUp = loadWeight + parseFloat(localStorage);
    return loadWeightUp;
}

// ability to progress
export function isModulePage() {
    if (/module-one/.test(window.location.href)) {
        return 0;
    } else if (/module-two/.test(window.location.href)) {
        return 0.02;
    } else if (/module-three/.test(window.location.href)) {
        return 0.04;
    } else if (/module-four/.test(window.location.href)) {
        return 0.06;
    } else {
        console.log("error: isModulePage");
    }
}
