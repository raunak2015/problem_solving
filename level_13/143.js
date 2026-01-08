// Q143. Ends with '!'
// Return true if string ends with exclamation mark.

// Input: "Hello!" → Output: true
// Input: "Wow" → Output: false
// Input: "Oh no!!" → Output: true (last char is !)

function endsWith(str){
    return str[str.length-1]== '!'
}

console.log(endsWith("Hello!"));
console.log(endsWith("Hello"));
console.log(endsWith("Oh no!!"));