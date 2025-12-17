// Q64. Copy Array
// Given an array, create an exact copy.

// Input: [1, 2, 3] → Output: [1, 2, 3]
// Input: [] → Output: []
// Input: ["x", "y"] → Output: ["x", "y"]

function copy(arr){
    let arr2 = arr;
    return arr2;
}

console.log(copy([2,5,8,"s"]));

function copy2(arr){
    let arr2 = []
    for(let i=0; i<arr.length; i++);
    arr2.push(arr[i])
    return arr2;
}

console.log(copy([2,5,8,]));

function copy3(arr){
    let arr2 = [...arr];
    return arr2;
}

console.log(copy3([5,9,2,4]));

function copy4(arr){
    let arr2 = new Array(...arr)

    return arr2;
}
console.log(copy([5,9,5,3]));