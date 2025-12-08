// Q22. Sum of Digits
// Given a number, find sum of its digits.

// Input: n = 123 → Output: 6 (1+2+3)
// Input: n = 505 → Output: 10 (5+0+5)
// Input: n = 9 → Output: 9

function sumOfDigit(num){
    let sum = 0, temp = num, digit;
    while(temp !=0){
        digit = temp%10;
        sum+=digit;
        temp = Math.floor(temp/10);
    }
    console.log(sum);
}

sumOfDigit(1234);