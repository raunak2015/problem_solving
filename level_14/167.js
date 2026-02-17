// Q167. Count Elements Greater Than k
// Given array and number k, count how many elements are strictly greater than k.

// Input: arr = [1, 5, 7, 2], k = 4 → Elements: 5,7 → Output: 2
// Input: arr = [10, 20, 30], k = 25 → Elements: 30 → Output: 1
// Input: arr = [1, 2, 3], k = 5 → Output: 0

function  greater(arr,k){
    return arr.filter(Element => {
        if(Element>k){
            return Element;
        }
        
    })
}

console.log(greater([1, 5, 7, 2],4));