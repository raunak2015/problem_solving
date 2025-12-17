// Q62. Square Each Element
// Given an array, return a new array with each element squared.

// Input: [1, 2, 3] → Output: [1, 4, 9]
// Input: [-2, 4] → Output: [4, 16]
// Input: [0] → Output: [0]

function squared(arr){
    for(let i = 0; i <arr.length; i++){
        arr[i] = arr[i]*arr[i]
    }

    return arr;
}
console.log(squared([1, 2, 3]));
console.log(squared([-2, 4]));
console.log(squared([0]));