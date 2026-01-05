// Q131. Largest Digit in a Number
// Given a number, return the largest digit.

// Input: n = 5823 → Digits: 5,8,2,3 → Output: 8
// Input: n = 709 → Digits: 7,0,9 → Output: 9
// Input: n = 4 → Output: 4

function largestDigit(num){
    let arr = String(num).split("");
    let max = arr.reduce((a,b)=>{
        return a>b ? a : b;
    })
    return max;
}

console.log(largestDigit(5823));
console.log(largestDigit(709));
console.log(largestDigit(4));