// Q73. Concatenate Two Arrays
// Given two arrays, merge them into one.

// Input: [1, 2] and [3, 4] → Output: [1, 2, 3, 4]
// Input: [] and [5, 6] → Output: [5, 6]
// Input: ["a"] and ["b", "c"] → Output: ["a", "b", "c"]

function concatenate(arr1,arr2){
    return ([...arr1,...arr2]);
}

console.log(concatenate([1, 2],[3, 4]));

function concatenate2(arr1,arr2){
    return arr1.concat(arr2)
}
console.log(concatenate2([1, 2],[3, 4]));

function concatenate3(arr1,arr2){
    let arr3 = [];
    
    for(let i = 0; i<arr1.length; i++){
        arr3.push(arr1[i]);
    }
    for(let i = 0; i<arr2.length; i++){
        arr3.push(arr2[i]);
    }
    
    return arr3;
}
console.log(concatenate3([1, 2],[3, 4]));