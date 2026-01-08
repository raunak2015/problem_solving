// Q145. Remove Leading and Trailing Spaces (Trim)
// Return a new string with spaces removed from start and end only.

// Input: "  hello  " → Output: "hello"
// Input: "   js" → Output: "js"
// Input: "world   " → Output: "world"

function trim(str){
    return str.trim()
}

console.log(trim("  hello  "));
console.log(trim("   js"));
console.log(trim("world   "));

function trim2(str){
    return str.split(" ").join("");
}

console.log(trim2("  hello  "));
console.log(trim2("  js"));
console.log(trim2("world  "));