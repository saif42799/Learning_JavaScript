// .checked =  is a property that determines the checked state of an 
//             HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtm = document.getElementById("visaBtm");
const masterBtm = document.getElementById("masterBtm");
const paypalBtm = document.getElementById("paypalBtm");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed.`;
    }

    if(visaBtm.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    }
    else if(masterBtm.checked){
        paymentResult.textContent = `You are paying with Master Card.`;
    }
    else if(paypalBtm.checked){
        paymentResult.textContent = `You are paying with Paypal.`
    }
    else{
        paymentResult.textContent = `You must select a payment type.`
    }

}

