// Q36. To Lowercase
// Convert a string to lowercase.

// Input: "HELLO" → Output: "hello"
// Input: "Js" → Output: "js"
// Input: "123ABC" → Output: "123abc"

function lowerCase(str) {
    return str.toLowerCase()
}

console.log(lowerCase("HELLO"));

function lower(str) {
    let res = "";

    for (i = 0; i < str.length; i++) {
        let value = str.charCodeAt(i);
        if (value >= 65 && value <= 90) {
            res = res + String.fromCharCode(value + 32)
        }
        else {
            res = res + str[i];
        }
    }
    console.log(res);
}

lower("ASDF")