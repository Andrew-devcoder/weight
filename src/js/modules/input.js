import { squatInput, benchPressInput, deadliftInput } from "./globalVars.js";

export function inputWeight() {
    document
        .getElementById("submit-button")
        .addEventListener("submit", function () {
            const squat = squatInput.value;
            const benchPress = benchPressInput.value;
            const deadlift = deadliftInput.value;

            localStorage.setItem("squat", squat);
            localStorage.setItem("benchPress", benchPress);
            localStorage.setItem("deadlift", deadlift);

            window.location.assign("module-one-first-day.html");
        });
}
