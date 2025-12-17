// Q70. Second Smallest Element
// Assume array has at least 2 distinct elements.

// Input: [10, 5, 8, 20] → Smallest = 5 → Second smallest = 8
// Input: [3, 1, 2] → Output: 2
// Input: [100, 50] → Output: 100

function secondsmallest(arr){
    arr = arr.sort((a,b)=>a-b)
    return arr[1];
}

console.log(secondsmallest([10, 5, 8, 20]));