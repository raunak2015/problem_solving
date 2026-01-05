// Q129. Perfect Number
// A perfect number equals the sum of its proper divisors (excluding itself).

// Input: n = 6 Divisors: 1,2,3 → Sum = 6 → Output: true
// Input: n = 28 Divisors: 1,2,4,7,14 → Sum = 28 → Output: true
// Input: n = 10 Divisors: 1,2,5 → Sum = 8 → Output: false

function perfect(num){
    let sum = 0;
    for(let i=1; i<=num/2;i++){
        if(num%i === 0){
            sum += i;
        }
    }
    return sum === num
}

console.log(perfect(6));
console.log(perfect(10));
console.log(perfect(28));