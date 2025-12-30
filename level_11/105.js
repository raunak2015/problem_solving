// Q105. Check Odd (true/false)
// Write a function that returns true if number is odd, false otherwise.

// Input: n = 5 → Output: true
// Input: n = 8 → Output: false
// Input: n = 0 → Output: false

function odd(num){
    return num%2!=0
}

console.log(odd(5));
console.log(odd(8));
console.log(odd(0));