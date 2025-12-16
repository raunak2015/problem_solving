// Q60. Average of Array Elements
// Given an array of numbers, find the average.

// Input: [1, 2, 3, 4] → Sum = 10 → Output: 2.5
// Input: [5, 15] → Sum = 20 → Output: 10
// Input: [7] → Output: 7

function averageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }   

    let average = sum / arr.length;
    console.log("Average:", average);
}

averageOfArray([1, 2, 3, 4]);
averageOfArray([5, 15]);
averageOfArray([7]);