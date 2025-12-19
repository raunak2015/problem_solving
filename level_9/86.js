// Q86. Sum of Each Row in 2D Array
// Given a 2D array, print sum of each row.

// Input: [[1, 2, 3], [4, 5, 6]] Row sums: 1+2+3 = 6, 4+5+6 = 15 → Output: [6, 15]

// Input: [[7, 3], [0, 0], [5, 5]] → Output: [10, 0, 10]

let arr = [[1,10,12],[2,12,19,17]];
let res = [];

for(let i=0; i<arr.length; i++){
    let sum = 0;
    for(let j = 0; j<arr[i].length; j++){
        sum = sum + arr[i][j];
    }
    res.push(sum);
}

console.log(res);