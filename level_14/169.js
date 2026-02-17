// Q169. Index of Minimum Element
// Return the index of the minimum element (first min if multiple).

// Input: [3, 7, 2, 2] → Min = 2, first index = 2 → Output: 2
// Input: [-5, -2, -10] → Min = -10, index = 2 → Output: 2
// Input: [42] → Output: 0

function indexOfMin(arr) {

    let MinIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[MinIndex]) {
            MinIndex = i;
        }
    }

    return MinIndex;
}

console.log(indexOfMin([3, 7, 2, 7]));  
console.log(indexOfMin([-5, -2, -10]));
console.log(indexOfMin([42]));  