// Q10. In Range 10–50
// Given a number, check if it lies between 10 and 50 (inclusive).

// Input: 25 → Output: "in range"
// Input: 10 → Output: "in range"
// Input: 7 → Output: "out of range"

function range(num){
    (num>=10 && num<=50)?console.log("in range"):console.log("out of range");
}

range(10)