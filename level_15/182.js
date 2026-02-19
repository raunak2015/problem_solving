// Q182. Swap Elements at Indices i and j
// Given an array and two indices i and j, swap elements at those indices.

// Input: arr = [1, 2, 3, 4], i = 1, j = 3 → Output array: [1, 4, 3, 2]

// Input: arr = ["a", "b", "c"], i = 0, j = 2 → Output: ["c", "b", "a"]

// Input: arr = [10, 20], i = 0, j = 0 → Output: [10, 20] (no change)

function swap(arr,i,j){
    if(i>arr.length-1 || j>arr.length-1) return "invalid";

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

console.log(swap([1, 2, 3, 4],1,3));
console.log(swap(["a", "b", "c"],0,2));
console.log(swap([10, 20],0,0));

function swap2(arr,i,j){
    if(i>arr.length-1 || j>arr.length-1) return "invalid";
    [arr[i],arr[j]]=[arr[j],arr[i]]
    return arr;

}


console.log(swap2([1, 2, 3, 4],1,3));
console.log(swap2(["a", "b", "c"],0,2));
console.log(swap2([10, 20],0,0));