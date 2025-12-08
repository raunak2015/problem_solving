// Print multiplication table of a given number up to 10.

// Input: n = 5 → Output: 5 10 15 20 25 30 35 40 45 50
// Input: n = 2 → Output: 2 4 6 8 10 12 14 16 18 20
// Input: n = 7 → Output: 7 14 21 28 35 42 49 56 63 70

function table(n){
    for(let i=1; i<=10; i++){
        process.stdout.write(i*n + " ");
    }
    console.log();
}
table(2)
table(4)
table(5)