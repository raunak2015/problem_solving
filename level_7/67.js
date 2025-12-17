// Q67. Frequency of a Value
// Given an array and a value, count how many times value appears.

// Input: [1, 2, 2, 3, 2], value = 2 → Output: 3
// Input: [5, 5, 5], value = 5 → Output: 3
// Input: [1, 2, 3], value = 4 → Output: 0

function frq(arr,num){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            count++;
        }
    }
    return count;
}

console.log(frq([54,95,54,69,54,],54));

function frq2(arr,num){
    let obj = {};
    for(let i = 0; i<arr.length; i++){
        if(obj[arr[i]]!=undefined){
            obj[arr[i]]++;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    return obj[num];
}

console.log(frq2([5,5,6,8,5], 5));



