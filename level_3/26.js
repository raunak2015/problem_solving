
// Q26. Prime Number (Simple Check)
// Given a number, check if it is prime.

// Input: n = 2 → Output: true
// Input: n = 17 → Output: true
// Input: n = 15 → Output: false

function prime(num){
    let a=0;
    for(i=2; i<num/2; i++){
        if(num%i===0){
            a=1;
            break;
        }
    }
    if(a==0){
        console.log("prime!!");
    }
    else{
        console.log(" not prime!!");
    }
}

prime(7);