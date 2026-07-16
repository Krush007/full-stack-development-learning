/*
====================================================
ARRAY METHODS: FILTER, MAP, REDUCE - ALL VARIATIONS
====================================================
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 17, active: false },
  { id: 3, name: "Charlie", age: 30, active: true },
  { id: 4, name: "David", age: 22, active: false }
];

console.log("===== FILTER EXAMPLES =====");

// 1. Basic filter
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// 2. Odd numbers
const odds = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", odds);

// 3. Greater than
const greaterThan5 = numbers.filter(num => num > 5);
console.log("Greater Than 5:", greaterThan5);

// 4. Filter objects
const adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// 5. Filter active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);

// 6. Using index
const everySecond = numbers.filter((_, index) => index % 2 === 0);
console.log("Every Second Element:", everySecond);

// 7. Chained filter
const activeAdults = users
  .filter(user => user.active)
  .filter(user => user.age >= 18);

console.log("Active Adults:", activeAdults);



console.log("\n===== MAP EXAMPLES =====");

// 1. Double values
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. Square values
const squared = numbers.map(num => num ** 2);
console.log("Squared:", squared);

// 3. Convert to strings
const asStrings = numbers.map(num => `Number-${num}`);
console.log("Strings:", asStrings);

// 4. Extract property
const names = users.map(user => user.name);
console.log("Names:", names);

// 5. Create new objects
const userSummaries = users.map(user => ({
  id: user.id,
  label: `${user.name} (${user.age})`
}));
console.log("User Summaries:", userSummaries);

// 6. Using index
const indexed = numbers.map((num, index) => ({
  index,
  value: num
}));
console.log("Indexed:", indexed);

// 7. Transform objects
const updatedUsers = users.map(user => ({
  ...user,
  status: user.active ? "Active" : "Inactive"
}));
console.log("Updated Users:", updatedUsers);



console.log("\n===== REDUCE EXAMPLES =====");

// 1. Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 2. Product
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product);

// 3. Maximum
const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0]
);
console.log("Max:", max);

// 4. Minimum
const min = numbers.reduce(
  (acc, curr) => (curr < acc ? curr : acc),
  numbers[0]
);
console.log("Min:", min);

// 5. Count items
const count = numbers.reduce(acc => acc + 1, 0);
console.log("Count:", count);

// 6. Sum object property
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Total Age:", totalAge);

// 7. Group by property
const groupedByStatus = users.reduce((acc, user) => {
  const key = user.active ? "active" : "inactive";

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(user);
  return acc;
}, {});

console.log("Grouped:", groupedByStatus);

// 8. Build lookup object
const userLookup = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log("Lookup:", userLookup);

// 9. Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, curr) => {
  acc.push(...curr);
  return acc;
}, []);

console.log("Flattened:", flat);

// 10. Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit Count:", fruitCount);



console.log("\n===== COMBINING FILTER + MAP + REDUCE =====");

// Sum of squares of even numbers
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num ** 2)
  .reduce((sum, num) => sum + num, 0);

console.log("Sum of squares of evens:", result);

// Active users names
const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log("Active User Names:", activeNames);

// Average age of active users
const activeAgeAverage =
  users
    .filter(user => user.active)
    .reduce((sum, user) => sum + user.age, 0) /
  users.filter(user => user.active).length;

console.log("Average Active Age:", activeAgeAverage);



console.log("\n===== ADVANCED REDUCE REPLACEMENTS =====");

// map using reduce
const mapWithReduce = numbers.reduce((acc, num) => {
  acc.push(num * 10);
  return acc;
}, []);

console.log("Map with Reduce:", mapWithReduce);

// filter using reduce
const filterWithReduce = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num);
  }
  return acc;
}, []);

console.log("Filter with Reduce:", filterWithReduce);

// find using reduce
const firstAdult = users.reduce((acc, user) => {
  if (acc) return acc;
  return user.age >= 18 ? user : null;
}, null);

console.log("First Adult:", firstAdult);