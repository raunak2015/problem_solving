// Q25. Palindrome Number
// Check if a number reads same forwards and backwards.

// Input: n = 121 → Output: true (or "palindrome")
// Input: n = 123 → Output: false
// Input: n = 0 → Output: true

function palindrome(num){
    let rev = 0;
    let temp = num;
    while (num != 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    if(rev === temp){
        console.log("palindrome");
    }
    else{
        console.log("Not palindrome");
    }
}

palindrome(12121)