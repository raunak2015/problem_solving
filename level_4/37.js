// Q37. Reverse a String
// Reverse all characters in the string.

// Input: "hello" → Output: "olleh"
// Input: "abc" → Output: "cba"
// Input: "a" → Output: "a"

function reverse(str) {
    str = str.split("").reverse().join("");
    return str;
}

console.log(reverse("hello"));

function reve(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res = res + str[i]
    }
    console.log(res);
}

reve("hello")