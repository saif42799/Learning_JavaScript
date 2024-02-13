// .reduce = reduce the elements of an array 
//           to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

// this is kind of a for loop where it adds 2 numbers and then moves 
// on top the next index and adds the previous number with current index
function sum(previos, next){
    return previos + next;
}


// ex. 2 
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


