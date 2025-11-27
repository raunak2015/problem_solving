// Q9. Leap Year (Simple Rule)
// Given a year, check if it is a leap year. (Simple version: divisible by 4 → leap; you can refine later.)

// Input: 2020 → Output: "leap year"
// Input: 2021 → Output: "not a leap year"
// Input: 2000 (if using full rule: divisible by 400) → Output: "leap year"

function checkLeapYear(year) {
    if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) {
        console.log("leap year");
    } else {
        console.log("not a leap year");
    }
}

checkLeapYear(2020);