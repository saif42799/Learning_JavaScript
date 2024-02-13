// counter program

const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countLable = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}
