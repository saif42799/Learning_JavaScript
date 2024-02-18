// DOM = The procces of navigating through the structure 
//       of an HTML using JavaScript.

// .firstChild();
// .lastElementChild();
// .nextElementSibling();
// .previousElementSibling();
// .parentElement();
// .children();


// ---------.firstChild();---------
// this highlights one element
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// this highlights all elements 
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "Yellow";
});




// ---------.lastElementChild();---------
// this highlights one element
const element2 = document.getElementById("fruits");
const lastchild = element2.lastElementChild;
lastchild.style.backgroundColor = "red";

// this highlights all elements 
const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ulElement => {
    const lastchild = ulElement.lastElementChild;
    lastchild.style.backgroundColor = "red";
});




// ---------.nextElementSibling();---------
// this get the sibling of the element you choose so apple wont be highlight, orange will be because it is the sibling 
// if you select the last sibling, nothing will be highlighted because there is no more siblings 
const element3 = document.getElementById("apple"); // if you select "fruits" all "vegtables" will be highlighted 
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "purple"




// ---------.previousElementSibling();---------
// this is visversa to .nextElementSibling(), it will get the previous elements 
const element4 = document.getElementById("potatoes");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "lime";




// ---------.parentElement();---------
// this highlight everything that is contained in the same group as ice cream, so all or desserts is highlighted 
const element5 = document.getElementById("ice cream");
const parent = element5.parentElement;
parent.style.backgroundColor = "blue"




// ---------..children();---------
const element6 = document.getElementById("extraStuff");
const childeren = element6.children;

// type cast it 
Array.from(childeren).forEach(child => {
    child.style.backgroundColor = "grey"; 
});
// this will highlight all chlderen from a selected element
