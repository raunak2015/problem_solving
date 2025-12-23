// Q93. Character Frequency in String (Object)
// Return object of character counts.

// Input: "aab" → Output: {a: 2, b: 1}
// Input: "hello" → Output: {h:1, e:1, l:2, o:1}
// Input: "" → Output: {}

function frq(arr){
    let res = {};
    for(let i = 0; i<arr.length;i++){
        if(res[arr[i]]== undefined){
            res[arr[i]] = 1;
        }   
        else{
            res[arr[i]]++;
        }
    }
    return res;
}

console.log(frq("aab"));