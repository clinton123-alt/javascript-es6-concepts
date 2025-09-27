// Example of ES6 Classes

// Define a class representing a Student
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.enrollmentDate = new Date();
    }

    // Method to get student info
    getInfo() {
        return `${this.name} is ${this.age} years old and studies ${this.course}`;
    }

    // Static method that can be called without instantiating
    static isAdult(age) {
        return age >= 18;
    }
}

// Child class extending Student
class GraduateStudent extends Student {
    constructor(name, age, course, thesis) {
        super(name, age, course);
        this.thesis = thesis;
    }

    getInfo() {
        return `${super.getInfo()} and is working on ${this.thesis}`;
    }
}

// Create instances
const student1 = new Student("Oluwaseun Adebayo", 20, "Computer Science");
const gradStudent = new GraduateStudent("Chioma Okonkwo", 25, "AI", "Machine Learning Applications");

console.log(student1.getInfo());
console.log(gradStudent.getInfo());
console.log(`Is student an adult? ${Student.isAdult(student1.age)}`);
