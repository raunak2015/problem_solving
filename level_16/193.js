// Q193. Any Pair with Given Sum (Brute Force)
// Check if there exists any pair of elements whose sum equals target.

// Input: arr = [1, 2, 3, 4], target = 5 Pairs: (1,4) or (2,3) → Output: true

// Input: arr = [1, 2, 3], target = 10 → Output: false

// Input: arr = [0, -1, 1], target = 0 → Pair ( -1, 1 ) → Output: true

function sum(arr,target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j]==target){
                return true;
            }
        }
    }
    return false;
}

console.log(sum([1, 2, 3, 4],5));