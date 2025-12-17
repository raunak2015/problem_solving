// Q65. Check if Array Contains a Value
// Given an array and a value, return true if it’s present.

// Input: arr = [1, 2, 3], value = 2 → Output: true
// Input: arr = [1, 2, 3], value = 5 → Output: false
// Input: arr = [], value = 1 → Output: false

function check(arr,num){
    return arr.includes(num);
}

console.log(check([5,3,10,45],5));

function check2(arr,num){
let a = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==num){
            a = 1
        }
    }
    if(a==1){
        return true;
    }
    else{
        return false;
    }
}

console.log(check2([15,20],15));