// Q20. First N Multiples of 7
// Print first N multiples of 7.

// Input: N = 3 → Output: 7 14 21
// Input: N = 5 → Output: 7 14 21 28 35
// Input: N = 1 → Output: 7

function multiplesOf7(n){
    for(i= 1; i<=n; i++){
        process.stdout.write(7*i + " ");
    }
}

multiplesOf7(5);