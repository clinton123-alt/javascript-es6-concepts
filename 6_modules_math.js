// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';

// Default export
export default class Calculator {
    constructor() {
        this.value = 0;
    }

    add(n) {
        this.value += n;
        return this;
    }

    subtract(n) {
        this.value -= n;
        return this;
    }

    getResult() {
        return this.value;
    }
}
