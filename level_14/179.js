// Q179. Remove Empty Strings from Array
// Given array of strings, remove empty strings "".

// Input: ["a", "", "b", "", "c"] → Output: ["a", "b", "c"]
// Input: ["", ""] → Output: []
// Input: ["js", " ") (space is not empty) → Output: ["js", " "]

function filter(arr){
    return arr.filter((data)=>{
       return data !== "";
    })
}

console.log(filter(["a", "", "b", "", "c"]));
console.log(filter(["", ""]));
console.log(filter(["js", " "]));


function filter2(arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length>0) res.push(arr[i]);
    }
    return res;
}

console.log(filter2(["a", "", "b", "", "c"]));
console.log(filter2(["", ""]));
console.log(filter2(["js", " "]));


function filter3(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "") {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(filter3(["a", "", "b", "", "c"])); 
console.log(filter3(["", ""]));              
console.log(filter3(["js", " "]));              