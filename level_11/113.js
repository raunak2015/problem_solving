// Q113. Sign of Number as Text
// Write a function that returns "positive", "negative", or "zero".

// Input: n = 5 → Output: "positive"
// Input: n = -3 → Output: "negative"
// Input: n = 0 → Output: "zero"

function sign(num){
    if(num>0) return "positive"
    else if(num<0) return "negative"
    else return "zero"
}

console.log(sign(5));
console.log(sign(-3));
console.log(sign(0));