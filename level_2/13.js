
// Q13. Even Numbers 1 to N
// Print all even numbers from 1 to N.

// Input: N = 10 → Output: 2 4 6 8 10
// Input: N = 7 → Output: 2 4 6
// Input: N = 2 → Output: 2

function even(N){
    for(let i=1; i<=N; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}

even(10);