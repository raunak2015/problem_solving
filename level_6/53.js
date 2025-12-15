// Q53. Maximum in Array
// Given an array, find the maximum element.

// Input: [3, 7, 2, 9] → Output: 9
// Input: [-5, -2, -10] → Output: -2
// Input: [42] → Output: 42

function maxNumberInArray(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNumberInArray([3, 10, 2, 9]));

function maxNumberInArray2(arr){
    arr.sort((a,b)=>a-b);
    return arr[arr.length-1];
}
console.log(maxNumberInArray2([3, 10,11, 2, 9]));

function maxNumberInArray3(arr){
    arr.sort((a,b)=>b-a)
    return arr[0]
}
console.log(maxNumberInArray3([3, 10,11, 2, 9]));

function maxNumberInArray4(arr){
    return Math.max(...arr)
}

console.log(maxNumberInArray4([3, 10, 15, 2, 9]));