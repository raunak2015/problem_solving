// Q45. Count Digits in a String
// Given a string, count how many characters are digits (0–9).

// Input: "abc123" → Output: 3
// Input: "2025 year" → Output: 4 (2,0,2,5)
// Input: "no digits" → Output: 0

function countDigit(str1) {
    let arr = "1234567890"
    // str1 = str1.split("");
    let count = 0;

    for (let char of str1) {
        if (arr.includes(char)) {
            count++;
        }
    }
    return count;
}
function check(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let check = Number(str[i]);
        if (check >= 0 && check <= 9) {
            count++;
        }
    }
    return count;
}

console.log(countDigit("abhd456"));
console.log(check("abhd456"));