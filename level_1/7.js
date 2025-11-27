// Q7. Divisible by 5
// Given a number, print whether it is divisible by 5.

// Input: 10 → Output: "divisible by 5"
// Input: 11 → Output: "not divisible by 5"
// Input: 0 → Output: "divisible by 5"

function divisibleBy5(num) {
    if (num % 5 === 0) {
        console.log("divisible by 5");
    }
    else {
        console.log("not divisible by 5");
    }
}

// divisibleBy5(10);  
// divisibleBy5(11);  
// divisibleBy5(0);   

function divisibleBy5A(num){
    (num%5===0)?console.log("divisible by 5"):console.log("not divisible by 5");
}

divisibleBy5A(15);
