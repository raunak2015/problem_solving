// Q185. Merge Two Sorted Arrays into One Sorted Array
// Both arrays are sorted; merge into a single sorted array (without sorting at the end).

// Input: [1, 3, 5] and [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]

// Input: [1, 2, 2] and [2, 3] → Output: [1, 2, 2, 2, 3]

// Input: [] and [1, 2] → Output: [1, 2]

function sort(arr1,arr2){
    let res = [];
    let i = 0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++;
        }
        else{
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        res.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        res.push(arr2[j]);
        j++
    }
    return res;
}

console.log(sort([1, 3, 5],[2, 4, 6]));
console.log(sort([1, 2, 2],[2, 3]));
console.log(sort([],[2, 3]));