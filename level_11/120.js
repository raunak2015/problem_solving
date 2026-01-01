// Q120. Area of a Circle
// Formula: area = π * r² (you can use 3.14 or Math.PI)

// Input: r = 1 → Output: approximately 3.14 (or 3.14159…)
// Input: r = 3 → Output: approximately 28.26 (or 28.2743…)
// Input: r = 0 → Output: 0

function area(r){
    return (3.14 * r**2).toFixed(2);
}

console.log(area(1));
console.log(area(3));
console.log(area(0));