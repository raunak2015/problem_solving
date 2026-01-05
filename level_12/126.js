// Q126. Sum of All Odd Numbers from 1 to n
// Given n, find sum of all odd numbers from 1 to n.

// Input: n = 5 → Odds: 1,3,5 → Output: 9
// Input: n = 6 → Odds: 1,3,5 → Output: 9
// Input: n = 1 → Odds: 1 → Output: 1

function allOdd(num, sum = 0){
    if(num<1) return sum;
    if(num%2!==0){
        sum+=num
    }
    return allOdd(num-1,sum);
}

console.log(allOdd(5));
console.log(allOdd(6));
console.log(allOdd(1));