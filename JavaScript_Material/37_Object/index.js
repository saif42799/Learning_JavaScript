// object = a collection of related properties and/or methods.
//          Can represent real world objects (people, products, places)
//          object = {key:value
//                    function()}


// object
const person1 ={
    // properties
    firstName: "Spongebob",
    lastName: "Squarpants",
    age: 30,
    isEmployed: true,

    // methods (functions)
    sayHello: function(){console.log("Hi I'm Spongebob!")},
    // You can also use an arrow function 
    saySomthing: () => console.log("I like Kraby patties"),

}

const person2 ={
    // properties
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,

    // methods (functions)
    sayHello: function(){console.log("Hey, I'm Patrick... uuuu")},
    eat: () => console.log("I liked to order a ...uuuuuuu Kraby patties"),

}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.saySomthing();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
