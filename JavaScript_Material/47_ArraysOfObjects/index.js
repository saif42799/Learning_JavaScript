const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banna", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[0].name);
console.log(fruits[2].color);

// add new object into array
fruits.push({name: "grapes", color: "purple", calories: 62});

console.log(fruits);

// remove element (removes last element)
fruits.pop();

// remove elements at certain indeces
fruits.splice(1, 2);

// for each to loop through elements in array 
fruits.forEach(fruits => console.log(fruits.name))

// map will each element through a function and turn it into an array 
const fruitColors = fruits.map(fruits => fruits.color);
const fruitCal = fruits.map(fruits => fruits.calories);

console.log(fruitColors);
console.log(fruitCal);

// filter will return a new array after using each elemnet and checkimg a condition 
const yelloFruits = fruits.filter(fruits => fruits.color === "yellow");
const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);

console.log(yelloFruits);
console.log(lowCalFruits);

// reduce will return a single value(object)
const maxFruits = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit : max);

console.log(maxFruits);

