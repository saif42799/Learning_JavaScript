// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once 
//                   (parameters) => some code 


function hello(){
    console.log("Hello");
}

hello();


// concise way to write function above
const hello2 = (name) => console.log(`Hello ${name}`);

hello2("Bob");


// take it a step further 
const hello3 = (name, age) => {console.log(`Hello ${name}`)
                          console.log(`You are ${age} yeas old`)};

hello3("Bro", 25);


// uses math witth arrow function

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const eevnNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);