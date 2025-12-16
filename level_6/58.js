// Q58. Print Only Negative Numbers
// Given an array, print only negative numbers.

// Input: [-1, 0, 5, 3, -2] → Output: -1 -2
// Input: [1, 2, 3] → Output: (nothing)
// Input: [-5, -2] → Output: -5 -2

function printNegativeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log(arr[i]);
        }
    }
}
printNegativeNumbers([2,5,8,6,-5,9,-56,5])