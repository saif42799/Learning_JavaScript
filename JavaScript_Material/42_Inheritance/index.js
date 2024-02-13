// inheritance = allow a new class to inherit properites and methods 
//               from an existing class (parent -> child)
//               helps with code reusability

// parent class
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

// child class (inherites properties from parent class)
class Rabbit extends Animal {
    name = "rabbit";
    // childeren classes can have their own unnique properties and methods
    // method
    run(){
        console.log(`This ${this.name} is running`);
    }

}
// child class
class Fish extends Animal {
    name = "fish";
    // method
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
    
}
// child class
class Hawk extends Animal {
    name = "hawk";
    // method
    fly(){
        console.log(`This ${this.name} is flying`);
    }
    
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
