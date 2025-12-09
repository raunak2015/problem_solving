// Q29. GCD of Two Numbers (Simple Loop)
// Given two numbers, find their greatest common divisor.

// Input: a = 12, b = 18 → Output: 6
// Input: a = 5, b = 9 → Output: 1
// Input: a = 20, b = 100 → Output: 20

function gcd(num1, num2){
    let gcd =1;
    let n = Math.min(num1,num2);
    for(i=1; i<=n; i++){
        if(num1%i===0 && num2%i===0){
            gcd = i;
        }
    }
    console.log(`GCD : ${gcd}`);
}

gcd(12,24);

