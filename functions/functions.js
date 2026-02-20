// 1. Basic function syntax
function sayHello(name) {
   return `Hello ${name}!`;
}

console.log(sayHello("Alice"));

// 2. Function Expression
const add = function (a, b) {
   return a + b;
};

console.log(add(3, 5)); // 8

// 3. Arrow function
const multiply = (a, b) => a * b; // υποννοειται το return
console.log(multiply(4, 6)); // 24

// 4. Optional params
function sayHi(name) {
   if (!name) {
      name = "Guest";
   }
   console.log(`Hi ${name}`);
}

sayHi(); // hi Guest

// 5. Default params, Overloading
function sayHi2(name = "Guest") {
   console.log(`Hi ${name}`);
}

sayHi2(); // Hi Guest

function addUser(name = "Anonymous", age = 18, isAdmin = false) {
   return { name, age, isAdmin };
}

// 6. Rest parameters
function max(...numbers) {
   return Math.max(...numbers);
}

console.log(max(1, 2, 3, 9, 6, 5, 4, 8, 7, 0)); // 9
