// Q125. Sum of All Even Numbers from 1 to n
// Given n, find sum of all even numbers from 1 to n.

// Input: n = 6 → Evens: 2,4,6 → Output: 12
// Input: n = 5 → Evens: 2,4 → Output: 6
// Input: n = 1 → No evens → Output: 0

function allEven(num,sum=0){
    if(num<1) return sum;
    if(num%2==0){

        sum+=num;
    }
    return allEven(num-1,sum)
}

console.log(allEven(6));
console.log(allEven(5));
console.log(allEven(1));