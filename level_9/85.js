// Q85. Print Multiplication Tables from 1 to 10
// Print tables 1 to 10, each up to 10.

// Output includes:

// Table of 1: 1 2 3 4 5 6 7 8 9 10
// Table of 2: 2 4 6 ...
// … up to table of 10.
// (You can format as lines or blocks.)

function table(){
    for(let i = 1; i <= 10; i++){
        let row = "";
        for(let j = 1; j <= 10; j++){
            row += i*j + " ";
        }
        console.log(row);
    }
}
table()