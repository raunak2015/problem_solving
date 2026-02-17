// Q162. Triple Each Element
// Given an array, return a new array with each element ×3.

// Input: [1, 2, 3] → Output: [3, 6, 9]
// Input: [-1, 0, 4] → Output: [-3, 0, 12]
// Input: [] → Output: []

function triple(arr){
    let arr2 = [];
    arr.forEach(element => {
        arr2.push(element*3);
    });
    return arr2
}

console.log(triple([1,2,3]));
console.log(triple([-1, 0, 4]));
console.log(triple([]));

function triple2(arr){
    return arr.map(element=>element*3)
}

console.log(triple2([1,2,3]));
console.log(triple2([-1, 0, 4]));
console.log(triple2([]));

