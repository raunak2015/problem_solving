// Given array of only 0s and 1s, count both.

// Input: [0, 1, 0, 1, 1] → Output: zeros = 2, ones = 3
// Input: [1, 1, 1] → Output: zeros = 0, ones = 3
// Input: [0, 0] → Output: zeros = 2, ones = 0

function check(arr){
    let zeroCount = 0;
    let oneCount = 0;

    arr.forEach(element => {
        element == 0 ? zeroCount++ : oneCount++
    });
    console.log(zeroCount);
    console.log(oneCount);
}

check([0, 1, 0, 1, 1])