
// Q75. Rotate Array Right by 1
// Move last element to front.

// Input: [1, 2, 3, 4] → Output: [4, 1, 2, 3]
// Input: [10] → Output: [10]
// Input: [] → Output: []

function rotate(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}

console.log(rotate([10,20,30,40]));

function rotate2(arr){
    let res  = [arr[arr.length-1]];
    for(let i = 0; i<arr.length-1; i++){
        res.push(arr[i]);
    }
    return res;
}

console.log(rotate2([10,20,30,40]));

function rotate3(arr){
    let temp = arr[arr.length-1];
    for(let i = arr.length-1;i>0;i--){
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
    return arr;
}

console.log(rotate3([10,20,30,40]));