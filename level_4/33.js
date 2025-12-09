// Q33. Count Vowels
// Count vowels (a, e, i, o, u – you can decide if you treat uppercase as vowel too).

// Input: "hello" → Output: 2 (e, o)
// Input: "JAVASCRIPT" → Output: 3 (A, A, I – if case-insensitive)
// Input: "sky" → Output: 0

function countVowels(str) {
    let txt = str.toLowerCase();
    let count = 0;
    for (i = 0; i < txt.length; i++) {
        if (txt[i] == 'a' || txt[i] == 'e' || txt[i] == 'i' || txt[i] == 'o' || txt[i] == 'u') {
            console.log(txt[i]);
            count++;

        }
    }
    console.log(count);
}

//easy method using includes method

function countVowels1(txt) {
    let vowels = "aeiou";
    let count = 0;

    for (let char of txt.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(count);
}

countVowels1("javascript")