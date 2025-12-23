// Q99. Count Key-Value Pairs in Object
// Return how many properties object has.

// Input: {a: 1, b: 2, c: 3} → Output: 3
// Input: {} → Output: 0
// Input: {x: 10} → Output: 1


function count(obj){
    return Object.values(obj).length
}

console.log(count({a: 1, b: 2, c: 3}));


function count2(obj){
    let count=0;
    for(let char in obj){
        count++
    }
    return count;
}

console.log(count2({a: 1, b: 2, c: 3}));

