export function calculateResult(maxWeight, maxWeightPercent) {
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
