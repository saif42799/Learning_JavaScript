// arithmetic operators = operands (vales, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5

let students = 30;

students = students + 1;
students = students - 1;
students = students + 1;
students = students / 2;
students = students ** 2; // exponet operator
let extraStudents = students % 4; // moodule the remainder 

// augmented assignment operators 
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

// incrememts 
// students++;
// decrement 
// students--;

console.log(students);


/* 
    Operator precedence - order of solving a problem 
    1. parenthesis
    2. exponents
    3. multiplication and division and modulo
    4. addition and subtraction

*/
// ex.
let result = 1 + 2 * 3 + 4 ** 2;
//           1 + 2 * 3 +| 16 |
//           1 + | 6 | +| 16 |
//           | 7 | +| 16 |
//           23

console.log(result);


