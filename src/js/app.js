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

if (window.location.href.includes("modul1.html")) {
    let squat = localStorage.getItem("squat");
    let benchPress = localStorage.getItem("benchPress");
    let deadlift = localStorage.getItem("deadlift");

    console.log(squat);
    console.log(benchPress);
    console.log(deadlift);

    let workSquat = document.querySelector(".work-squat");

    workSquat.textContent = squat;
} else {
    // for index.html
    localStorage.clear();
    inputWeight();
}

function calculateResult(maxWeight, maxWeightPercent) {
    let maxWeightPercent = maxWeightPercent / 100;
    let result = maxWeightPercent * maxWeight; // Вычисляем % от максимального веса

    let candidate1 = Math.ceil(result / 2.5) * 2.5; // Ближайшее число, которое делится на 2.5 без остатка
    let candidate2 = Math.ceil(result / 5) * 5; // Ближайшее число, которое делится на 5 без остатка

    // Выбираем число, ближайшее к результату, из двух кандидатов
    let closestNumber =
        Math.abs(candidate1 - result) < Math.abs(candidate2 - result)
            ? candidate1
            : candidate2;

    return closestNumber;
}
