// Q90. Longest String in Array
// Return the longest string (if tie, you can return first longest).

// Input: ["hi", "hello", "hey"] → Output: "hello"
// Input: ["a", "ab", "abc"] → Output: "abc"
// Input: ["same", "size"] → Output: "same" (or "size" – your rule)

function longest(arr){
    let longestStr = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(longestStr.length < arr[i].length){
            longestStr = arr[i]
        }
    }
    return longestStr
}

console.log(longest(["hi", "hello", "hey"]));