// Q114. Eligible to Vote
// Write a function that returns true if age ≥ 18.

// Input: age = 17 → Output: false
// Input: age = 18 → Output: true
// Input: age = 25 → Output: true

function vote(age){
    return age>=18;
}

console.log(vote(17));
console.log(vote(18));
console.log(vote(25));