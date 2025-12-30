// Q103. Greet by Name
// Write a function that takes a name and returns "Hello, <name>!".

// Input: "Neel" → Output: "Hello, Neel!"
// Input: "Arjun" → Output: "Hello, Arjun!"
// Input: "" → Output: "Hello, !" (you can later decide to handle this better)

function hello(namee){
    return "Hello " + namee + "!";
}

console.log(hello("Neel"));
console.log(hello("Arjun"));
console.log(hello(""));