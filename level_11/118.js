// Q118. Fahrenheit to Celsius
// Formula: C = (F - 32) * 5/9

// Input: F = 32 → Output: 0
// Input: F = 212 → Output: 100
// Input: F = 98.6 → Output: approximately 37

function celsius(f){
    return ((f - 32)*(5/9))
}

console.log(celsius(32));
console.log(celsius(212));
console.log(celsius(98.6));