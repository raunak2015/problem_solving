// 110. Last Character of String
// Write a function that returns the last character of a string.

// Input: "hello" → Output: "o"
// Input: "A" → Output: "A"
// Input: "js" → Output: "s"


function last(str){
    return str[str.length-1]
}

console.log(last("hello"));
console.log(last("A"));
console.log(last("js"));