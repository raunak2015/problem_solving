// Q76. Rotate Array Left by 1
// Move first element to end.

// Input: [1, 2, 3, 4] → Output: [2, 3, 4, 1]
// Input: [10] → Output: [10]
// Input: [] → Output: []

function rotate(arr){
    let temp = arr.shift();
    arr.push(temp);
    return arr;
}

console.log(rotate([1,2,3,4]));

function rotate2(arr){
    let temp = arr[0];
    let res = []
    for(let i = 1; i<arr.length;i++){
        res.push(arr[i]);
    }
    res.push(temp);
    return res;
}

console.log(rotate2([1,2,3.4]));