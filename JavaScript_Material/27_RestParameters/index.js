// rest parameters = (...rest) alow a function to work with a variable 
//                   number of arguments by bundling them into an array 

//                   spreed = expands an array into seperate elements 
//                   rest = bundles seperates elements into an array 

// rest is the oposite of spread operator

function openFridge(...foods){ // rest operator is used as a parameter 
    console.log(...foods); // spread operator is used when ever you have an array or a collection of something 

}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);


const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);


// ex 2

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);


// ex 3

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total2 = getAverage(75, 100, 85, 90, 50);

console.log(`Your average is $${total2}`);


// ex 4 
function combineStrings(...strings){
    return strings.join(" ");
}

const fullName =  combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);

