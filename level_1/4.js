// Q4. Positive, Negative, or Zero
// Given a number, print "positive", "negative", or "zero".

// Input: 8 → Output: "positive"
// Input: -2 → Output: "negative"
// Input: 0 → Output: "zero"

function sign(num){
    if(num>0){
        console.log("Positive");
    }
    else if(num<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}
sign(0);