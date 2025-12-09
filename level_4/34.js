// Q34. Count Consonants
// Count consonants (letters that are not vowels).

// Input: "hello" → Output: 3 (h, l, l)
// Input: "abc" → Output: 2 (b, c)
// Input: "a e i" → Output: 0 (if you ignore spaces, only vowels)

function consonants(str){
    let con = 'bcdfghjklmnpqrstvwxyz'
    let txt = str.toLowerCase();
    let count = 0;

    for(let char of txt){
        if(con.includes(char)){
            count++;
        }
    }
    console.log(count);
}
consonants("javascript")

// ascii value

function check(str){
    let count = 0;
    str = str.toLowerCase();
    for(let char=0; char<str.length; char++){
        if(str.charCodeAt(char)!=97 && str.charCodeAt(char)!=101 && str.charCodeAt(char)!=105 && str.charCodeAt(char)!=111 && str.charCodeAt(char)!=117 ){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}

console.log(check("ab"));