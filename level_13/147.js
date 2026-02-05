// Q147. Join Two Strings with a Space
// Given two strings, join them as "first second".

// Input: "Hello", "World" → Output: "Hello World"
// Input: "JavaScript", "Rocks" → Output: "JavaScript Rocks"
// Input: "Neel", "" → Output: "Neel " (you can later decide smarter behavior)

function join(str1,str2){
    return str1+" "+ str2;
}

console.log(join("Hello","World"));
console.log(join("JavaScript","Rocks"));
console.log(join("Neel",""));