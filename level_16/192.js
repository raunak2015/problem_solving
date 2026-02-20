// Q192. Count Occurrences of Target in Sorted Array
// Count how many times target value appears.

// Input: arr = [1, 2, 2, 2, 3], target = 2 → Output: 3
// Input: arr = [5, 5, 5, 5], target = 5 → Output: 4
// Input: arr = [1, 2, 3], target = 4 → Output: 0


function left(arr, target){
    let left=0;
    let right = arr.length-1;
    let firstIndex = -1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]==target){
            firstIndex = mid;
            right = mid - 1
        }
        else if(arr[mid]>target){
            right = mid - 1;
        }
        else{
            left = mid+1
        }
    }
    return firstIndex;
}

function right(arr,target){
    let left = 0;
    let right =arr.length - 1;
    let lastIndex = -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]==target){
            lastIndex = mid;
            left = mid + 1
        }
        else if(arr[mid]>target){
            left = mid + 1;
        }
        else{
            right = mid - 1
        }
    }
    return lastIndex
}

function count(arr,target){
    return right(arr,target) - left(arr,target) + 1
    
}
console.log(count([1, 2, 2, 2, 3],2));