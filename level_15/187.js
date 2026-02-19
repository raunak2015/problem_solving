// Q187. Selection Sort (Ascending)
// Sort an array using selection sort.

// Input: [3, 1, 4, 2] → Output: [1, 2, 3, 4]
// Input: [10, -1, 2] → Output: [-1, 2, 10]
// Input: [5] → Output: [5]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let max = -Infinity;
        let index = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                index = j;
            }
        }
        [arr[index], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[index]];
    }
    return arr;
}

console.log(selectionSort([3, 1, 4, 2]));

function selectionSort2(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

console.log(selectionSort2([3, 1, 4, 2]));