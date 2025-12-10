// Q40. Remove All Spaces
// Remove all spaces from a string.

// Input: "hello world" → Output: "helloworld"
// Input: "  a b  c  " → Output: "abc"
// Input: "no_spaces" → Output: "no_spaces"


function removeSpace(str) {
    // return str.replace(/\s/g, "");
    return str.split(" ").join("")
}

console.log(removeSpace("a  f  b d ed"));

function check(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {


        if (str[i] == " ") {
            continue;
        }
        res = res + str[i];
    }
    console.log(res);
}

check("a d  f  ees s");