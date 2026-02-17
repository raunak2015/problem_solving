// Q170. Contains Any Duplicate?
// Return true if array contains any value that appears more than once.

// Input: [1, 2, 3, 1] → Output: true
// Input: [1, 2, 3] → Output: false
// Input: [] → Output: false


function duplicate(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1;  j< arr.length; j++){
            if(arr[i]==arr[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(duplicate([1,2,3,1]));
console.log(duplicate([1,2,3,]));
console.log(duplicate([]));

function duplicate2(arr){
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            console.log(true);
            return;
        }
        else {
            obj[arr[i]]==1;
        }
    }
    console.log(false);
}

console.log(duplicate2([1,2,3,1]));
console.log(duplicate2([1,2,3,]));
console.log(duplicate2([]));
