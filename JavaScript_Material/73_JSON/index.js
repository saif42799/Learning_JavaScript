// JSON = (JavaScript Onject Notation) data-interchage format 
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "karate", "cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                {"name": "Patrick","age": 30,"isEmployed": false},
                {"name": "Squidward","age": 30,"isEmployed": true},
                {"name": "Sandy","age": 30,"isEmployed": false}]`;

// convert names to JSON string
// const jsonString = JSON.stringify(people);

const parsedData = JSON.parse(jsonNames);

console.log(parsedData);




// fetch JSON file 
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("names.json")
    .then(response => response.json())
    .then(value2 => console.log(value2))

fetch("people.json")
    .then(response => response.json())
                                // iterate through all values 
    .then(value3 => value3.forEach(value3 => console.log(value3.name)))
    .catch(error => console.log(error));