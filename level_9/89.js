// Q89. Length of Each String in Array
// Given array of strings, return array of lengths.

// Input: ["hi", "hello", "a"] → Output: [2, 5, 1]
// Input: ["JS", "is", "cool"] → Output: [2, 2, 4]
// Input: [] → Output: []

function length(arr){
    return arr.map(element => {
       return element.length;
    });
}

console.log(length(["hi", "hello", "a"]));