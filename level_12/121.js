// Q121. Multiple of 10
// Given a number, check if it is a multiple of 10.

// Input: n = 20 → Output: true
// Input: n = 15 → Output: false
// Input: n = 0 → Output: true (0 is divisible by 10)

function multipleOf10(num){
    return num%10 == 0
}

console.log(multipleOf10(20));
console.log(multipleOf10(15));
console.log(multipleOf10(0));