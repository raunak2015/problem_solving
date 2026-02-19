// Q189. k-th Smallest Element (Using Sort)
// Return the k-th smallest element (1-based index) after sorting.

// Input: arr = [7, 10, 4, 3, 20, 15], k = 3 Sorted: [3,4,7,10,15,20] → 3rd = 7

// Input: arr = [1, 2, 3], k = 1 → Output: 1

// Input: arr = [5, 5, 5], k = 2 → Sorted: [5,5,5] → 2nd = 5

function Sort(arr,k) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr[arr.length-(k)];
}

console.log(Sort([7, 10, 4, 3, 20, 15],2));
console.log(Sort([1, 2, 3],1));
console.log(Sort([5, 5, 5],2));
