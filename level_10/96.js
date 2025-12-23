// Q96. Average Marks from Subject-Marks Object
// Object like {math: 80, science: 90, english: 70}.

// Input: {math: 80, science: 90, english: 70} Sum = 240, count = 3 → Output: 80

// Input: {only: 100} → Output: 100

// Input: {} → Output: maybe 0 or NaN (you decide and handle)

function avg(obj){
    let sum = Object.values(obj).reduce((a,b)=>a+b,0);
    let length = Object.keys(obj).length;
    return sum/length;
}

console.log(avg({math: 80, science: 90, english: 70}));