// Q154. Contains Only Digits
// Return true if every character is 0–9 and string is not empty.

// Input: "12345" → Output: true
// Input: "123a5" → Output: false
// Input: "" → Output: false (you can define this rule)

function digit(str){
    let num = Number(str);
    return !isNaN(num)
}

console.log(digit("12345"));
console.log(digit("123a5"));
console.log(digit(""));