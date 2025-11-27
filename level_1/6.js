// Q6. Grade Calculator
// Given marks 0–100, print grade.

// Example mapping:

// 90–100 → A

// 80–89 → B

// 70–79 → C

// 60–69 → D

// 0–59 → F

// Input: marks = 92 → Output: "A"

// Input: marks = 75 → Output: "C"

// Input: marks = 40 → Output: "F"

function marks(num) {
    if (num > 100 || num < 0) {
        console.log("inavlid marks!!");
    }
    else if (num >= 90) {
        console.log("Grade : A");
    }
    else if (num >= 80) {
        console.log("Grade : B");
    }
    else if (num >= 70) {
        console.log("Grade : C");
    }
    else if (num >= 60) {
        console.log("Grade : D");
    }
    else {
        console.log("Grade : F");
    }
}

// marks(89)

function marks1(num1) {
    switch (true) {
        case (num1 > 100 || num1 < 0):
            console.log("invalid marks!!");
            break;
        case (num1 >= 90):
            console.log("Grade : A");
            break;
        case (num1 >= 80):
            console.log("Grade : B");
            break;
        case (num1 >= 70):
            console.log("Grade : C");
            break;
        case (num1 >= 60):
            console.log("Grade : D");
            break;
        default:
            console.log("Grade : F");
    }
}


// marks(89);   
// marks(92);   
// marks(40);   
// marks1(95);  

function getGtade(marks2){
    if(marks2>100 || marks2 <0){
        console.log("invalid input");
        return 0;
    }
    switch(Math.floor(marks2/10)){
        case 10: 
        case 9:
        console.log("Grade : A");
        break;
        case 8:
            console.log("Grade : B");
            break;
        case 7:
            console.log("Grade : C");
            break;
        case 6:
            console.log("Grade : D");
            break;
        default:
            console.log("Grade : F");
    }
}
getGtade(105);