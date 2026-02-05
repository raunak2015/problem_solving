// Q152. Count 'the' as a Whole Word
// Count how many times 'the' appears as a separate word (case-insensitive if you like).

// Input: "the cat and the dog" → Words: the, cat, and, the, dog → Output: 2
// Input: "There is the book" → Only standalone the is counted → Output: 1
// Input: "no keyword here" → Output: 0


function the(str){
    let arr = str.split(" ");
    let count = arr.filter((Element)=> Element==="the");
    return count.length;
}

console.log(the("the cat and the dog"));
console.log(the("There is the book"));
console.log(the("no keyword here"));
