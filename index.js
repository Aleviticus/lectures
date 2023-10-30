// Deliverables

// JavaScript Fundamentals and Data Structures Workshop

// Workshop Introduction:
// In this workshop, we'll cover JavaScript fundamentals and data structures to help you build a strong foundation.
// Let's get started!

// Variables and Data Types

// 1. Declare a variable 'age' and assign your age to it.
let age = 26

console.log(age);
// 2. Declare a constant 'name' and assign your name to it.
const name = 'Aaron';
// 3. Declare a variable 'isStudent' and assign a boolean value to it.
const isStudent = true;
// 4. Declare a variable 'score' and assign a numeric value to it.
const score = 4;
// 5. Declare an array 'fruits' and add a few different fruit names to it.
const fruits =["bannana", "mango", "orange"]
// 6. Declare an object 'person' with properties 'name' and 'age'.

// Console Output

// 7. Use 'console.log' to display a welcome message to the console.

// Math Operations
// +, -, *, /
// 10 % 3 = 1
// 10 ** 2

// 8. Perform addition and multiplication operations on two numbers and store the results in variables.

let num1 = 14
let num2 = 15 

let product = num1 * num2;
let sum = num1 + num2;
let average = product / 2;

// Strings

// 9. Create a string variable 'greeting'
let greeting = "Welcome to Flatiron School!";

// 10. Use string interpolation to create a message by combining 'greeting' and 'name'.
console.log(`${name}, ${greeting}`);
console.log(name + "," + greeting);
console.log(`Hello ${name}, your score is ${score}`);


// Conditional Statements

// 11. Write an 'if' statement to check if your age is greater than or equal to 18.


// 12. Use 'if-else' to display different messages based on isStudent value.
// a. If isStudent is true, display 'Welcome to Flatiron!'
if (isStudent == true) {
    console.log("Welcome to Flatiron!");
} else {
    console.log("Welcome");
}
isStudent == true ? console.log("Welcome to Flatiron!") : console.log
// b. If isStudent is false, display 'Welcome!'

// Switch Statements
switch(score) {
    case 3: {
        console.log("You have the minimum required GPA!");
        break;
    }
    case 4: {
        console.log("You are outstanding!");
        break;
    }
}

// Use a switch statement to display different messages based on the value of 'score'.


// Ternary Operator

// Use a ternary operator to display different messages based on the value of 'score'.
score ? (score == true) : 
// Loops

// 13. Use a 'for' loop to print numbers from 1 to 5.

// 14. Use a 'while' loop to print numbers from 1 to 5.

// Arrays

// 15. Declare an array 'colors' with a few color names.
let colors = ["red", "blue"]
// Loop through the 'colors' array and print each color to the console.

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// Loop through the 'colors' array and print the index of each color to the console.

// ! difference between 'for', 'for...of', and 'for...in' loops

// 16. Add a new color to the 'colors' array.
colors.push ("yellow");
console.log(colors[colors.length - 1]);

// 17. Access the first and last color in the array.

// access the color at a specific index.

// find the index of a color.
console.log(colors.indexof("white"));

// check if a color exists in the 'colors' array.
console.log(colors.includes("black"));
// remove the last color from the 'colors' array.
// remove the first color from the 'colors' array.
color.shift();