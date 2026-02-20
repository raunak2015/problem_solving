// Q191. Binary Search in Sorted Array
// Given sorted array and target, return index or -1 if not found.

// Input: arr = [1, 3, 5, 7, 9], target = 5 → Output: 2
// Input: arr = [2, 4, 6, 8], target = 1 → Output: -1
// Input: arr = [10], target = 10 → Output: 0

function binarySearch(arr,n){
    let left = 0;
    let rigth = arr.length - 1;
    while(left <= rigth){
        let mid = Math.floor((left + rigth)/2);
        if(arr[mid]==n){
            return mid;
        }
        else if(arr[mid]<n){
            left = mid + 1
        }
        else{
            rigth = mid - 1
        }
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9],3));