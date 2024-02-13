// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical 
//          lexicographic = (alphabet + numbers + symbols) as strings 

let fruits = ["apple", "organge", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

fruits.sort();
            // custume camparison function 
numbers.sort((a, b) => b - a);

console.log(fruits);
console.log(numbers);

// ex. 2
const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}];

// this is used for number below 
// people.sort((a, b) => a.age - b.age);

// below arranged string in lexicographic oorder
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

