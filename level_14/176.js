// Q176. Elements at Odd Indices
// Return new array with elements at indices 1, 3, 5, …

// Input: [10, 20, 30, 40, 50] → Indices 1,3 → [20, 40]
// Input: ["a", "b", "c", "d"] → [ "b", "d" ]
// Input: [1] → []

function odd(arr){
    let res = []
    for(let i = 0; i<arr.length; i++){
        if(i%2!=0){
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(odd([10, 20, 30, 40, 50]));
console.log(odd(["a", "b", "c", "d"]));
console.log(odd([1]));