// Q184. Rotate Array Left by k Positions
// Left rotation: first elements move to end.

// Input: arr = [1, 2, 3, 4, 5], k = 1 → Output: [2, 3, 4, 5, 1]

// Input: arr = [1, 2, 3, 4, 5], k = 2 → Output: [3, 4, 5, 1, 2]

// Input: arr = [1, 2, 3], k = 5 k % 3 = 2 → Output: [3, 1, 2]

function rotate(arr,k){
    let res = [];
    if(k>arr.length){
        k=k%arr.length;
    }
    for(let i = k; i<arr.length; i++){
        res.push(arr[i]);
    }

    for(let i = 0;i<k;i++){
        res.push(arr[i]);
    }
    return res;
}

console.log(rotate([1, 2, 3, 4, 5],1));
console.log(rotate([1, 2, 3, 4, 5],2));
console.log(rotate([1, 2, 3],5));