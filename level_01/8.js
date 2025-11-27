// Q8. Divisible by 3 and 5
// Given a number, print if it is divisible by both 3 and 5.

// Input: 15 → Output: "divisible by 3 and 5"
// Input: 30 → Output: "divisible by 3 and 5"
// Input: 9 → Output: "not divisible by both"
function divisibleBy3And5(num){
    if(num%3 ===0 && num%5 === 0)
        console.log("divisible by 3 and 5");
    else
        console.log("not divisible by both");
}

divisibleBy3And5(15)