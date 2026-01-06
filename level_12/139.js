
// Q139. Harshad Number (Niven Number)
// A number is Harshad if it’s divisible by sum of its digits.

// Input: n = 18 → Digits: 1+8 = 9 → 18 % 9 == 0 → Output: true
// Input: n = 21 → Digits: 2+1 = 3 → 21 % 3 == 0 → Output: true
// Input: n = 19 → Digits: 1+9 = 10 → 19 % 10 != 0 → Output: false

function harshadNUmber(num){
    let arr = String(num).split("");
    let temp = arr.reduce((a,b)=>a + Number(b),0);
    return num%temp==0;
}

console.log(harshadNUmber(18));
console.log(harshadNUmber(21));
console.log(harshadNUmber(19));