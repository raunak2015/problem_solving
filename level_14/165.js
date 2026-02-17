// Q165. At Least One Even?
// Return true if at least one element is even.

// Input: [1, 3, 5] → Output: false
// Input: [1, 4, 5] → Output: true
// Input: [2] → Output: true

function even(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2==0) return true;
    }
    return false;
}

console.log(even([1,3,5]));
console.log(even([1,4,5]));
console.log(even([2]));