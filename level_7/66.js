// Q66. Find Index of a Value
// Given an array and a value, return index or -1.

// Input: [10, 20, 30], value = 20 → Output: 1
// Input: [10, 20, 30], value = 40 → Output: -1
// Input: ["a", "b"], value = "b" → Output: 1

function findIndex(arr,num){
    return arr.indexOf(num);
}

console.log(findIndex([45,65,91,10,50],10));

