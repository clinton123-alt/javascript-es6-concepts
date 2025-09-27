// Example of Ternary Operators

// Basic ternary operator
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote? ${canVote}`);

// Nested ternary operators
const score = 85;
const grade = score >= 90 ? "A" 
            : score >= 80 ? "B"
            : score >= 70 ? "C"
            : score >= 60 ? "D"
            : "F";
console.log(`Score: ${score}, Grade: ${grade}`);

// Ternary with template literals
const name = "Kayode";
const greeting = name ? `Hello, ${name}!` : "Hello, guest!";
console.log(greeting);

// Ternary for default values
const userInput = "";
const displayName = userInput ? userInput : "Anonymous";
console.log(`User: ${displayName}`);

// Ternary in object properties
const user = {
    name: "Zainab",
    role: "admin"
};

const message = user.role === "admin" 
    ? "Welcome to the admin panel" 
    : "Welcome to the user dashboard";
console.log(message);

// Ternary with function calls
const getDiscount = (isPremium) => isPremium ? "20%" : "10%";
console.log(`Regular customer discount: ${getDiscount(false)}`);
console.log(`Premium customer discount: ${getDiscount(true)}`);
