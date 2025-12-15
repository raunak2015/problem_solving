// Q51. Print All Elements of an Array
// Given an array, print each element.

// Input: [1, 2, 3] → Output: 1 2 3
// Input: ["a", "b", "c"] → Output: a b c
// Input: [] → Output: (nothing printed)

let arr = [1,2,3]

console.log(...arr);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

arr = arr.join(" ");
console.log(arr);