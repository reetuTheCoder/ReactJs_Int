// Sort Rule  in str
// Uppercase letters come before lowercase letters (A < a).
// numbers type number always comes before Uppercase
// number type str so it will come  before text

// const fruits = ['banana', 'apple', 'cherry', 'banana'];
// console.log(fruits.sort());
// const newFruits = ['Banana', 'apple', 'cherry', 'banana', "5", 1];
// console.log(newFruits.sort());
// const num = ["3", "10", "50", "20",]
// console.log(num.sort());

// if you str list is all start with lowercase the go like below
const fruits = ["banana", "apple", "cherry", "banana"];

console.log(fruits.sort()); // it will work perfect

const newfruits = ["Banana", "apple", "Cherry", "banana"];

// localeCompare() ignore uppercase/lowercase is just work in the ascending order
let output = newfruits.sort((a, b) => a.localeCompare(b));
console.log(output);

// if we want sort str as per length we can
const strLength = ["Banana", "appleaaaa", "Cherry", "banana"];
console.log(strLength.sort((a, b) => a.length - b.length));

let numb = [100, 10, 2, 4, 5, 8.5];

// let result = numb.sort((a,b)=> a -b)
// console.log(result);

let result = numb.sort((a, b) => b - a);
console.log(result); // Descending order

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
  { name: "alakh", age: 8 },
];

console.log(users.sort((a, b) => a.age - b.age));

// console.log(users.sort((a,b) => a.name.localeCompare(b.name)));

let username = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(username.reverse());

const products = [
  { name: "laptop", price: 2500, launchDate: "2025-01-01" },
  { name: "Mobile", price: 2000, launchDate: "2025-08-05" },
  { name: "Charger", price: 200, launchDate: "2025-08-25" },
  { name: "cable", price: 20, launchDate: "2024-04-03" },
];

console.log(products.sort((a, b) => a.price - b.price)); // price base
console.log(products.sort((a, b) => a.name.localeCompare(b.name))); // name base
console.log(
  products.sort((a, b) => new Date(a.launchDate) - new Date(b.launchDate))
); // YYYY base

products.sort((a, b) => {
  const dayA = parseInt(a.launchDate.split("-")[2]);
  const dayB = parseInt(b.launchDate.split("-")[2]);
  console.log(dayB, "dayBdayA", dayA);
  return dayA - dayB;
});
console.log("products",products); // DD base

products.sort((a, b) => {
  const dayA = parseInt(a.launchDate.split("-")[1]);
  const dayB = parseInt(b.launchDate.split("-")[1]);
  console.log(dayB, "dayBdayA", dayA);
  return dayA - dayB;
});
console.log("products",products); // MM base


