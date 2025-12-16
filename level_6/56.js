// Q56. Count Odd Numbers in Array
// Given an array of integers, count odd numbers.

// Input: [1, 2, 3, 4, 5] → Output: 3 (1,3,5)
// Input: [2, 4, 6] → Output: 0
// Input: [7, 9] → Output: 2

function odd(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            console.log(arr[i]);
            count++;
        }
    }
    console.log("count of sum : ",count);
}
odd([1,5,2,8,4,5,9])

