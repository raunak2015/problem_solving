// Q135. Absolute Difference of Two Numbers
// Return |a - b|.

// Input: a = 10, b = 3 → Output: 7
// Input: a = 3, b = 10 → Output: 7
// Input: a = -5, b = 5 → Output: 10

function difference(num1,num2){
    return Math.abs(num1-num2)
}

console.log(difference(10,7));
console.log(difference(3,10));
console.log(difference(-5,5));


function difference2(num1, num2){
    let res = num1-num2;
    if(res<0){
        res *= -1;
    }
    return res;
}

console.log(difference2(10,7));
console.log(difference2(3,10));
console.log(difference2(-5,5));