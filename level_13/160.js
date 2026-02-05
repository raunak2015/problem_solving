// Q160. Pangram Check
// A pangram contains every letter a–z at least once (ignore case and non-letters).

// Input: "The quick brown fox jumps over a lazy dog" → Output: true
// Input: "Sphinx of black quartz, judge my vow" → Output: true
// Input: "Hello world" → Output: false

function checkLatter(str){
    str = str.toLowerCase();
    let container = new Set();
    for(let char of str){
        if(char >= 'a' && char <= 'z'){
            container.add(char);
        }
    }
    return container.size === 26;
}

console.log(checkLatter("The quick brown fox jumps over a lazy dog"));
console.log(checkLatter("Sphinx of black quartz, judge my vow"));
console.log(checkLatter("Hello world"));

function checkLatter2(str){
    let arr = str.toLowerCase().split("").sort();
    let ascii = 97;
    for(let i = 1; i<arr.length; i++){
        let check = arr[i].charCodeAt();
        if(ascii == check){
            ascii++;
        }
    }
    return ascii>=123;
}

console.log(checkLatter2("The quick brown fox jumps over a lazy dog"));
console.log(checkLatter2("Sphinx of black quartz, judge my vow"));
console.log(checkLatter2("Hello world"));

