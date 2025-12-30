// Q104. Check Even (true/false)
// Write a function that returns true if number is even, false otherwise.

// Input: n = 4 → Output: true
// Input: n = 7 → Output: false
// Input: n = 0 → Output: true

function even(num){
    return num%2==0;
}

console.log(even(4));
console.log(even(7));
console.log(even(0));