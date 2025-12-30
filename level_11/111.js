// Q111. Longer of Two Strings
// Write a function that returns the longer string. If equal, you can return the first.

// Input: "hi", "hello" → Output: "hello"
// Input: "javascript", "js" → Output: "javascript"
// Input: "abc", "xyz" → Output: "abc" (or "xyz" – define rule; I’ll assume first)

function longerString(str1, str2){
    if(str1.length >= str2.length){
        return str1;
    } else {
        return str2;
    }
}

console.log(longerString("hi", "hello"));
console.log(longerString("javascript", "js"));
console.log(longerString("abc", "xyz"));