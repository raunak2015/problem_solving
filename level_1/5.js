// Q5. Age Group
// Given an age, print whether the person is "child", "teenager", or "adult" (you can assume: 0–12 child, 13–19 teenager, 20+ adult).

// Input: age = 8 → Output: "child"
// Input: age = 15 → Output: "teenager"
// Input: age = 25 → Output: "adult"

function age(age){
    if(age<=12 && age >0){
        console.log("child");
    }
    else if(age>=13 && age <=19){
        console.log("teenager");
    }
    else if(age>=20){
        console.log("adult");
    }
    else{
        console.log("invalid age");
    }
}

age(10);