// Q122. Minimum of Two Numbers
// Given two numbers, return the smaller one.

// Input: a = 5, b = 9 → Output: 5
// Input: a = -3, b = 4 → Output: -3
// Input: a = 7, b = 7 → Output: 7

function minimum(num1,num2){
    if(num1>=num2) return num2
    else return num1;
}

console.log(minimum(5,9));
console.log(minimum(-3,4));
console.log(minimum(7,7));