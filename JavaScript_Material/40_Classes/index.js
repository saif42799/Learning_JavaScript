// class = (ES6 feature) provides a more structured and cleaner way to 
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

// create class (class is reusable)
class Product{
    // create constructor 
    constructor(name, price){  // (parameters)
        this.name = name;
        this.price = price;
    }

    // function
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`)
    }

    // method 
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

// product objects 
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);


product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`)