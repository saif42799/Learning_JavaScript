// spead operator = ... allows an iterable suchas an 
//                  array or string to be expanded 
//                  into seperate eleements
//                  (unpacks the element)

let numbers = [1, 2, 3, 4, 5];
let maximun = Math.max(...numbers); // (...) unpacks the array (spreads the srray in to different elements)
let minimun = Math.min(...numbers); 


console.log(maximun);
console.log(minimun);


let username = "Bro Code";
let letters = [...username];

console.log(letters);  // this shows what ... does 



let username2 = "Bro Code";
let letters2 = [...username2].join("-"); // this join username2 back together but the spaces are replaced with "-"

console.log(letters2); 



let fruits = ["apple", "oranage", "banana"]; 
let vegi = ["carrots", "celery", "potatoes"]; 

let foods = [...fruits, ...vegi, "egg", "milk"]; // shallow copy - different data structure but similar values 

console.log(foods);



