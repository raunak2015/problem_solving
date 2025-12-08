// Q16. Product 1 to N
// Given N, find product of numbers from 1 to N.

// Input: N = 4 → Output: 24 (1×2×3×4)
// Input: N = 1 → Output: 1
// Input: N = 5 → Output: 120


function product(N) {
    sum = 1;
    for (let i = 1; i<=N; i++){
        sum *=i;
    }
    console.log(sum);
}

product(5)