// Hide/show HTMl

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

const myButton2 = document.getElementById("myButton2");
const myImg2 = document.getElementById("myImg2");

myButton.addEventListener("click", event => {

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";

    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }

    
});




// or you can do this 
myButton2.addEventListener("click", event => {

    if(myImg2.style.visibility === "hidden"){
        myImg2.style.visibility = "visible";
        myButton2.textContent = "Hide";

    }
    else{
        myImg2.style.visibility = "hidden";
        myButton2.textContent = "Show";
    }

    
});
