
// Q38. Palindrome String
// Check if a string is a palindrome.

// Input: "madam" → Output: true
// Input: "racecar" → Output: true
// Input: "hello" → Output: false

function palindrome(str) {
    let txt = str;
    str = str.split("").reverse().join("");

    if (txt === str) {
        console.log("palindrome");
    }
    else {
        console.log("Not Palindrome");
    }

}

palindrome("mam")

function pali(str) {
    let i = 0;
    let j = str.length - 1;
    while(i<=j){
        if(str[i]!=str[j]){
            console.log("Not palindrome");
            return;
        }
        i++,j--;
    }
    console.log("palindrome");
}
pali("mam")