// closure = A function defined inside of another function, 
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private varibales and state maintenance 
//           Used frequently in JS frameworks: Reac, Vue, Angular

function outer(){

    let message = "Hello";
    // inner function has access to everthing inside the outer function 
    function inner(){
        console.log(message);
    }

    inner();
}
// you cannot access the inner function outside of the outer function 
outer();

// ex 2

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);


// ex. 3

function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    // return an object that has reference to these functions
    return {increaseScore, decreaseScore, getScore}
    
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(5);

console.log(`The final score is ${game.getScore()}`);