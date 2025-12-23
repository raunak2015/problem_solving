// Q97. Print All Keys of Object
// Given object, return array of keys.

// Input: {a: 1, b: 2, c: 3} → Output: ["a", "b", "c"]
// Input: {name: "Neel", age: 25} → Output: ["name", "age"]
// Input: {} → Output: []

function print(obj){
    console.log(Object.keys(obj));
}

print({a: 1, b: 2, c: 3})