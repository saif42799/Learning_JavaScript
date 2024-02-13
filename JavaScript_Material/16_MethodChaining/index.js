// Method Chaining = calling one method after another 
//                   in one continious line of code 

// --------NO METHOD CHAINING-----------
let userName = window.prompt("Enter your username: ");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChar = userName.slice(1);
// extraChar = extraChar.toLowerCase();

// userName = letter + extraChar;

// console.log(userName);




// --------METHOD CHAINING-----------

// all the above was condensed to this 

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);
