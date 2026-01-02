// Q124. Print from n Down to 1
// Given n, print numbers from n down to 1.

// Input: n = 5 → Output: 5 4 3 2 1
// Input: n = 1 → Output: 1
// Input: n = 3 → Output: 3 2 1

function downPrint(num){
    if(num === 0)return;
    console.log(num);
    return downPrint(num-1);
}

downPrint(5);
downPrint(1);
downPrint(3);