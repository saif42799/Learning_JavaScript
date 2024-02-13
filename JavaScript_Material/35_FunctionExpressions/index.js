// function declaration = define a reusable block of code
//                        that performs a specific task 

// ex.
function helloNull(){
    console.log("Hello");
}
helloNull();

// function expressions = a way to define functions as 
//                        values or variables 

// ex.
const helloNull2 = function(){
    console.log("Hello");
}
helloNull2();


// function as value |  3 sec, surrounded the whole function in setTimeout with , time 
setTimeout(function(){
    console.log("Hello");
}, 3000);


// function declaration
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}


// function expression - more condensed version 
const numbers2 = [1, 2, 3, 4, 5, 6];
const squares2 = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});


console.log(oddNums);






