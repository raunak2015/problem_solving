// Q81. Square Pattern of * of Size N
// For N = 3:

// * * *
// * * *
// * * *
// Input: N = 2 → * * * *

// Input: N = 4 → 4×4 stars.


function Square(n){
    for(let i=0; i<n; i++){
        let row = "";
        for(let i = 0; i<n; i++){
            row += "* ";
        }
        console.log(row);
    }
}

Square(5)