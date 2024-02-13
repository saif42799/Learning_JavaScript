// destructuring =  extract values from arrays and objects,
//                  than assign them to variables in a convenient way
//                  [] to perform array destructuring
//                  {} to perform object destructuring
//                  5 examples 


// -------- Example 1 --------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


// -------- Example 2 --------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "Green", "Blue", "Black", "White"]; 

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// -------- Example 3 --------
// ASSIGN ARRAY ELEMENTS TO VARIABLES 

const colors2 = ["red", "Green", "Blue", "Black", "White"];
                                           // rest parameters  
const [firstColor, secondColor, thirdCOlor, ...extraColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdCOlor);
console.log(extraColors);


// -------- Example 4 --------
// EXTRACT VALUES FROM OBJECTS 

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName2: "Patrick",
    lastName2: "Star",
    age2: 34,
    
}

const {firstName, lastName, age, job} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

                                    // you can set defaut values when destrcturing 
const {firstName2, lastName2, age2, job2="Unempoloyed"} = person2;

console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);



// -------- Example 5 --------
// DESTRUCTURING IN FUNCTION PARAMETERS 

function displayPerson({firstName3, lastName3, age3, job3}){
    console.log(`Name: ${firstName3} ${lastName3}`);
    console.log(`Age: ${age3}`);
    console.log(`Job: ${job3} `);
}

function displayPerson2({firstName4, lastName4, age4, job4="Unempoloyed"}){
    console.log(`Name: ${firstName4} ${lastName4}`);
    console.log(`Age: ${age4}`);
    console.log(`Job: ${job4} `);
}

const person3 = {
    firstName3: "Spongebob",
    lastName3: "SquarePants",
    age3: 30,
    job3: "Fry Cook",
}

const person4 = {
    firstName4: "Patrick",
    lastName4: "Star",
    age4: 34,
    
}

displayPerson(person3);
displayPerson2(person4);