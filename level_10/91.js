// Q91. Frequency of Numbers in Array (Object)
// Return an object where key = number, value = count.

// Input: [1, 2, 2, 3] → Output: {1: 1, 2: 2, 3: 1}
// Input: [5, 5, 5] → Output: {5: 3}
// Input: [] → Output: {}

function obj(arr){
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


console.log(obj([1, 2, 2, 3] ));