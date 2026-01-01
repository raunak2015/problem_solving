// Q117. Celsius to Fahrenheit
// Formula: F = (C * 9/5) + 32

// Input: C = 0 → Output: 32
// Input: C = 25 → Output: 77
// Input: C = 100 → Output: 212

function fahrenheit(c){
    return (c * (9/5)+32) 
}

console.log(fahrenheit(0));
console.log(fahrenheit(25));
console.log(fahrenheit(100));