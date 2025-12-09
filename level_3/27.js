
// Q27. All Primes from 1 to N
// Print all prime numbers from 1 to N.

// Input: N = 10 → Output: 2 3 5 7
// Input: N = 5 → Output: 2 3 5
// Input: N = 2 → Output: 2

function allPrime(num) {
    for (i = 1; i <= num; i++) {
        let a = 0
        for (j = 2; j < i ; j++) {
            if (i % j ==0) {
                a = 1;
            }
        }
        if (a == 0) {
            console.log(i);
        }
        
    }
}

allPrime(20)