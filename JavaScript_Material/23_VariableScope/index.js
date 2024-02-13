// variable scope = where a variable is recognized
//                  and accessable (local vs global)


function function1(){
    // the x in a functiopn is considered a local scope 
    // this is only avalable inside a function
    let x = 1; 
    console.log(x);
}

// this is global scope, which is any variable declared outside of a function 
// (global function is avalable to the whole program )
let y = 2;

function function2(){
    console.log(y);
}

function1();
function2(); 