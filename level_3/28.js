
// Q28. First N Fibonacci Numbers
// Print first N Fibonacci numbers. (Start: 0, 1, 1, 2, 3, …)

// Input: N = 5 → Output: 0 1 1 2 3
// Input: N = 1 → Output: 0
// Input: N = 7 → Output: 0 1 1 2 3 5 8

function fibomacci(num){
    let a=0, b=1, c;
    console.log(a);
    console.log(b);
    for(i=3; i<num; i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
fibomacci(9)