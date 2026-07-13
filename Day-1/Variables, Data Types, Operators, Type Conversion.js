// =========================
// VARIABLES
// =========================

let name = "Rahul";
const country = "India";
let age = 25;

console.log("Name:", name);
console.log("Country:", country);
console.log("Age:", age);

// Reassigning let
age = 26;
console.log("Updated Age:", age);

// =========================
// DATA TYPES
// =========================

// String
let firstName = "Rahul";

// Number
let marks = 95;

// Boolean
let isStudent = true;

// Undefined
let city;

// Null
let address = null;

// Object
let person = {
  name: "Rahul",
  age: 25
};

// Array
let fruits = ["Apple", "Banana", "Mango"];

console.log(typeof firstName); // string
console.log(typeof marks); // number
console.log(typeof isStudent); // boolean
console.log(typeof city); // undefined
console.log(typeof address); // object
console.log(typeof person); // object
console.log(typeof fruits); // object

// =========================
// OPERATORS
// =========================

let a = 10;
let b = 5;

// Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

// Comparison Operators
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

// Logical Operators
console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

// Assignment Operators
let score = 100;

score += 20;
console.log(score);

score -= 10;
console.log(score);

// Increment & Decrement
let count = 1;

count++;
console.log(count);

count--;
console.log(count);

// =========================
// TYPE CONVERSION
// =========================

// String to Number
let strNumber = "100";

let convertedNumber = Number(strNumber);

console.log(convertedNumber);
console.log(typeof convertedNumber);

// Number to String
let number = 500;

let convertedString = String(number);

console.log(convertedString);
console.log(typeof convertedString);

// Boolean Conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));

// parseInt
console.log(parseInt("123"));
console.log(parseInt("123.45"));
console.log(parseInt("100px"));

// parseFloat
console.log(parseFloat("123.45"));

// Type Coercion
console.log("10" + 5); // 105
console.log("10" - 5); // 5
console.log("10" * 2); // 20

console.log("JavaScript Basics Completed!");