// Q123. Minimum of Three Numbers
// Given three numbers, return the smallest.

// Input: a = 3, b = 7, c = 5 → Output: 3
// Input: a = -1, b = -5, c = -3 → Output: -5
// Input: a = 10, b = 10, c = 5 → Output: 5

function minimum(num1,num2,num3){
    if(num1<num2 && num1<num3) return num1
    else if(num2<num3 && num2<num1) return num2
    else return num3;
}

console.log(minimum(3,7,5));
console.log(minimum(-1,-5,-3));
console.log(minimum(10,10,5));