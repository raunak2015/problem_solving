// Return a new array with only odd numbers.

// Input: [1, 2, 3, 4, 5] → Output: [1, 3, 5]
// Input: [2, 4, 6] → Output: []
// Input: [1, 3, 5] → Output: [1, 3, 5]

function removeEven(arr){
    let arr1 = arr.filter((data)=>data%2!=0);
    return arr1;
}
console.log(removeEven([5,9,2,8,1,6,4]));

function removeEven2(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2==0){
            arr.splice(i,1);
            i=i-1;
        }
    }
    return arr;
}

console.log(removeEven2([5,9,2,8,1,6,4]));
