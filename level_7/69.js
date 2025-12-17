// Q69. Second Largest Element
// Assume array has at least 2 distinct elements.

// Input: [10, 5, 8, 20] → Largest = 20 → Second largest = 10
// Input: [3, 1, 2] → Output: 2
// Input: [100, 50] → Output: 50

function secondLargest(arr){
    arr = arr.sort((a,b)=>a-b);
    return arr[arr.length-2]
}

console.log(secondLargest([10, 5, 8, 20]));
console.log(secondLargest([3, 1, 2]));
console.log(secondLargest([100, 50]));

function secondLargest2(arr){
    let max = -Infinity;
    let smax = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            smax=max;

            max=arr[i];
        }
        else if(arr[i]>smax && arr[i]<max){
            smax = arr[i];
        }
    }
    return smax;
}

console.log(secondLargest2[5,9,564,8,9,85,4]);