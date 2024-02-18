// --------EXAMPLE 1 <h1>--------

// STEP 1 CREATE THE ELEMENT 
const newH1 = document.createElement("h1");




// STEP2 ADD ATTRIBUTES/PROPERTIES 
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center"



// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1); // <- last child (bottom of page)
// document.body.prepend(newH1); // <- first child (top of page)
// document.getElementById("box1").append(newH1); // last child of box1
// document.getElementById("box1").prepend(newH1); // first child of box1

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2); // puts elements in between boxs

// select html elements without id 
const boxes = document.querySelectorAll(".boxL");
document.body.insertBefore(newH1, boxes[0]);




// REMOVE HTML ELEMENTS 
document.body.removeChild(newH1);

// or use this to remove an elemnet thats is in box1 and not the body 
// document.getElementById("box1").removeChild(newH1);





// --------EXAMPLE 2 <h1>--------

// STEP 1 CREATE THE ELEMENT 
const newListItem = document.createElement("li");

// STEP2 ADD ATTRIBUTES/PROPERTIES 
newListItem.textContent  = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);

const orange = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, orange);

// this is if you have no id's
// const boxes2 = document.getElementById("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, boxes2[0]);
