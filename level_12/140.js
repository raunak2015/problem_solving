// Q140. Automorphic Number
// A number is automorphic if its square ends with the same digits as the number.

// Input: n = 5 → 5² = 25 → ends with 5 → Output: true
// Input: n = 6 → 6² = 36 → ends with 6 → Output: true
// Input: n = 7 → 7² = 49 → does not end with 7 → Output: false


function automorphicNumber(num){
    let temp = String(num**2);
    return num == temp[temp.length-1]
}

console.log(automorphicNumber(5));
console.log(automorphicNumber(6));
console.log(automorphicNumber(7));


function automorphicNumber2(num){
    let square = num**2;
    let digit = String(num).length;
    let power = 10**digit;
    return square%power === num;
}

console.log(automorphicNumber2(5));
console.log(automorphicNumber2(25));
console.log(automorphicNumber2(7));