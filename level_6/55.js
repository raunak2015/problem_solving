// Q55. Count Even Numbers in Array
// Given an array of integers, count even numbers.

// Input: [1, 2, 3, 4, 5, 6] → Output: 3 (2,4,6)
// Input: [1, 3, 5] → Output: 0
// Input: [2, 4, 8] → Output: 3

function even(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
    }
}

even([2,1,5,12,9,3,6,4,]);

function even2(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=arr[i]; j>=0; j -=2){
            
            if(j===0){
                console.log(arr[i]);
            }
        }
    }
}

even2([2,5,6,8,9])