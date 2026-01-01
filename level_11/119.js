// Q119. Area of a Triangle
// Formula: area = 0.5 * base * height

// Input: base = 10, height = 5 → Output: 25
// Input: base = 3, height = 4 → Output: 6
// Input: base = 0, height = 10 → Output: 0

function area(base, height){
    return 0.5 * base * height;
}

console.log(area(10,5));
console.log(area(3,4));
console.log(area(0,10));