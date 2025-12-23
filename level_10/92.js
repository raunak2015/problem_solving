// Q92. Most Frequent Number in Array
// Using a frequency object, return the number with highest count.

// Input: [1, 2, 2, 3] → Output: 2
// Input: [4, 4, 1, 1, 4] → Output: 4
// Input: [7] → Output: 7

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

    let max ;
    let maxfrq = 0
    for(let char in res ){
        if(res[char]>maxfrq){
            maxfrq = res[char];
            max=Number(char);
        }
    }
    return maxfrq;
}


console.log(obj([1, 2, 2, 3] ));
