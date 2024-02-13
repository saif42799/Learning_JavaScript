// card game
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// Fisher-Yates algorithm

shuffle(cards);

console.log(cards);


function shuffle(array){
    // loop though elements in array
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        // destructuring
        [array[i], array[random]] = [array[random], array[i]];

    }
}