// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds) 
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay);

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

// or use an anonymous function 
setTimeout(function(){window.alert("2nd Hello")}, 4000);

// or use an arrow function 
setTimeout(() => window.alert("3rd Hello"), 5000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers 
const timeoutId = setTimeout(() => window.alert("4rd Hello"), 6000);

clearTimeout(timeoutId);



// html ex
let timeoutId2;

function startTimer(){
    timeoutId2 = setTimeout(() => window.alert("5th Hello"), 2000);
    console.log("Starter");
}


function clearTimer(){
    clearTimeout(timeoutId2);
    console.log("Cleared");
}

