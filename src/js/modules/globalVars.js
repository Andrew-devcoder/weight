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

//
// export const maxWeightPercentValue = maxWeightPercentElem.textContent;

//
export function increaseByPercentage(localStorage, loadPercentage) {
    let loadWeight = localStorage * loadPercentage;
    let loadWeightUp = loadWeight + parseFloat(localStorage);
    return loadWeightUp;
}

//
export function isModulePage() {
    const moduleOneRegex = /module-one/;
    if (moduleOneRegex.test(window.location.href)) {
        let loadPercentage = 0;
        return loadPercentage;
    }

    const moduleTwoRegex = /module-two/;
    if (moduleTwoRegex.test(window.location.href)) {
        let loadPercentage = 0.02;
        return loadPercentage;
    }
}
