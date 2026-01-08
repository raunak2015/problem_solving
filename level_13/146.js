// Q146. Replace All '?' with '!'
// Return new string with every ? replaced by !.

// Input: "Are you ok?" → Output: "Are you ok!"
// Input: "???" → Output: "!!!"
// Input: "No questions" → Output: "No questions" (no change)

function replaced(str){
    return str.replaceAll('?','!');
}

console.log(replaced("Are you ok?"));
console.log(replaced("???"));
console.log(replaced("No questions"));

function replaced2(str){
    let res = '';
    for(let i = 0; i < str.length; i++){
        res += (str[i]==='?')?'!':str[i];
    }
    return res;
}

console.log(replaced2("Are you ok?"));
console.log(replaced2("???"));
console.log(replaced2("No questions"));