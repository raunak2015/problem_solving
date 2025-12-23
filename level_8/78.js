// Q78. Largest Positive and Smallest Negative
// Find largest positive and smallest negative (if they exist).

// Input: [-5, -1, 3, 7, -2] → Largest positive = 7, Smallest negative = -5
// Input: [1, 2, 3] → Largest positive = 3, Smallest negative = null (or something similar)
// Input: [-3, -1] → Largest positive = null, Smallest negative = -3

function check(arr) {
    arr.sort((a, b) => a - b)
    let largestPositive = arr[arr.length - 1] > 0 ? arr[arr.length - 1] : null;
    let smallestNegative = arr[0] < 0 ? arr[0] : null;

    console.log("Largest positive =", largestPositive);
    console.log("Smallest negative =", smallestNegative);
}

check([-5, -1, 3, 7, -2]);

function check2(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    console.log("Largest positive " + max > 0 ? max : null);
    console.log("Largest negative" + min < 0 ? min : null);
}

check2([-5, -1, 3, 7, -2]);
check2([-3, -1]);
