// Q196. Max Sum of Subarray of Size k (Brute Force)
// Given k, examine all subarrays of size k and return maximum sum.

// Input: arr = [1, 2, 3, 4, 5], k = 2 Subarrays: [1,2]=3, [2,3]=5, [3,4]=7, [4,5]=9 → Output: 9

// Input: arr = [5, -1, 2, 3], k = 3 Subarrays: [5,-1,2]=6, [-1,2,3]=4 → Output: 6

// Input: arr = [4, 4, 4], k = 1 → Max = 4

function sum(arr, k) {
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length-k; i++) {
        let currSum = 0
        for (let j = i; j < i + k; j++) {
            currSum += arr[j]
            maxSum = Math.max(maxSum, currSum)
        }
    }
    return maxSum;
}

console.log(sum([1, 2, 3, 4, 5], 2));
console.log(sum([5, -1, 2, 3], 3));
console.log(sum([1, 2, 3, 4, 5], 2));