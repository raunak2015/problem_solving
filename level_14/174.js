// Q174. Maximum Difference (max - min)
// Given array, find max - min.

// Input: [1, 5, 3, 9] → Max = 9, Min = 1 → Output: 8
// Input: [10, 10, 10] → Max = Min = 10 → Output: 0
// Input: [-5, -1, -10] → Max = -1, Min = -10 → Output: 9

function maxDifference(arr) {

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return max - min;
}

console.log(maxDifference([1, 5, 3, 9]));     
console.log(maxDifference([10, 10, 10]));     
console.log(maxDifference([-5, -1, -10]));    
