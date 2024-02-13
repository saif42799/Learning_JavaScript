// super = keyword is used in classes to call the constructor or 
//         access the properties and methods of a percent (superclass)
//         this = this object
//         super = the parent 

// parent class (superclass)
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a spped of ${speed}mph`);
    }

}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        // before we can use the this key word we need to call the constructor of the parent 
        super(name, age);
        this.runSpeed = runSpeed;
        
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
        
    }
    swim(){
        console.log(`This ${this.name} can run`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
        
    }
    fly(){
        console.log(`This ${this.name} can run`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();