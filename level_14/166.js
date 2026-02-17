// Q166. All Elements Positive?
// Return true if all elements are > 0.

// Input: [1, 2, 3] → Output: true
// Input: [0, 1, 2] → Output: false
// Input: [-1, 2, 3] → Output: false

function positive(arr) {
    return arr.every(num => num > 0);
}

console.log(positive([1, 2, 3]));   
console.log(positive([0, 1, 2]));   
console.log(positive([-1, 2, 3]));  
