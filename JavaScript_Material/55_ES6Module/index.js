// ES6 = An external file that contains reusable code 
//       that can be imported into other JavaScript files 
//       Write reusable code for many different apps. 
//       Can contain variables, classes functions... and more
//       Introduced as part of ECMAScript 2015 update 


// {} = object destructuring
// we are importing all variables and functions we need to use from mathUtil.js file
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);


