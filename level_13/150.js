// 150. Length of Longest Word in a Sentence
// Return just the number (length of the longest word).

// Input: "I love coding" Words: I(1), love(4), coding(6) → Output: 6

// Input: "JavaScript is awesome" Words: JavaScript(10), is(2), awesome(7) → Output: 10

// Input: "hi" → Output: 2

function length(str){
    let arr = str.split(" ");

    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length>max){
            max = arr[i].length;
        }

    }
    return max;
    
}

console.log( length("I love coding"));