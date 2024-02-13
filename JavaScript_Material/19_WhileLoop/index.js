// while loop = repeat some code WHILE some condition is true 

let username = "";  
let username2 = "";  

while(username === "" || username === null){ //     
    username = window.prompt(`Enter Your name`); 

}  

console.log(`Hello ${username}`);


// do while loop
do{ //     
    username2 = window.prompt(`Enter Your name`); 

} while(username2 === "" || username2 === null)

console.log(`Hello ${username2}`);


// another ex

let loggedIn = false;
let userName3 = "";
let password = "";

while(!loggedIn){
    userName3 = window.prompt(`Enter Your username`); 
    password = window.prompt(`Enter Your password`);
    
    if(userName3 === "Clue" && password === "pass"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid");
    }

}