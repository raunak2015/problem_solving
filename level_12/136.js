// Q136. Is 3-digit Number
// Return true if number is between 100 and 999 (inclusive).

// Input: n = 150 → Output: true
// Input: n = 99 → Output: false
// Input: n = 1000 → Output: false

function digit(num){
    return (num>=100 && num<=999)
}

console.log(digit(150));
console.log(digit(99));
console.log(digit(1000));