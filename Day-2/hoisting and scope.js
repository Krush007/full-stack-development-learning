// ==============================
// HOISTING + SCOPE IN ONE EXAMPLE
// ==============================

console.log("=== FUNCTION HOISTING ===");

// Function declaration is fully hoisted
greet();

function greet() {
    console.log("Hello! I am a hoisted function.");
}

console.log("\n=== VAR HOISTING ===");

// var is hoisted and initialized as undefined
console.log(myVar); // undefined
var myVar = 100;
console.log(myVar); // 100

console.log("\n=== LET/CONST HOISTING (TDZ) ===");

// Uncomment to see the error
// console.log(myLet); // ReferenceError

let myLet = 200;
const myConst = 300;

console.log(myLet);
console.log(myConst);

console.log("\n=== GLOBAL SCOPE ===");

let globalVariable = "I am Global";

console.log(globalVariable);

console.log("\n=== FUNCTION SCOPE ===");

function scopeDemo() {
    var functionScoped = "I am function scoped (var)";

    console.log(functionScoped);

    console.log("\n=== BLOCK SCOPE ===");

    if (true) {
        let blockScopedLet = "I am block scoped (let)";
        const blockScopedConst = "I am block scoped (const)";

        console.log(globalVariable);   // Global scope
        console.log(functionScoped);   // Function scope
        console.log(blockScopedLet);   // Block scope
        console.log(blockScopedConst); // Block scope

        console.log("\n=== LEXICAL SCOPE ===");

        function innerFunction() {
            console.log(globalVariable);   // From global scope
            console.log(functionScoped);   // From parent function
            console.log(blockScopedLet);   // From parent block
        }

        innerFunction();
    }

    // Uncomment to see errors
    // console.log(blockScopedLet);
    // console.log(blockScopedConst);
}

scopeDemo();

// Uncomment to see error
// console.log(functionScoped);

console.log("\n=== FUNCTION EXPRESSION HOISTING ===");

// Uncomment to see error
// sayHello();

var sayHello = function () {
    console.log("Hello from function expression");
};

sayHello();

console.log("\n=== PROGRAM ENDED ===");