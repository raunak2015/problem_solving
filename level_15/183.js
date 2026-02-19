// Q183. Rotate Array Right by k Positions
// Right rotation: last elements move to front.

// Input: arr = [1, 2, 3, 4, 5], k = 1 → Output: [5, 1, 2, 3, 4]

// Input: arr = [1, 2, 3, 4, 5], k = 2 → Output: [4, 5, 1, 2, 3]

// Input: arr = [1, 2, 3], k = 5 k % 3 = 2 → Output: [2, 3, 1]

function rotate(arr,k){
    let res = [];
    if(k>arr.length){
        k=k%arr.length;
    }

    for(let i = arr.length-k; i<arr.length;i++){
        res.push(arr[i]);
    }
    for(let i = 0; i<arr.length-k; i++){
        res.push(arr[i])
    }
    return res;

}

console.log(rotate([1, 2, 3, 4, 5],1));
console.log(rotate([1, 2, 3, 4, 5],2));
console.log(rotate([1, 2, 3],5));

function rotate2(arr,k){

}