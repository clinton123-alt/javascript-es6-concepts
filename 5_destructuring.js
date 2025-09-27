// Example of Destructuring

// Array Destructuring
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log(`X: ${x}, Y: ${y}, Z: ${z}`);

// Skipping elements
const colors = ['red', 'green', 'blue'];
const [primaryColor, , tertiaryColor] = colors;
console.log(`Primary: ${primaryColor}, Tertiary: ${tertiaryColor}`);

// Object Destructuring
const person = {
    name: 'Folake Adeleke',
    age: 30,
    city: 'Lagos',
    country: 'Nigeria'
};

const { name, age, city } = person;
console.log(`${name} is ${age} years old and lives in ${city}`);

// Renaming variables while destructuring
const { name: fullName, country: nationality } = person;
console.log(`Full name: ${fullName}, Nationality: ${nationality}`);

// Default values
const settings = {
    theme: 'dark',
    fontSize: 14
};

const { theme, fontSize, language = 'en' } = settings;
console.log(`Theme: ${theme}, Font Size: ${fontSize}, Language: ${language}`);

// Nested destructuring
const company = {
    details: {
        founded: 2000,
        location: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    employees: ['Chinua', 'Aisha', 'Tunde']
};

const { 
    details: { 
        founded,
        location: { city: companyCity, state }
    },
    employees: [firstEmployee]
} = company;

console.log(`Founded: ${founded}, Location: ${companyCity}, ${state}`);
console.log(`First Employee: ${firstEmployee}`);
