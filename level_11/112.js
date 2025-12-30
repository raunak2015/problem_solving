// Q112. Average of Three Numbers
// Write a function that returns the average of three numbers.

// Input: a = 3, b = 6, c = 9 → Output: 6
// Input: a = 0, b = 0, c = 0 → Output: 0
// Input: a = 10, b = 20, c = 25 → Output: 55 / 3 ≈ 18.33 (or 18.3333…)

function avg(num1,num2,num3){
    return ((num1+num2+num3)/3).toFixed(2)
}

console.log(avg(3,6,9));
console.log(avg(10,20,25));
console.log(avg(0,0,0));