// Example of ES6 Variables (let, const)

// let - block scoped variable that can be reassigned
let age = 25;
age = 26; // This is valid
console.log(age);

// const - block scoped variable that cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // This would throw an error

// Block scope demonstration
{
    let blockScoped = "I'm only available inside this block";
    const BLOCK_CONSTANT = "I'm also block scoped";
    console.log(blockScoped);
    console.log(BLOCK_CONSTANT);
}
// console.log(blockScoped); // This would throw an error

// const with objects
const person = {
    name: "Olayinka",
    age: 30
};

// While we can't reassign person, we can modify its properties
person.age = 31; // This is valid
console.log(person);

// const with arrays
const numbers = [1, 2, 3];
numbers.push(4); // This is valid
console.log(numbers);

// Temporal Dead Zone demonstration
function temporalExample() {
    // console.log(tdz); // This would throw an error
    let tdz = "Temporal Dead Zone";
    console.log(tdz);
}

temporalExample();
