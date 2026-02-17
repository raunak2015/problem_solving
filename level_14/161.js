// Q161. Count Positive, Negative, and Zero
// Given an array of numbers, count how many are positive, negative, and zero.

// Input: [1, -2, 0, 5, -3] → Output: positives = 2, negatives = 2, zeros = 1

// Input: [-1, -2, -3] → Output: positives = 0, negatives = 3, zeros = 0

// Input: [0, 0, 0] → Output: positives = 0, negatives = 0, zeros = 3


function count(arr){
    let positives = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(element => {
        if(element>0) positives++;
        else if(element<0) negative++;
        else zero++;
    });

    console.log("Positive : ", positives  );
    console.log("Negative : ", negative  );
    console.log("Zero : ", zero  );
}

count([1, -2, 0, 5, -3])
count([-1, -2, -3] )
count([0, 0, 0] )