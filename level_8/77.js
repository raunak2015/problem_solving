// Q77. Count Elements Greater than Average
// Count how many numbers are greater than the average of array.

// Input: [1, 2, 3, 4, 5] → Avg = 3 → Elements greater: 4,5 → Output: 2
// Input: [10, 10, 10] → Avg = 10 → Elements greater: none → Output: 0
// Input: [5, 15] → Avg = 10 → Elements greater: 15 → Output: 1


function count(arr){
    let res = [];
    let sum = arr.reduce((curr = 0,next)=>{
        return curr+next;
    })
    avg = sum/arr.length;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]>avg){
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(count([10,20,30,40,50,40]));
