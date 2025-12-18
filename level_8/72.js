// Q72. Remove Duplicates
// Return a new array with unique elements (order can be original order).

// Input: [1, 2, 2, 3, 3, 3] → Output: [1, 2, 3]
// Input: ["a", "a", "b"] → Output: ["a", "b"]
// Input: [] → Output: []

function removeDuplicates(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    return arr;
}

console.log(removeDuplicates([1, 5, 2, 3, 3, 3]));

function removeDuplicates2(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr2.includes(arr[i])) {
            continue;
        }
        else {
            arr2.push(arr[i]);
        }
    }
    return arr2
}
console.log(removeDuplicates2([1, 5, 2, 3, 3, 3]));


function removeDuplicates3(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates3([1, 5, 2, 3, 3, 3]));

function removeDuplicates4(arr){
    let res = [];
    let obj = {};
    for(let i = 0; i<arr.length; i++){
        if(obj[arr[i]]!=undefined){
            obj[arr[i]]++;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    for(let char in obj){
        res.push(Number(char));
    }
    return res;
}

console.log(removeDuplicates4([1, 5, 2, 3, 3, 3]));