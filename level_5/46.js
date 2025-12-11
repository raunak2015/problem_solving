// Q46. Count Uppercase Letters
// Given a string, count uppercase letters.

// Input: "HeLLo" → Output: 3 (H, L, L)
// Input: "javascript" → Output: 0
// Input: "JS 101" → Output: 2 (J, S)

function uppercaseCheck(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90){
            count++;
        }
    }
    return count;
}
function Check(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i]>="A"&& str[i]<="Z"){
            count++;
        }
    }
    return count;
}
function Check1(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === str[i]){
            count++;
        }
    }
    return count;
}


console.log(Check("JSkaJadu"));

console.log(uppercaseCheck("JSkaJadu"));

console.log(Check1("JKjijNJKnKNJ"));