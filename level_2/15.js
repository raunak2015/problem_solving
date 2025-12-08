// Q15. Sum 1 to N
// Given N, find sum of numbers from 1 to N.

// Input: N = 5 → Output: 15 (1+2+3+4+5)
// Input: N = 1 → Output: 1
// Input: N = 10 → Output: 55

function sum(N){
    let sum  = 0
    for(let i=1; i<=N; i++){
        sum+=i;
    }
    console.log(sum);
}

sum(10)