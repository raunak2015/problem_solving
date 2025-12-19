// Q84. Triangle with Repeated Row Number
// For N = 4:

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// Input: N = 3 → 1 2 2 3 3 3

// Input: N = 1 → 1

function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row +=i + " ";
        }
        console.log(row);
    }
}

triangle(5)