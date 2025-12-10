// Q39. Count Occurrences of 'a'
// Count how many times 'a' (or 'A') appears.

// Input: "banana" → Output: 3
// Input: "Apple" → Output: 1 (if case-insensitive, a only)
// Input: "xyz" → Output: 0

function countOccurrences(str){
    let a = 'aA'
    let count = 0;
    for(let char of str){
        if(a.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countOccurrences("banana"));

function check(str){
    
}