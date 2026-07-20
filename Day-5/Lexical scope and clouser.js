/*****************************************************************
 * CLOSURES & LEXICAL SCOPE - PRACTICE FILE
 *****************************************************************/

/***********************
 * 1. BASIC CLOSURE
 ***********************/
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


/***********************
 * 2. INDEPENDENT CLOSURES
 ***********************/
function makeCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
console.log(counter2()); // 2


/***********************
 * 3. LEXICAL SCOPE
 ***********************/
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // Outer


/***********************
 * 4. NESTED LEXICAL SCOPE
 ***********************/
const globalVar = "Global";

function first() {
  const firstVar = "First";

  function second() {
    const secondVar = "Second";

    console.log(globalVar);
    console.log(firstVar);
    console.log(secondVar);
  }

  second();
}

first();


/***********************
 * 5. CLOSURE WITH PARAMETERS
 ***********************/
function greeting(message) {
  return function (name) {
    console.log(`${message}, ${name}`);
  };
}

const sayHello = greeting("Hello");
const sayHi = greeting("Hi");

sayHello("Alice");
sayHi("Bob");


/***********************
 * 6. MULTIPLIER CLOSURE
 ***********************/
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


/***********************
 * 7. PRIVATE VARIABLES
 ***********************/
function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300


/***********************
 * 8. MODULE PATTERN
 ***********************/
const CounterModule = (function () {
  let count = 0;

  return {
    increment() {
      return ++count;
    },

    decrement() {
      return --count;
    },

    getCount() {
      return count;
    }
  };
})();

console.log(CounterModule.increment());
console.log(CounterModule.increment());
console.log(CounterModule.getCount());


/***********************
 * 9. LOOP CLOSURE ISSUE (var)
 ***********************/
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("var:", i);
  }, 100);
}

// Output:
// var: 4
// var: 4
// var: 4


/***********************
 * 10. LOOP CLOSURE FIX (let)
 ***********************/
for (let j = 1; j <= 3; j++) {
  setTimeout(() => {
    console.log("let:", j);
  }, 100);
}

// Output:
// let: 1
// let: 2
// let: 3


/***********************
 * 11. LOOP CLOSURE FIX USING IIFE
 ***********************/
for (var k = 1; k <= 3; k++) {
  (function (value) {
    setTimeout(() => {
      console.log("IIFE:", value);
    }, 100);
  })(k);
}


/***********************
 * 12. FUNCTION FACTORY
 ***********************/
function createPower(power) {
  return function (num) {
    return num ** power;
  };
}

const square = createPower(2);
const cube = createPower(3);

console.log(square(4)); // 16
console.log(cube(4));   // 64


/***********************
 * 13. DATA HIDING
 ***********************/
function createUser(username) {
  let password = "secret123";

  return {
    getUsername() {
      return username;
    },

    checkPassword(pass) {
      return pass === password;
    }
  };
}

const user = createUser("john");

console.log(user.getUsername());
console.log(user.checkPassword("secret123"));

// console.log(user.password);
// undefined


/***********************
 * 14. CURRYING USING CLOSURES
 ***********************/
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(10)(20)(30)); // 60


/***********************
 * 15. MEMOIZATION USING CLOSURE
 ***********************/
function memoize(fn) {
  const cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("From Cache");
      return cache[num];
    }

    console.log("Calculating...");
    const result = fn(num);
    cache[num] = result;

    return result;
  };
}

const squareMemo = memoize((n) => n * n);

console.log(squareMemo(5));
console.log(squareMemo(5));
console.log(squareMemo(10));
console.log(squareMemo(10));

