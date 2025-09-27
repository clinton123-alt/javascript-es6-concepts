// Example of Arrow Functions

// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => a + b;

// Arrow function with implicit return
const square = x => x * x;

// Arrow function in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Arrow function with this binding
const counter = {
    count: 0,
    start: function() {
        // Arrow function preserves 'this' context
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};

// Using arrow functions with array methods
const people = [
    { name: 'Chidi', age: 25 },
    { name: 'Amina', age: 30 },
    { name: 'Babajide', age: 20 }
];

const names = people.map(person => person.name);
const adults = people.filter(person => person.age >= 21);

console.log(addArrow(5, 3));
console.log(square(4));
console.log(doubled);
console.log(names);
console.log(adults);
