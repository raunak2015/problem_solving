// Q149. Last Word of a Sentence
// Characters after the last space. If no space, whole string.

// Input: "Hello world" → Output: "world"
// Input: "JavaScript is fun" → Output: "fun"
// Input: "SingleWord" → Output: "SingleWord"

function lastWord(str){
    let arr = str.split(" ");
    return arr[arr.length-1];
}

console.log(lastWord("Hello world"));
console.log(lastWord("JavaScript is fun"));
console.log(lastWord("SingleWord"));