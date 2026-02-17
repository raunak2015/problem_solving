// Q164. All Elements Even?
// Return true if all elements are even numbers.

// Input: [2, 4, 6] → Output: true
// Input: [2, 3, 4] → Output: false
// Input: [] → Output: true (often empty set considered “all even”; you can pick rule)
function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

console.log(even([2, 4, 6])); 
console.log(even([])); 
console.log(even([2, 3, 6])); 
