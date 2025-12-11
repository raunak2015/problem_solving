// Q47. Count Lowercase Letters
// Given a string, count lowercase letters.

// Input: "HeLLo" → Output: 2 (e, o)
// Input: "JAVASCRIPT" → Output: 0
// Input: "Js 101" → Output: 1 (s)

function lowercaseCheck(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
            count++;
        }
    }
    return count;
}

console.log(lowercaseCheck("JSkaJadu"));