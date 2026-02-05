// Q151. Shortest Word in a Sentence
// Return the actual word with minimum length (if tie, you can return first shortest).

// Input: "I love coding" → Words: I, love, coding → Output: "I"
// Input: "Java is fun" → Words: Java, is, fun → Shortest = "is" → Output: "is"
// Input: "one two three" → All length 3 → Output: "one" (or first)


function short(str){
    let word = str.split(" ");
    let min = word[0];
    let min_num = word[0].length;
    for(let i = 0; i<word.length; i++){
        if(min_num>word[i].length){
            min_num = word[i].length;
            min = word[i];
        }
    }
    return min;
}

console.log(short("I love coding"));
console.log(short("Java is fun"));
console.log(short("one two three"));