// Q144. Count Spaces in String
// Count how many space characters ' ' are present.

// Input: "hello world" → Output: 1
// Input: "a b c d" → Output: 3
// Input: "nospace" → Output: 0

function spaces(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]==" ") count++;
    }
    return count;
}

console.log(spaces("hello world"));
console.log(spaces("a b c d"));
console.log(spaces("helloworld"));