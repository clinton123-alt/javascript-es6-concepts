// Example of Array Methods

// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map() - creates a new array by transforming each element
const squared = numbers.map(num => num * num);
console.log('Squared numbers:', squared);

// filter() - creates a new array with elements that pass the test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// reduce() - reduces array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);

// forEach() - executes a function for each array element
numbers.forEach(num => console.log(`Number: ${num}`));

// find() - returns the first element that passes the test
const firstEven = numbers.find(num => num % 2 === 0);
console.log('First even number:', firstEven);

// some() - tests if at least one element passes the test
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even numbers:', hasEven);

// every() - tests if all elements pass the test
const allPositive = numbers.every(num => num > 0);
console.log('All numbers positive:', allPositive);

// Array of objects example
const students = [
    { name: 'Ademola', grade: 85 },
    { name: 'Ngozi', grade: 92 },
    { name: 'Taiwo', grade: 78 }
];

// Using multiple array methods together
const highAchievers = students
    .filter(student => student.grade >= 90)
    .map(student => student.name);

console.log('High achieving students:', highAchievers);
