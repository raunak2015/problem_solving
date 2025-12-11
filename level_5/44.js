// Q44. Compare Two Strings (Exact Match)
// Given two strings, check if they are exactly equal (case-sensitive).

// Input: "hello", "hello" → Output: true
// Input: "Hello", "hello" → Output: false
// Input: "js", "js " → Output: false
function checkEqual(str1, str2) {
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    };
}

console.log(checkEqual("hello", "Hello"));