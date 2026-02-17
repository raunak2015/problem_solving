// Q173. Move All Negative Numbers to Front
// Reorder array so that all negatives come before non-negatives (0 and positives). Order within groups can be ignored.

// Input: [1, -2, 3, -4, 0] → Possible Output: [-2, -4, 1, 3, 0]
// Input: [-1, -2, -3] → Output: [-1, -2, -3]
// Input: [1, 2, 3] → Output: [1, 2, 3]

function negatives(arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>=0){
            res.push(arr[i])
        }
        else{
            res.unshift(arr[i])
        }
    }
    return res;
}

console.log(negatives([1, -2, 3, -4, 0]));
console.log(negatives([-1, -2, -3]));
console.log(negatives([1, 2, 3]));

function negatives2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0) {
            left++;
        } else if (arr[right] >= 0) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}


console.log(negatives2([1, -2, 3, -4, 0]));
console.log(negatives2([-1, -2, -3]));
console.log(negatives2([1, 2, 3]));