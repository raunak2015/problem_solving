// Q80. Separate Even and Odd into Two Arrays
// Given an array, return two arrays: evens and odds.

// Input: [1, 2, 3, 4, 5] → Output: evens = [2, 4], odds = [1, 3, 5]
// Input: [2, 4, 6] → Output: evens = [2, 4, 6], odds = []
// Input: [1, 3, 5] → Output: evens = [], odds = [1, 3, 5]

function Separate(arr){
    let even = arr.filter((data)=>{
        return data%2==0;
    })
    let odd = arr.filter((data)=>{
        return data%2!=0;
    })

    console.log(`Even : ${even}`);
    console.log(`odd : ${odd}`);
}

Separate([1, 2, 3, 4, 5] )