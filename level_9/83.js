// Q83. Number Triangle Increasing Each Row
// For N = 4:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// Input: N = 3 → 3 rows up to 3
// Input: N = 1 → just 1

function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row +=j + " ";
        }
        console.log(row);
    }
}

triangle(3)