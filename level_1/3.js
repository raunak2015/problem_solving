// Q3. Maximum of Three Numbers
// Given three numbers, print the largest.

// Input: a = 3, b = 7, c = 5 → Output: 7
// Input: a = 10, b = 2, c = 10 → Output: 10
// Input: a = -1, b = -5, c = -3 → Output: -1

function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(`Maximum ${num1}`);
    }
    else if(num2 > num1 && num2 > num3){
        console.log(`Maximum ${num2}`);
    }
    else if(num3 > num1 && num3 > num2){
        console.log(`Maximum ${num3}`);
    }
}

max(45,40,30)