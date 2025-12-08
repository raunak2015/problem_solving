// Q18. Count Numbers Divisible by 3 (1 to N)
// Count how many numbers between 1 and N are divisible by 3.

// Input: N = 10 → Numbers: 3, 6, 9 → Output: 3
// Input: N = 7 → Numbers: 3, 6 → Output: 2
// Input: N = 2 → No numbers → Output: 0

function countNumbers(N){
    let count = 0;
    for(i = 1 ; i<=N; i++){
        if(i%3===0){
            count++;
        }
    }
    console.log(count);
}

countNumbers(10)