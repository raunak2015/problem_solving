// Given an array, print elements greater than 10.

// Input: [5, 12, 7, 20, 3] → Output: 12 20
// Input: [10, 11, 9] → Output: 11
// Input: [1, 2, 3] → Output: (nothing)

function printGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }

}

printGreaterThanTen([5, 12, 7, 20, 3, 11, 10, 15])