// nested objects = Objects inside of Objects.
//                  Allows you to represent more complex data structures 
//                  Child Object is enclosed by a Parent Object 

//                  Person{Adress{}, ContactInfo{}}
//                  ShoppingCart{Keyword{}, Mouse{}, Monitor{}}


// object
const person = {
    fullName: "Spongebob SquarePants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfishing", "Cooking"],
    address: {
        street: "124 Conch St.", 
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(person.address.street);


// ex 2 

// class
class Person{
    // constructor         (...)rest parameters 
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
// class
class Address{
    // constructor 
    constructor(street, city, country){
        this.street = street; 
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Water");

const person2 = new Person("Patrick", 37, "128 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Water");

const person3 = new Person("Squidward", 30, "126 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Water");             
                                
console.log(person1.address);
console.log(person1.address.street);

console.log(person2.address);
console.log(person2.address.city);

console.log(person3.address);
console.log(person3.address.country);