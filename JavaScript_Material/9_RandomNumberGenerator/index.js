// random number generator 
const min = 50;
const max = 100;

let randomNumLimit = Math.floor(Math.random() * (max - min)) + min; // random number btween 50 and 100

let randomNum = Math.floor(Math.random() * 100) + 1; // random number up to 100

console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min2 = 1;
const max2 = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max2) + min2;
    randomNum2 = Math.floor(Math.random() * max2) + min2;
    randomNum3 = Math.floor(Math.random() * max2) + min2;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

