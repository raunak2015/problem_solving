// Q68. Check if Array is Sorted (Increasing)
// Return true if each element is >= previous one.

// Input: [1, 2, 3, 4] → Output: true
// Input: [1, 2, 2, 3] → Output: true
// Input: [3, 2, 1] → Output: false

function sort(arr){
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i+1]-arr[i]<0){
            return false;
        }
    }
    return true;
}

console.log(sort([1,6,7,8,]));