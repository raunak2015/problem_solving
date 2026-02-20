// Q194. Any Triplet with Given Sum (Brute Force)
// Check if there exist three numbers whose sum equals target.

// Input: arr = [1, 2, 3, 4, 5], target = 9 Triplet: (2,3,4) → Output: true

// Input: arr = [1, 1, 1], target = 4 → Output: false

// Input: arr = [0, -1, 2, -3, 1], target = 0 Example triplet: (0, -1, 1) → Output: true

function sum(arr,num){
    for(let i = 0; i<arr.length-2; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j + 1; k<arr.length; k++){
                if(arr[i]+arr[j]+arr[k]==num){
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(sum([1, 2, 3, 4, 5],9));
console.log(sum([1, 1, 1],4));
console.log(sum([0, -1, 2, -3, 1],0));