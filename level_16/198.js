// Q198. First Repeating Character in String
// Return first character that appears more than once, or null if none.

// Input: "swiss" → s(3), w(1), i(1) → First repeating as you scan: s → Output: "s"

// Input: "abca" → As you scan: a, b, c, a → First repeating: "a" → Output: "a"

// Input: "abc" → No repeats → Output: null

function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i]
            }

        }

    }
    return null;
}

console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("aabbc"));
console.log(firstNonRepeatingChar("abc"));