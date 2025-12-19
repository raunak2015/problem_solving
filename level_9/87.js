// Q87. Check Perfect Square
// Return true if number is a perfect square.

// Input: n = 16 → Output: true
// Input: n = 15 → Output: false
// Input: n = 1 → Output: true

function checkSquare(num){
    if(num<0) return false;

    let res = Math.sqrt(num);
    return Number.isInteger(res);

}

console.log(checkSquare(25));

function checkSquare2(num){
    for(let i= 1; i<num; i++){
        if(i*i == num){
            return true
        }
    }
    return false;
}

console.log(checkSquare2(25));