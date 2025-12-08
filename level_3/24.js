// Q24. Reverse a Number
// Given a number, print its reverse.

// Input: n = 1234 → Output: 4321
// Input: n = 100 → Output: 1 (leading zeros dropped)
// Input: n = -321 → Output: -123 (if you handle sign)

function reverse(num) {
    let sign = Math.sign(num);
    num = Math.abs(num);
    let rev = 0;
    while (num != 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    console.log(rev*sign);
}

reverse(-12345)


//using innbuild mathod

function reverseNum(n){
    let sign = Math.sign(n);
    n = Math.abs(n);
    n=Number(String(n).split("").reverse().join(""))*sign;

    console.log(n);

}

reverseNum(-12300)