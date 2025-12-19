// Q88. Armstrong Number (3-digit)
// Number is Armstrong if sum of cubes of its digits equals the number (for 3-digit).

// Input: 153 → 1³ + 5³ + 3³ = 153 → Output: true
// Input: 370 → Output: true
// Input: 123 → Output: false

function armstrong(num){
    let temp = num;
    let n = String(num).length;
    let sum = 0;

    while(temp>0){
        let digit = temp % 10;
        sum += digit**n;
        // sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(armstrong(153));
console.log(armstrong(370));
console.log(armstrong(123));