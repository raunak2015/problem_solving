// Q108. Is String Length > 5
// Write a function that returns true if string length is greater than 5.

// Input: "hello" → Output: false
// Input: "javascript" → Output: true
// Input: "" → Output: false

function length(str){
    return str.length>5;
}

console.log(length("hello"));
console.log(length("javascript"));
console.log(length(""));