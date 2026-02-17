// Q178. First Character of Each String
// Given an array of strings, return array of their first characters.

// Input: ["apple", "banana", "cherry"] → Output: ["a", "b", "c"]
// Input: ["hi", "yo"] → Output: ["h", "y"]
// Input: [] → Output: []

function char(arr){
    return arr.map((data)=>{
        return data[0];
    })
}

console.log(char(["apple", "banana", "cherry"]));
console.log(char(["hi", "yo"]));
console.log(char([]));