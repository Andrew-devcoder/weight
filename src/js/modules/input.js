import { squatInput, benchPressInput, deadliftInput } from "./globalVars.js";

export function inputWeight() {
    window.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector(".form");
        form.addEventListener("submit", function (event) {
            event.preventDefault();
        });
    });
    document
        .getElementById("submit-button")
        .addEventListener("click", function () {
            const squat = squatInput.value;
            const benchPress = benchPressInput.value;
            const deadlift = deadliftInput.value;

            localStorage.setItem("squat", squat);
            localStorage.setItem("benchPress", benchPress);
            localStorage.setItem("deadlift", deadlift);

            window.location.assign("module-one-first-day.html");
        });
}
