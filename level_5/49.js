// Q49. Remove All Digits from a String
// Given a string, remove all digits.

// Input: "abc123" → Output: "abc"
// Input: "Js 101 course" → Output: "Js  course"
// Input: "2025" → Output: ""

function removeNumber(str) {
    let num = "1234567890"
    let result = "";

    for (let char of str) {
        if (!num.includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(removeNumber("my 123 num "));

function removeNumber2(str) {
    let obj = { '0': 1, '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1 }
    let str2 = "";
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            str2 += "";
        }
        else {
            str2 += str[i];
        }
    }
    return str2;
}
console.log(removeNumber2("my 123 num "));