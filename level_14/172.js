// Q172. Strictly Increasing Sorted Array?
// Return true if each element is strictly greater than previous.

// Input: [1, 2, 3, 4] → Output: true
// Input: [1, 2, 2, 3] → Output: false (2 is not > previous 2)
// Input: [5] → Output: true


function sort(arr){
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i]>=arr[i+1]) return false;
    }
    return true;
}

console.log(sort([1, 2, 3, 4]));
console.log(sort([1, 2, 2, 4]));
console.log(sort([5]));