// Q106. Is Between 1 and 100
// Write a function that returns true if n is between 1 and 100 (inclusive).

// Input: n = 50 → Output: true
// Input: n = 1 → Output: true
// Input: n = 150 → Output: false

function between(num){
    return (num>=1 && num<=100);
}

console.log(between(50));
console.log(between(1));
console.log(between(150));