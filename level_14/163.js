// Q163. Absolute Values of Array Elements
// Given an array, return new array of absolute values.

// Input: [-1, 2, -3] → Output: [1, 2, 3]
// Input: [0, -5, 7] → Output: [0, 5, 7]
// Input: [10] → Output: [10]

function absolute(arr){
    return arr.map(Element => {
       return Math.abs(Element)
    })
}

console.log(absolute([-1, 2, -3]));