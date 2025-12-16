// Q61. Double Each Element
// Given an array, return a new array with each element doubled.

// Input: [1, 2, 3] → Output: [2, 4, 6]
// Input: [5, -2] → Output: [10, -4]
// Input: [] → Output: []

function doubled(arr){
    for(let i = 0; i <arr.length; i++){
        arr[i] = arr[i]*2
    }

    return arr;
}

console.log(doubled([5,8,-1]));