// Q153. Contains Any Vowel
// Return true if the string contains at least one vowel (a, e, i, o, u, case-insensitive).

// Input: "hello" → Output: true
// Input: "sky" → Output: false (if y not considered vowel)
// Input: "JAVASCRIPT" → Output: true

function contains(str){
    str = str.toUpperCase();
    let vowel = "AEIOU";
    for(let char of vowel){
        if (str.includes(char)) {
            return true;
        }
    }

    return false;
}

console.log(contains("hello"));
console.log(contains("sky"));
console.log(contains("JAVASCRIPT"));