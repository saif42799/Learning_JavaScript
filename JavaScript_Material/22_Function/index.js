// function = A section of reusable code.
//            Declare code once, use it whenever you want 
//            Call the function to exexute that codde 

function happBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}

happBirthday("Saif", "25");


// return key word
 function add(x, y){
    let result = x + y;
    // "return" basically returns the data where you called it 
    return result;
 }

 function subtract(x, y){
    return x - y;
 }


 let answer = add(2, 3);
 let answer2 = subtract(2, 3);
 console.log(answer);
 console.log(answer2);

// checks if number is even
 function isEven(num){

    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
 }

 console.log(isEven(5));
 console.log(isEven(10));