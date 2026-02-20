// Q195. Maximum Subarray Sum (Brute Force)
// Find max possible sum of any contiguous subarray by checking all.

// Input: arr = [1, -2, 3, 4, -1] Best subarray: [3,4] or [3,4,-1] → Sum = 7 → Output: 72

// Input: arr = [-1, -2, -3] → Max = -1 (single element) → Output: -1

// Input: arr = [5] → Output: 5



function sum(arr){
    maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        let currSum = 0
        for(let j = i; j< arr.length; j++ ){
            currSum +=arr[j]
            maxSum = Math.max(maxSum, currSum)
        }
    }
    return maxSum;
}

console.log(sum([1, -2, 3, 4, -1]));