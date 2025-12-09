// Q30. LCM of Two Numbers
// Given two numbers, find their least common multiple.

// Input: a = 4, b = 6 → Output: 12
// Input: a = 5, b = 7 → Output: 35
// Input: a = 3, b = 9 → Output: 9


function lcm(num1, num2) {
    let n = Math.max(num1, num2);
    for (let i = n; i <= num1 * num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log(`LCM : ${i}`);
            return i; 
        }
    }
}

lcm(4, 6);