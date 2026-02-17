// Q171. Unique Elements Without Set
// Return new array with all duplicates removed, using loops (not Set).

// Input: [1, 2, 2, 3, 3, 3] → Output: [1, 2, 3]
// Input: ["a", "a", "b"] → Output: ["a", "b"]
// Input: [] → Output: []

function unique(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = true;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = false;
                break;
            }
        }

        if (isDuplicate) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(unique([1, 2, 2, 3, 3, 3])); 
console.log(unique(["a", "a", "b"]));    
console.log(unique([]));                 
