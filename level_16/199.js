// Q199. Remove Consecutive Duplicate Characters
// Given string, compress consecutive duplicates into a single occurrence.

// Input: "aaabbcddd" → Output: "abcd"
// Input: "hellooo" → Output: "helo"
// Input: "a" → Output: "a"

function removeConsecutiveDuplicateCharacters(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i] !== str[i - 1]) {
            res += str[i];
        }
    }
    return res;
}

console.log(removeConsecutiveDuplicateCharacters("aaabbcddd"));
console.log(removeConsecutiveDuplicateCharacters("hellooo"));
console.log(removeConsecutiveDuplicateCharacters("a"));         


