// forEach() = method used to iterate over the elements 
//             of an array and apply a specified function (callback)
//             to each element

//             array. forEach(callBack)

let numbers = [1, 2, 3, 4, 5];

// have to make sure these callbacks are in order
numbers.forEach(cube)
// array, for each, callback
numbers.forEach(display)


function double(element, index, array){
    array[index] = element * 2; 
}

function triple(element, index, array){
    array[index] = element * 3; 
}

function squared(element, index, array){
    array[index] = Math.pow(element, 2 ); 
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3 ); 
}


// function 
function display(element){
    console.log(element);
}


// practical ex.

let fruits = ["apple", "orange", "banna", "coconut"];

// in order
fruits.forEach(capitalize);
fruits.forEach(display2);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display2(element){
    console.log(element);
}

