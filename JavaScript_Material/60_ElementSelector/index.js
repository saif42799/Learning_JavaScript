// element selectors = Methods used to target and manipulate HTML elements 
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById();            = ELEMENT OR NULL 
// 2. document.getElementsByClassName();    = HTML COLLECTION
// 3. document.getElementsByTagName();      = HTML COLLECTION
// 4. document.querySelector();             = ELEMENT OR NULL
// 5. document.querySelectorAll();          = NODELIST


// ---------getElementById();--------- 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// this displays the HTML elements 
console.log(myHeading);




// ---------getElementsByClassName();---------  
const fruits = document.getElementsByClassName("fruits");

// exhanced for loop to highlight all elements
for(let fruit of fruits){
    fruit.style.backgroundColor = "blue";
}
// this is anopther way to highlight all elements, this used type casting
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
// }); 




// ---------getElementsByTagName();--------- 
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// apply CSS properties we can use an enhanced for loop
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "red";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "orange";
}




// ---------querySelector(); this finds the first targeted element ---------
//                                         .nameOfClass or tagName
const element115 = document.querySelector(".fruits");

element115.style.backgroundColor = "tan";




// ---------querySelectorAll();  this finds all targeted element and you can cycle through them  ---------
const junkFood = document.querySelectorAll(".junkFood");

for(let junk of junkFood){
    junk.style.backgroundColor = "lime";
}

