// Q41. Count Words in a Sentence
// Given a sentence, count how many words it has (split by spaces, ignore extra spaces if you want).

// Input: "Hello world" → Output: 2
// Input: "JavaScript is fun" → Output: 3
// Input: "  this   is   spaced  " → Output: 3 (if you ignore multiple spaces)

function wordsCount(str){
    let arr = str.split(" ");
    return arr.length;

}

console.log(wordsCount("Hello   World"));