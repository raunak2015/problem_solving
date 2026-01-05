// Q130. Co-prime Numbers
// Two numbers are co-prime if their GCD is 1.

// Input: a = 8, b = 15 → GCD = 1 → Output: true
// Input: a = 12, b = 18 → GCD = 6 → Output: false
// Input: a = 7, b = 9 → GCD = 1 → Output: true

function coPrime(num1,num2){
    let Range = Math.min(num1,num2);
    let GCD = 1;
    for(let i=Range;i>=1;i--){
        if(num1 % i === 0 && num2 % i === 0){
            GCD = i;
            break;
        }
    }
    return GCD === 1;
}

console.log(coPrime(7,9));
console.log(coPrime(12,18));
console.log(coPrime(7,9));