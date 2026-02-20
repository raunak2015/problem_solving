// Q200. Remove Consecutive Duplicates in Array
// Given array, keep first of each group of same element, remove consecutive repeats.

// Input: [1, 1, 2, 2, 2, 3, 1, 1] → Output: [1, 2, 3, 1]

// Input: ["a", "a", "b", "b", "a"] → Output: ["a", "b", "a"]

// Input: [5, 5, 5] → Output: [5]

function remove(arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!==arr[i-1]){
            res.push(arr[i])
        }
    }
    return res;
}

console.log(remove([1, 1, 2, 2, 2, 3, 1, 1]));
console.log(remove(["a", "a", "b", "b", "a"]));
console.log(remove([5, 5, 5]));