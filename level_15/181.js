
// Q181. Sum of Odd Numbers in Array
// Return sum of only odd numbers.

// Input: [1, 2, 3, 4, 5] → Odds: 1,3,5 → Output: 9
// Input: [2, 2, 2] → Odds: none → Output: 0
// Input: [-1, -2, -3] → Odds: -1,-3 → Output: -4

function sum(arr) {
  return arr.reduce((curr, data) => {
    if (data % 2 !== 0) {
      curr += data;
    }
    return curr;
  }, 0);
}

console.log(sum([1, 2, 3, 4, 5])); 
console.log(sum([2, 2, 2]));       
console.log(sum([1, 3, 5]));  

function sum2(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2!=0){
            sum+=arr[i];
        }
    }
    return sum;
}


console.log(sum2([1, 2, 3, 4, 5])); 
console.log(sum2([2, 2, 2]));       
console.log(sum2([1, 3, 5])); 