// Q19. Factorial (Iterative)
// Compute N! using a loop.

// Input: N = 5 → Output: 120
// Input: N = 0 → Output: 1 (by definition)
// Input: N = 3 → Output: 6

function factorial(n){
    let sum = 1;
    for(i = 1; i<= n; i++){
        sum*=i;
    }
    console.log(`Factorial of ${n} is ${sum}`);
}

factorial(7)