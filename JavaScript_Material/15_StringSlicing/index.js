// string slicing = creating a substring 
//                  from a portion of another string

//                  string.slice(start, end);

const fullName = "Broseph Code";

let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// this is a better way to slice 
let firstName2 = fullName.slice(0, fullName.indexOf(" "));
let lastName2 = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName2);
console.log(lastName2);


// excersize 2
const email = "Blah@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);




