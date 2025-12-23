// Q98. Print All Values of Object
// Given object, return array of values.

// Input: {a: 1, b: 2, c: 3} → Output: [1, 2, 3]
// Input: {name: "Neel", age: 25} → Output: ["Neel", 25]
// Input: {} → Output: []

function print(obj){
    console.log(Object.values(obj));
}

print({name: "Neel", age: 25})