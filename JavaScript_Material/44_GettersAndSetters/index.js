// getter = special method that makes a property readable 
// setters = special method that makes a property writeable 
// getters and setters are methods

// validate and modify a value when reading/writing a property 

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    // setter
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth // using "_" tells other developers that this is a private property that you shoulnd't touch at all 
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    // setter
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight // using "_" tells other developers that this is a private property that you shoulnd't touch at all 
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    // getters
    get width(){
        return this._width.toFixed(1);
    }

    // getters
    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(3, 4);

// using setters we can update the values
rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);

console.log(rectangle.area);


// ex.2
class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // setters 
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a none-empty string");
        }
    }

    // setters 
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a none-empty string");
        }
    }

    // setters 
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a none-negetive number");
        }
    }

    // getters
    get firstName(){
        return this._firstName
    }

    // getters
    get lastName(){
        return this._lastName
    }

    // getters
    get firstName(){
        return this._firstName
    }

    // getters
    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    // getters
    get age(){
        return this._age;
    }

}

const person = new Person("Spongebob", "Squarepants", 30);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);