// array = a varibale like structue that can
//         hold more than 1 value

// each value in an array is a element 
let fruits = ["apple", "orange", "Bannana"];

console.log(fruits);
// get index from array
console.log(fruits[0]);


// change element in array 
fruits[1] = "coconut";
console.log(fruits);

// add new element to the array 
fruits[3] = "kiwi";
console.log(fruits);

fruits.push("mango"); // pushes element to the end of the array 
console.log(fruits);

fruits.pop(); // removes lat elemnt of the array 
console.log(fruits);


fruits.unshift("tangerine"); // adds element to the beginning of the array 
console.log(fruits);

fruits.shift(); // removes element at the beginning of the array 
console.log(fruits);

//get length of array
let numOfFruits = fruits.length;
console.log(numOfFruits);

// find index of element
let index = fruits.indexOf("apple");
console.log(index);


// loop through array 
for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);

}

// sort array in abc order and in reverse order
fruits.sort().reverse();

// enhanced for loop
for(let placeHolder of fruits){
    console.log(placeHolder);
}


