// Q142. Starts with 'a' (case-insensitive)
// Return true if string starts with 'a' or 'A'.

// Input: "apple" → Output: true
// Input: "Apple" → Output: true
// Input: "banana" → Output: false


function startsWithA(str){
    str = str.toUpperCase();
    return str[0] == 'A'
}

console.log(startsWithA("apple"));
console.log(startsWithA("Apple"));
console.log(startsWithA("BA=nana"));