// Q175. Elements at Even Indices
// Return new array with elements at indices 0, 2, 4, …

// Input: [10, 20, 30, 40, 50] → Indices 0,2,4 → [10, 30, 50]
// Input: ["a", "b", "c", "d"] → [ "a", "c" ]
// Input: [1] → [1]

function even(arr){
    let res = []
    for(let i = 0; i<arr.length; i++){
        if(i%2==0){
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(even([10, 20, 30, 40, 50]));
console.log(even(["a", "b", "c", "d"]));
console.log(even([10]));