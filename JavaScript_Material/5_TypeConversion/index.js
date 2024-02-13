// type conversion = change the datatype of a value to another 
//                   (strings, number, booleans)

let age = window.prompt("How old are you");

// convertion string input to a number 
age = Number(age);
age += 1;

console.log(age, typeof age);

let x = "0";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

