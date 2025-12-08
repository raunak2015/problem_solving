
// Q14. Odd Numbers 1 to N
// Print all odd numbers from 1 to N.

// Input: N = 10 → Output: 1 3 5 7 9
// Input: N = 5 → Output: 1 3 5
// Input: N = 1 → Output: 1

function odd(N){
    for(let i = 0; i<=N;i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}

odd(15)