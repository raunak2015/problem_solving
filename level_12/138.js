// Q138. Sum of Cubes 1³ + 2³ + … + n³
// Given n, compute sum of cubes.

// Input: n = 3 → 1³ + 2³ + 3³ = 1 + 8 + 27 = 36 → Output: 36
// Input: n = 1 → 1³ = 1 → Output: 1
// Input: n = 2 → 1 + 8 = 9 → Output: 9

function sumOfCube(num, sum = 0) {
    if (num == 0) return sum;
    sum += num ** 3;
    return sumOfCube(num - 1, sum);
}

console.log(sumOfCube(3));
console.log(sumOfCube(1));
console.log(sumOfCube(2));