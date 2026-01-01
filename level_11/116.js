// Q116. Minutes to Seconds
// Write a function that converts minutes to seconds.

// Input: minutes = 1 → Output: 60
// Input: minutes = 5 → Output: 300
// Input: minutes = 0 → Output: 0

function seconds(min){
    return 60*min
}

console.log(seconds(1));
console.log(seconds(5));
console.log(seconds(0));