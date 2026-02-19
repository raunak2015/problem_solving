// Q188. Insertion Sort (Ascending)
// Sort an array using insertion sort.

// Input: [3, 1, 4, 2] → Output: [1, 2, 3, 4]
// Input: [10, -1, 2] → Output: [-1, 2, 10]
// Input: [5, 4, 3, 2, 1] → Output: [1, 2, 3, 4, 5]

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}


console.log(insertionSort([3, 1, 4, 2]));    
console.log(insertionSort([10, -1, 2]));    
console.log(insertionSort([5, 4, 3, 2, 1]));    
