// Q63. Reverse Array into New Array
// Given an array, create a new array which is the reverse.

// Input: [1, 2, 3] → Output: [3, 2, 1]
// Input: ["a", "b", "c"] → Output: ["c", "b", "a"]
// Input: [7] → Output: [7]

function reverse(arr){
    arr = arr.reverse()
    return arr;
}

console.log(reverse([1, 2, 3]));