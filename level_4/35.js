// Q35. To Uppercase
// Convert a string to uppercase.

// Input: "hello" → Output: "HELLO"
// Input: "Js" → Output: "JS"
// Input: "123abc" → Output: "123ABC"

function uppercase(str){
    return str.toUpperCase();
}

console.log(uppercase("Hello"));

function upper(str){
    let res="";

    for(i=0; i<str.length; i++){
        let value = str.charCodeAt(i);
        if(value >= 97&&value<=122){
            res= res+String.fromCharCode(value-32)
        }
        else{
            res=res+str[i];
        }
    }
    console.log(res);
}

upper('zxcv')