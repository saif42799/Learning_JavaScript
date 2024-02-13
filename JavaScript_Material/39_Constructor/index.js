// constructor = special method for defining the 
//               properties and methods of objects 

// constructor
function Car(make, model, year, color){
    // properties
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color

    //method
    this.drive = function(){console.log(`You drive this ${this.model}`)}

}

// instances of object
const car1 = new Car("Toyota", "Supra", 1998, "black");
const car2 = new Car("Ford", "IDk", 2005, "white");
const car3 = new Car("Dodge", "Charger", 2024, "Silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();
