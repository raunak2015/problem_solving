// Q127. Count Numbers Divisible by 2 or 3 (1 to n)
// Given n, count how many numbers between 1 and n are divisible by 2 or 3.

// Input: n = 6 Numbers: 2,3,4,6 → Output: 4
// Input: n = 10 Numbers: 2,3,4,6,8,9,10 → Output: 7
// Input: n = 1 → Output: 0

function divisible(num,count=0){
    if(num<1) return count;
    if(num%2==0 || num%3==0) count++;
    return divisible(num-1,count);
}

console.log(divisible(6));
console.log(divisible(10));
console.log(divisible(1));