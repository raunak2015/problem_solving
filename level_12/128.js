// Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)
// Effectively numbers divisible by 10.

// Input: n = 20 → Numbers: 10,20 → Output: 2
// Input: n = 9 → No such numbers → Output: 0
// Input: n = 10 → Numbers: 10 → Output: 1

function divisible(num,count=0){
    if(num<1) return count;
    if(num%2==0 && num%5==0) count++;
    return divisible(num-1,count);
}

console.log(divisible(20));
console.log(divisible(9));
console.log(divisible(10));