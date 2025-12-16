/* Q57. Print Only Positive Numbers
Given an array, print only positive numbers.

Input: [-1, 0, 5, 3, -2] → Output: 5 3
Input: [1, 2, 3] → Output: 1 2 3
Input: [-5, -2] → Output: (nothing) */


function printPositiveNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
        }
    }
}
printPositiveNumbers([2,5,8,6,-5,9,-56,5])