// Q148. First Word of a Sentence
// Characters from start until first space. If no space, whole string.

// Input: "Hello world" → Output: "Hello"
// Input: "JavaScript is fun" → Output: "JavaScript"
// Input: "SingleWord" → Output: "SingleWord"

function firstWord(str){
    let arr = str.split(" ");
    return arr[0];
}

console.log(firstWord("Hello world"));
console.log(firstWord("JavaScript is fun"));
console.log(firstWord("SingleWord"));