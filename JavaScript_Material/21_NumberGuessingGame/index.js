// number Guessing game 

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let runnig = true;

while(runnig){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT! THe answer was ${answer}. It took you this amount of attemps: ${attemps}`);
            runnig = false;
        }

    }

}