// Q177. Count Strings with Length > 3
// Given an array of strings, count how many have length greater than 3.

// Input: ["hi", "hello", "hey", "Java"] Lengths: 2,5,3,4 → >3 are "hello", "Java" → Output: 2

// Input: ["one", "two", "six"] → All length 3 → Output: 0

// Input: [] → Output: 0

function length(arr){
    let arr2 = arr.filter((data)=>{
        return data.length>3;
    })
    return arr2.length 
}

console.log(length(["hi", "hello", "hey", "Java"]));