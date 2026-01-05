// Q133. Count Even Digits in a Number
// Given a number, count how many digits are even.

// Input: n = 1234 → Digits: 1,2,3,4 → Evens: 2,4 → Output: 2
// Input: n = 5050 → Digits: 5,0,5,0 → Evens: 0,0 → Output: 2
// Input: n = 1357 → Digits: all odd → Output: 0


function countEven(num){
    let arr = String(num).split("");
    let count = arr.filter((element)=>{
        return element%2==0
    })
    return count.length;
}

console.log(countEven(1234));
console.log(countEven(5050));
console.log(countEven(1357));
