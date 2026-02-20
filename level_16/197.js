// Q197. First Non-Repeating Character in String
// Return first character that appears exactly once, or null if none.

// Input: "swiss" → s(3), w(1), i(1) → First non-repeating = "w" → Output: "w"

// Input: "aabbc" → a(2), b(2), c(1) → Output: "c"

// Input: "aabb" → All repeat → Output: null

function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }

        }
        if (count === 1) {
            return str[i]
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("aabbc"));
console.log(firstNonRepeatingChar("aabb"));