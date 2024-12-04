// Q1:- Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
// Answer

// Overview

// In JavaScript, the way you declare variables (let, const, and var) affects their scope and behavior. Each has its use case and scoping rules.

// This document explains the differences in scope between let, const, and var using a simple function.

// function scopeDemo() {
//     if (true) {
//         var varVariable = "I am a var variable";  // Function-scoped
//         let letVariable = "I am a let variable";  // Block-scoped
//         const constVariable = "I am a const variable";  // Block-scoped
//     }

//     console.log(varVariable);  // Accessible (function-scoped)
//     // console.log(letVariable);  // Error: letVariable is not defined
//     // console.log(constVariable);  // Error: constVariable is not defined
// }

// scopeDemo();
// Scope Differences
// 1. var (Function Scope)

// Scope: Variables declared with var are scoped to the function in which they are declared, not the block.
// Hoisting: They are hoisted to the top of the function (initialized with undefined).
// Re-declaration: Allowed within the same scope. Example: In the above code, varVariable is accessible outside the if block because it is function-scoped.
// 2. let (Block Scope)

// Scope: Variables declared with let are scoped to the block (e.g., inside an if, for loop).
// Hoisting: They are hoisted but not initialized (cannot be accessed before declaration).
// Re-declaration: Not allowed within the same block scope. Example: letVariable is only available within the if block. Trying to access it outside results in an error.
// 3. const (Block Scope and Immutable)

// Scope: Same block scope behavior as let. Hoisting: Similar to let, const is hoisted but not initialized.
// Immutability: The value assigned to a const variable cannot be re-assigned.
// Re-declaration: Not allowed within the same block scope. Example: constVariable is block-scoped, just like letVariable. Attempting to access it outside the if block results in an error.
// Q2 Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
// Answer 

// // Array of fruits
// const fruits = ["Apple", "Banana", "Cherry", "Mango", "Pineapple"];

// // Function to return the second fruit
// function getSecondFruit() {
//     return fruits[1]; 
// }

// // Calling the function
// console.log(getSecondFruit());  // Output: Banana
// Q3 Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
// Answer

// // Function to add and remove an element from an array
// function modifyArray(arr) {
//     arr.push("New Element");  // Adds a new element to the end of the array
//     arr.pop();  // Removes the last element from the array
//     return arr;  // Returns the modified array
// }

// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(modifyArray(fruits));  // Output: ["Apple", "Banana", "Cherry"]
// Q4 Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
// Answer

// // Array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Function to return a new array with squared numbers
// function squareNumbers(arr) {
//     return arr.map(num => num * num);  // Squares each number using map()
// }

// console.log(squareNumbers(numbers));  // Output: [1, 4, 9, 16, 25]
// Q5 Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
// Answer

// // Array of numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Function to filter out even numbers and return only odd numbers
// function filterOddNumbers(arr) {
//     return arr.filter(num => num % 2 !== 0);  // Keep only odd numbers
// }

// console.log(filterOddNumbers(numbers));  // Output: [1, 3, 5, 7, 9]
// Q6 Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
// Answer

// const person = {
//     name: "Akshay Saini",
//     age: 21,
//     occupation: "Software Engineer"
// };

// // Function to log a greeting message using person properties
// function greetPerson(person) {
//     console.log(
//         `Hello, my name is ${person.name}. I am ${person.age} years old, and I work as a ${person.occupation}.`
//     );
// }

// greetPerson(person);  
// // Output: Hello, my name is Akshay Saini. I am 21 years old, and I work as a Software Engineer.
// Q7 Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
// Answer

// const rectangle = { 
//     width: 10,
//     height: 5 
// };

// // Function to calculate the area of a rectangle
// function getRectangleArea(rectangle) {
//     return rectangle.width * rectangle.height;
// }

// console.log(getRectangleArea(rectangle));  // Output: 50
// Q8 Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
// Answer

// // Function to return an array of keys from an object
// function getObjectKeys(obj) {
//     return Object.keys(obj);
// }

// // Example usage
// const person = {
//     name: "Akshay",
//     age: 21,
//     occupation: "Engineer",
//     country: "India"
// };

// console.log(getObjectKeys(person));  
// // Output: ["name", "age", "occupation", "country"]
// Q9 Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
// Answer

// // Function to merge two objects into one
// function mergeObjects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }

// // Example usage
// const personInfo = { name: "Alice", age: 25 };
// const jobInfo = { occupation: "Engineer", country: "USA" };

// const mergedObject = mergeObjects(personInfo, jobInfo);
// console.log(mergedObject);  
// // Output: { name: "Alice", age: 25, occupation: "Engineer", country: "USA" }
// Q10 Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
// Answer

// // Array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Function to calculate the sum using reduce()
// function sumArray(arr) {
//     return arr.reduce((accumulator, current) => accumulator + current, 0);
// }

// console.log(sumArray(numbers));  // Output: 15