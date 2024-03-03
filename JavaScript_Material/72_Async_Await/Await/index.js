// Asyn/Await = Async = makes a function return a promise 
//              Await = makes an async function wait for a promise

//              Allows you to write asychronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue


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

            const trashTakenOut = true;

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


// async = makes a function return a promise 
async function doChores(){

    try{
        // Await = makes an async function wait for a promise
        const walkDogResults = await walkDog();
        console.log(walkDogResults);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch(error){
        console.log(error);
    }
}

doChores();