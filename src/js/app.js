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

            window.location.assign("modul1.html");
        });
}

// function calculateResult(maxWeight, maxWeightPercent) {
//     let percent = maxWeightPercent / 100;
//     let result = percent * maxWeight;
//     let closestNumber;

//     if (result % 5 === 0 || result % 2.5 === 0) {
//         closestNumber = result;
//     } else {
//         let candidate1 = Math.ceil(result / 2.5) * 2.5;
//         let candidate2 = Math.ceil(result / 5) * 5;

//         closestNumber =
//             Math.abs(candidate1 - result) <= Math.abs(candidate2 - result)
//                 ? candidate1
//                 : candidate2;
//     }

//     return closestNumber;
// }

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

function updateSquatWeights() {
    const changeWeightElems = document.querySelectorAll(".change-weight");
    changeWeightElems.forEach((changeWeightElem) => {
        const workSquatElem = changeWeightElem.querySelector(".work-squat");
        const workPressElem = changeWeightElem.querySelector(".work-press");
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
        } else {
            console.log("error");
        }
    });
}

if (window.location.href.includes("modul1.html")) {
    let squat = localStorage.getItem("squat");
    let benchPress = localStorage.getItem("benchPress");
    let deadlift = localStorage.getItem("deadlift");

    console.log(squat);
    console.log(benchPress);
    console.log(deadlift);

    updateSquatWeights();
} else {
    // for index.html
    localStorage.clear();
    inputWeight();
}
