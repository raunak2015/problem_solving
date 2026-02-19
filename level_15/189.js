// Q190. k-th Largest Element (Using Sort)
// Return the k-th largest element (1-based index) after sorting.

// Input: arr = [7, 10, 4, 3, 20, 15], k = 2 Sorted descending: [20,15,10,7,4,3] → 2nd = 15

// Input: arr = [1, 2, 3], k = 1 → Largest = 3 → Output: 3

// Input: arr = [5, 5, 5], k = 3 → Output: 5


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
    return arr[k-1];
}

console.log(Sort([7, 10, 4, 3, 20, 15],3));
console.log(Sort([1, 2, 3],1));
console.log(Sort([5, 5, 5],2));
