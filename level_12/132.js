// Q132. Smallest Digit in a Number
// Given a number, return the smallest digit.

// Input: n = 5823 → Digits: 5,8,2,3 → Output: 2
// Input: n = 709 → Digits: 7,0,9 → Output: 0
// Input: n = 4 → Output: 4

function smallest(num){
    
let arr = String(num).split("");
    let max = arr.reduce((a,b)=>{
        return a<b ? a : b;
    })
    return max;
}

console.log(smallest(5823));
console.log(smallest(709));
console.log(smallest(4));