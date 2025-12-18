// Q74. Intersection of Two Arrays (Common Elements)
// Return new array with elements present in both (no duplicates).

// Input: [1, 2, 3, 4] and [3, 4, 5] → Output: [3, 4]
// Input: [1, 2] and [3, 4] → Output: []
// Input: [1, 1, 2] and [1, 2, 2] → Output: [1, 2]

let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 2];

let res = [];
let i = 0;
let j = 0;

while (i < arr.length && j < arr2.length) {
    if (arr[i] == arr2[i]) {
        res.push(arr[i]);
        i++;
        j++;
    }
    else if (arr[i] > arr2[j]) {
        i++;
    }
    else {
        j++
    }
}
console.log(res)