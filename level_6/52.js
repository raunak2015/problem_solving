// Q52. Sum of Array Elements
// Given an array of numbers, find the sum.

// Input: [1, 2, 3] → Output: 6
// Input: [5, -2, 7] → Output: 10
// Input: [] → Output: 0 (if you choose that convention)

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}

console.log(sumOfArray([1,2,3]));