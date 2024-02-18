// NodeList = Static collection of HTML elements by(id, class, element)
//            Can be created by using querySelectorAll() 
//            Similar to an array, but no (map, filter, reduce)
//            NodeList wont't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");
let buttons2 = document.querySelectorAll(".myButtons2");
let buttons3 = document.querySelectorAll(".myButtons3");


// ADD HTLM/CSS PROPERTIES 1 

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😀";

});



// CLICK EVENT LISTENER 2 

buttons2.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});



// MOUSE + MOUSEOUT event listener 3
buttons3.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons3.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});




// ADD AN ELEMENT
const newButton = document.createElement("button");  // STEP 1
newButton.textContent = "Button 5"; // STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton);// STEP 3
// button 5 doesnt show up when console.log(buttons), We have to manually add it using querySelectorAll()
buttons = document.querySelectorAll(".myButtons");
console.log(buttons);




// REMOVE AN ELEMENT
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    });
});
