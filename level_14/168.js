// Q168. Index of Maximum Element
// Return the index of the maximum element (first max if multiple).

// Input: [3, 7, 2, 7] → Max = 7, first index = 1 → Output: 1
// Input: [-5, -2, -10] → Max = -2, index = 1 → Output: 1
// Input: [42] → Output: 0

function indexOfMax(arr) {

    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

console.log(indexOfMax([3, 7, 2, 7]));  
console.log(indexOfMax([-5, -2, -10]));
console.log(indexOfMax([42]));         
