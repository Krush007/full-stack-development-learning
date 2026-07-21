// ================================
// ASYNC / AWAIT + FETCH API EXERCISES
// ================================

// --------------------------------
// Exercise 1: Basic Async Function
// --------------------------------

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function helloAsync() {
    await delay(1000);
    console.log("Hello after 1 second");
}

helloAsync();


// Output:
// Hello after 1 second



// --------------------------------
// Exercise 2: Multiple Awaits
// --------------------------------

async function sequenceDemo() {
    console.log("Start");

    await delay(1000);
    console.log("Step 1");

    await delay(1000);
    console.log("Step 2");

    await delay(1000);
    console.log("End");
}

sequenceDemo();


// Output:
// Start
// Step 1
// Step 2
// End



// --------------------------------
// Exercise 3: Fetch User Data
// --------------------------------

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log(data);
}

getUser();


// Output:
// User object



// --------------------------------
// Exercise 4: Fetch All Users
// --------------------------------

async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    users.forEach(user => {
        console.log(user.name);
    });
}

getUsers();


// Output:
// Leanne Graham
// Ervin Howell
// ...



// --------------------------------
// Exercise 5: Error Handling
// --------------------------------

async function getInvalidData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/invalid"
        );

        if (!response.ok) {
            throw new Error("Data not found");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getInvalidData();


// Output:
// Error: Data not found



// --------------------------------
// Exercise 6: Fetch Post by ID
// --------------------------------

async function getPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const post = await response.json();

    console.log(post.title);
}

getPost(1);


// Output:
// sunt aut facere ...



// --------------------------------
// Exercise 7: Fetch Comments
// --------------------------------

async function getComments() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=5"
    );

    const comments = await response.json();

    comments.forEach(comment => {
        console.log(comment.email);
    });
}

getComments();


// Output:
// email1
// email2
// ...



// --------------------------------
// Exercise 8: Parallel API Calls
// --------------------------------

async function getMultipleData() {
    const [userRes, postRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
    ]);

    const user = await userRes.json();
    const post = await postRes.json();

    console.log(user.name);
    console.log(post.title);
}

getMultipleData();


// Output:
// Leanne Graham
// sunt aut facere ...



// --------------------------------
// Exercise 9: Reusable Fetch Function
// --------------------------------

async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    return await response.json();
}

async function reusableDemo() {
    try {
        const data = await fetchData(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

reusableDemo();


// Output:
// Todo object



// --------------------------------
// Exercise 10: Real API Example
// --------------------------------

async function getCatFact() {
    const response = await fetch(
        "https://catfact.ninja/fact"
    );

    const data = await response.json();

    console.log("Cat Fact:", data.fact);
}

getCatFact();


// Output:
// Cat Fact: Cats sleep 70% of their lives.


