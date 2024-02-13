// in our moduale we can write reusable code for other programs 

// we can reuse these varibales and functions for any JavaScript programs we have
// we can import them but in order to do that we need to prefix eveerything thing  
// with the key word 'export' so we can import it elese where 


export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius * radius;
}

