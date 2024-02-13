// const(constant) = a variable that cant be changed 

const PI = 3.14159; // const is put there so the variabkes can not chnages or somwone else can not change it 
// good practice to all CAPS a const 
let radius ;
let circumference;

radius = Number(radius);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";


};


