// ==============================
// JAVASCRIPT EVENT LOOP EXAMPLES
// ==============================


// --------------------------------
// Example 1: setTimeout
// --------------------------------

console.log("\n=== Example 1 ===");

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

/*
Output:
Start
End
Timeout
*/


// --------------------------------
// Example 2: Promise vs setTimeout
// --------------------------------

console.log("\n=== Example 2 ===");

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*
Output:
Start
End
Promise
Timeout
*/


// --------------------------------
// Example 3: Multiple Promises
// --------------------------------

console.log("\n=== Example 3 ===");

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");

/*
Output:
Start
End
Promise 1
Promise 2
*/


// --------------------------------
// Example 4: Promise Inside setTimeout
// --------------------------------

console.log("\n=== Example 4 ===");

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");

    Promise.resolve().then(() => {
        console.log("Promise Inside Timeout");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

console.log("End");

/*
Output:
Start
End
Promise 1
Timeout 1
Promise Inside Timeout
*/


// --------------------------------
// Example 5: Microtask Queue
// --------------------------------

console.log("\n=== Example 5 ===");

console.log("A");

Promise.resolve().then(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
});

console.log("D");

/*
Output:
A
D
B
C
*/


// --------------------------------
// Example 6: Async/Await
// --------------------------------

console.log("\n=== Example 6 ===");

async function demo1() {
    console.log("Async Start");

    await Promise.resolve();

    console.log("Async End");
}

console.log("1");

demo1();

console.log("2");

/*
Output:
1
Async Start
2
Async End
*/


// --------------------------------
// Example 7: Async + Promise
// --------------------------------

console.log("\n=== Example 7 ===");

async function demo2() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

demo2();

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");

/*
Output:
C
A
E
B
D
*/


// --------------------------------
// Example 8: Nested Microtasks
// --------------------------------

console.log("\n=== Example 8 ===");

console.log("1");

Promise.resolve().then(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

    console.log("4");
});

console.log("5");

/*
Output:
1
5
2
4
3
*/
