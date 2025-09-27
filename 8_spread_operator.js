// Example of Spread Operator

// Spread in Arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log('Combined array:', moreNumbers);

// Combining arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log('Combined arrays:', combined);

// Copying arrays
const original = ['a', 'b', 'c'];
const copy = [...original];
console.log('Copied array:', copy);

// Spread in Objects
const person = {
    name: 'Obinna',
    age: 30
};

const employee = {
    ...person,
    role: 'Developer',
    salary: 50000
};

console.log('Employee:', employee);

// Combining objects
const defaults = {
    theme: 'light',
    fontSize: 12
};

const userPreferences = {
    theme: 'dark'
};

const settings = {
    ...defaults,
    ...userPreferences
};

console.log('Settings:', settings);

// Spread in function arguments
const numbers2 = [1, 2, 3, 4, 5];

const sum = (...nums) => nums.reduce((total, num) => total + num, 0);
console.log('Sum:', sum(...numbers2));

// Spread with string
const str = 'Hello';
const chars = [...str];
console.log('Characters:', chars);
