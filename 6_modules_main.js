// main.js
import Calculator, { add, subtract, multiply, divide } from './6_modules_math.js';

// Using named imports
console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 4));  // 12
console.log(divide(15, 3));   // 5

// Using default import
const calc = new Calculator();
calc.add(10)
   .subtract(5)
   .add(3);

console.log(calc.getResult()); // 8
