// Q134. Count Odd Digits in a Number
// Given a number, count how many digits are odd.

// Input: n = 1234 → Digits: 1,2,3,4 → Odds: 1,3 → Output: 2
// Input: n = 5050 → Digits: 5,0,5,0 → Odds: 5,5 → Output: 2
// Input: n = 2468 → Digits: all even → Output: 0


function countOdd(num){
    let arr = String(num).split("");
    let count = arr.filter((element)=>{
        return element%2!=0
    })
    return count.length;
}

console.log(countOdd(1234));
console.log(countOdd(5050));
console.log(countOdd(2468));