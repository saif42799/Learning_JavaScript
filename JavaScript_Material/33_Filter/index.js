// .filter() = creates a new array by filtering 
//             out elements 

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


// ex. 2
const age = [16, 17, 18, 18, 19, 20, 60];
const adults = age.filter(isAdult);
const child = age.filter(isChild);

console.log(adults);
console.log(child);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

// ex.  3
const words = ["apple", "orange", "banana", "kiwi",
               "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longtWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longtWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}
