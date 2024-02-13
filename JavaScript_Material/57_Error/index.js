// Error = An Object that is created to represent a problem that occurs 
//         Occur often with user input or establishing a connection

// we can handle errors using these below

// try { } = Enclose code that might potentially cause an error 
// catch { } = Catch and handle any thrown errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up 
//               ex. close files, close connections, release resources 

try{
    console.log(x);
    // used for
    // Network Errors
    // Promise Rejection
    // Security Errors

}catch(error){
    console.error(error);
}
// optional to use finally 
// finally always executes regaurdless if an error comes up
finally{
    // used for
    // Close Files
    // Close Connections
    // Release Resources
    console.log("This always executes");


}

console.log("You have reached the end of the program");


// ex. 2 
try{
    const dividend = Number(window.prompt("Enter a dividend")); 
    const divisor = Number(window.prompt("Enter a divisor")); 

    if(divisor == 0){
        // making a new erroe message
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end of the 2nd ex.");

