// static = keyword that defines properties or methods that belong 
//          to class itself rather than the objects created 
//          from that class (class owns anything static, not the objects)

class MathUtil{
    // static property 
    static PI = 3.14159; // anything static belong to its class and nothing else

    // static method
    static getDiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }

}



// you dont have to ceate an object to access the property, shown below in comments 
// const MathUtil = new MathUtil();
// MathUtil.PI();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));


// ex. 2

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    // static Method
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    // methoid
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
user1.sayHello();
console.log(user2.username);
user2.sayHello();
console.log(user3.username);
user3.sayHello();

User.getUserCount();

console.log(User.userCount);




