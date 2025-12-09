// Q31. Length of String
// Print length of a string.

// Input: "hello" → Output: 5
// Input: "" → Output: 0
// Input: "JavaScript" → Output: 10


function checkLength(txt){

    let count = 0;
    for(let char of txt){
        count++
    }
    // console.log(txt.length);
    console.log(count);
}

checkLength("Hello");

function checkLength1(txt){
    let count = 0;

    while(txt[count]){
        count++;
    }
    console.log(count);
}

checkLength1("Hello")

