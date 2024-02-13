// if statements 

let age = 25;

if(age >= 18){
    console.log("You are old enough to enter this site.");
}else{
    console.log("You are not permitted");
}


let time = 9;

if(time < 12){
    console.log("Good Morning!");
}else{
    console.log("Good afternoon");
}


let student = false;

if(student){  // or student == true
    console.log("You are a student");
}else{
    console.log("You are not a student");
}

// nested if statments 

let age2 = 25;
let hasLicense = true;

if(age2 >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("Your in the clear");
    }else{
        console.log("We have a problem, Ima need back up");
    }
}else{
    console.log("You must be 16+ to have a license");
}


// else if statments 
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age3 = 0;

mySubmit.onclick = function(){

    age3 = myText.value;
    age3 = Number(age3);

    if(age3 >= 100){
        resultElement.textContent = ("You are too old to enter");
    }
    else if(age3 == 0){
        resultElement.textContent = ("You cant enter, you where just born");
    }
    else if (age3 < 0 ) {
        resultElement.textContent = ("Your age cannot below 0");
    } 
    else if (age3 >= 18) {
        resultElement.textContent = ("You are old enough to enter this site");
    }
    else {
        resultElement.textContent = ("You must be 18+ to enter this site");
    }
    

}

