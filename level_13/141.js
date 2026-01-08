// Q141. Middle Character(s) of a String
// Return the middle character for odd length, middle two characters for even length.

// Input: "abc" → Length = 3 → Middle index = 1 → Output: "b"
// Input: "test" → Length = 4 → Middle two = positions 1,2 → Output: "es"
// Input: "A" → Length = 1 → Output: "A"

function middleCharacter(str) {
    let len = str.length;

    if (len % 2 !== 0) {
        return str[Math.floor(len / 2)];
    } else {
        return str[len / 2 - 1] + str[len / 2];
    }
}

console.log(middleCharacter("abc")); 
console.log(middleCharacter("abcd"));
console.log(middleCharacter("A"));     
