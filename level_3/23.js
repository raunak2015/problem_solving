// Q23. Product of Digits
// Given a number, find product of its digits.

// Input: n = 123 → Output: 6 (1×2×3)
// Input: n = 505 → Output: 0 (5×0×5)
// Input: n = 46 → Output: 24 (4×6)

function productOfDigit(num){
    let sum = 1, temp = num, digit;
    while(temp !=0){
        digit = temp%10;
        sum*=digit;
        temp = Math.floor(temp/10);
    }
    console.log(sum);
}

productOfDigit(1234);