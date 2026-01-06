// Q137. Sum of Squares 1² + 2² + … + n²
// Given n, compute sum of squares.

// Input: n = 3 → 1² + 2² + 3² = 1 + 4 + 9 = 14 → Output: 14
// Input: n = 1 → 1² = 1 → Output: 1
// Input: n = 4 → 1 + 4 + 9 + 16 = 30 → Output: 30

function sumOfSquars(num,sum=0){
    if(num==0) return sum;
    sum += num**2;
    return sumOfSquars(num-1,sum)
}

console.log(sumOfSquars(3));
console.log(sumOfSquars(1));
console.log(sumOfSquars(4));