// .map() = accepts a callback and applies trhe function 
//          to each elements of an array, then retuns a new array 

const numbers = [1, 2, 3]; // this is similar to forEach but this make a new array instead of changeing the original array 

const squares = numbers.map(square);
const cube = numbers.map(cub);

console.log(cube);

function square(elements){
    return Math.pow(elements, 2)
}

function cub(elements){
    return Math.pow(elements, 3)
}

// 2nd ex.
const students = ["SPongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(uppercase);
const studentsLower = students.map(lowercase);

console.log(studentsLower);

function uppercase(elements){
    return elements.toUpperCase();
}

function lowercase(elements){
    return elements.toLowerCase();
}

// practical ex.
const dates = ["2014-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(elements){
    const parts = elements.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}