// Q54. Minimum in Array
// Given an array, find the minimum element.

// Input: [3, 7, 2, 9] → Output: 2
// Input: [-5, -2, -10] → Output: -10
// Input: [42] → Output: 42


function minNumberInArray(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }   
    }
    return min;
}
console.log(minNumberInArray([3, 7, 5, 9]));

function minNumberInArray2(arr){
    arr.sort((a,b)=>a-b);
    return arr[0];
}
console.log(minNumberInArray2([3, 7, 2, 9]));

function minNumberInArray3(arr){
    arr.sort((a,b)=>b-a);
    return arr[arr.length-1];
}
console.log(minNumberInArray3([3, 7, 1, 9]));

function minNumberInArray4(arr){
    return Math.min(...arr);
}
console.log(minNumberInArray4([3, 7, 0, 9]));