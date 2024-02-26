// Promise = An Object that messages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PRENDING -> Resolved or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG 
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH 

// callback = is so the function can accept callbacks
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                // when finidhed successfully it resolves displaying message
                resolve("You walk the dog 🐕");
            }
            else{
                // when a asynchronous function fails to do something it is rejected
                reject("You didnt walk the dog!");
            }

            
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;

            if(kitchenCleaned){
                // when finidhed successfully it resolves displaying message
                resolve("You clean the kitchen 🧹");
            }
            else{
                // when a asynchronous function fails to do something it is rejected
                reject("You didnt clean the kitchen!");
            }


        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {            

            const trashTakenOut = false;

            if(trashTakenOut){
                // when finidhed successfully it resolves displaying message
                resolve("You take out the trash 🗑️");
            }
            else{
                // when a asynchronous function fails to do something it is rejected
                reject("You didnt take out the trash!");
            }

        }, 500);
    });
}

// method chaining
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.log(error));

// .catch is to catch any errors (similar to error handling)


