// Logical Operators = used to combine or manipulate boolen vales 
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

const temp = 200;

if(temp > 0 && temp <= 30){
    console.log("The weather is good");

}
else{
    console.log("The weather is bad");

}


if(temp <= 0 || temp > 30){
    console.log("The weather is bad");

}
else{
    console.log("The weather is good");

}


let isSunny = true;

if(!isSunny){
    console.log("It is Cloudy");
}
else{
    console.log("It is Sunny");
}