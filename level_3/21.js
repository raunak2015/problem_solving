// Q21. Count Digits in a Number
// Given a number, count how many digits it has. (Ignore sign.)

// Input: n = 0 → Output: 1
// Input: n = 1234 → Output: 4
// Input: n = -98 → Output: 2


function count1(N){
    let ans= String(N).length;
    console.log(ans);
}
count1(1234);

function countDigit(n){
    let temp=Math.abs(n);
    let count = 0;
    while(temp!=0){
        count++;
        temp= Math.floor(temp/10);
    }
    console.log(count);
}
countDigit(-1234)

