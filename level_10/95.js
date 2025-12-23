// Q95. Total Cost from Product Price Object
// Given object of {productName: price}, find total.

// Input: {apple: 50, banana: 20, mango: 30} → Total = 100
// Input: {pen: 10, pencil: 5} → Total = 15
// Input: {} → Total = 0

let obj = {apple: 50, banana: 20, mango: 30};

let sum = 0;

for(let key in obj){
    sum += obj[key];
}

console.log(sum);


let res = Object.values(obj).reduce((a,b)=>a+b,0)
console.log(res);