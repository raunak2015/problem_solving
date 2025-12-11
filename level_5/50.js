
// Q50. Toggle Case of Each Character
// Change lowercase to uppercase and uppercase to lowercase.

// Input: "HeLLo" → Output: "hEllO"
// Input: "abcDEF" → Output: "ABCdef"
// Input: "Js 101" → Output: "jS 101" (digits and spaces unchanged)

function toggle(str){
    let str2 = "";
    for(let i = 0; i<str.length; i++){
        if(str[i]>='A' && str[i]<='Z'){
            str2 += str[i].toLowerCase();
        }
        else if(str[i]>='a' && str[i]<='z'){
            str2 += str[i].toUpperCase();
        }
        else{
            str2 += str[i];
        }
    }
    return str2;
}

function  toggle2(str){
    let str2 = "";
    for(let i = 0; i<str.length; i++){
        let ascii = str.charCodeAt(i);
        if(ascii >= 65 && ascii <= 90){

            ascii = ascii + 32;
        } else if(ascii >= 97 && ascii <= 122){
            ascii = ascii - 32;
        }
        str2 += String.fromCharCode(ascii);
    }
    return str2;
}

function toggle3(str){
    let str2 = "";
    for(let i = 0; i<str.length; i++){
        if(str[i].toLowerCase() == str[i]){
            str =+ str[i].toUpperCase();
        }
        else{
            str =+ str[i].toLowerCase();
        }
    }
}

console.log(toggle("HeLlo"));

console.log(toggle2("HeLlo"));