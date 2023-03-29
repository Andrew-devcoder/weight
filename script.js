const squatInput = document.getElementById("squat-input");
const benchPressInput = document.getElementById("benchpress-input");
const deadliftInput = document.getElementById("deadlift-input");

document.getElementById("submit-button").addEventListener("click", function () {
    const squat = squatInput.value;
    const benchPress = benchPressInput.value;
    const deadlift = deadliftInput.value;

    console.log("Squat:", squat);
    console.log("Bench Press:", benchPress);
    console.log("Deadlift:", deadlift);
});
