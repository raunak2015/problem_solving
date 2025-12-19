// Q82. Right-Angled Triangle of *
// For N = 4:

// *
// * *
// * * *
// * * * *
// Input: N = 3 → * * * * * *

// Input: N = 1 → *

function triangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row +="* ";
        }
        console.log(row);
    }
}

triangle(3)