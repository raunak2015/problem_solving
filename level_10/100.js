// Q100. Filter Adults from Array of People
// Array of {name, age} → return only those with age > 18.

// Input: [{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}] → Output: [{name: "B", age: 20}]

// Input: [{name: "Neel", age: 25}] → Output: same array

// Input: [{name: "Child", age: 10}] → Output: []

function filter(obj){
    return obj.filter((data)=>{
        return data.age>18;
    })
}

console.log(filter([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}]));
console.log(filter([{name: "Neel", age: 25}] ));
console.log(filter([{name: "Child", age: 10}]));