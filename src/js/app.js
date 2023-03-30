import * as flsFunctions from "./modules/function.js";
// import { modul1 } from "./modul1.js";

flsFunctions.isWebp();

if (window.location.href.includes("index.html")) {
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
}
