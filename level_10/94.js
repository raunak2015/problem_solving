// Q94. Highest Marks from Array of Students
// Students as array of objects: {name, marks}.

// Input: [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}] → Output: "B" (or full object {name:"B",marks:80})

// Input: [{name: "Neel", marks: 95}] → Output: "Neel"

let obj = [{ name: "A", marks: 50 }, { name: "B", marks: 80 }, { name: "C", marks: 70 }];

let max = obj[0].marks;
let n = 0;
for(let i = 0; i<obj.length; i++){
    if(max<obj[i].marks){
        max = obj[i].marks;
        n = i;
    }
}
console.log(obj[n]);