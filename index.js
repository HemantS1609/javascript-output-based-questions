// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 1: var
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("b", b); // Output: b undefined
var b;
console.log("b", b); // Output: b undefined

// Why?
// var b is hoisted and initialized with undefined.
// So accessing it before declaration does not throw an error.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 2: let
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("a", a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a;
console.log("a", a); // Output: undefined

// Why?
// let is hoisted but NOT initialized.
// The time between hoisting and declaration is called the "Temporal Dead Zone" (TDZ).
// Accessing the variable during TDZ causes ReferenceError.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 3: const
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("c", c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 1;
console.log("c", c); // Output: 1

// Why?
// const is also hoisted but NOT initialized (same TDZ as let).
// Additionally, const must be assigned a value at the time of declaration.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 4: Block Scope with let
// --------------------------------------------------------------------------------------------------------------------------------------------

let x = 10;
{
  let x = 20;
  console.log("Inside block:", x); // Output: 20
}
console.log("Outside block:", x); // Output: 10

// Why?
// let creates block-scoped variables.
// Same variable name can exist in different blocks without conflict.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 5: var ignores block scope
// --------------------------------------------------------------------------------------------------------------------------------------------

var y = 10;
{
  var y = 20;
  console.log("Inside block:", y); // Output: 20
}
console.log("Outside block:", y); // Output: 20

// Why?
// var is NOT block-scoped. It is function/global scoped.
// So redeclaring var inside block overrides outer value.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 6: Function Hoisting
// --------------------------------------------------------------------------------------------------------------------------------------------

greet(); // Output: Hello
function greet() {
  console.log("Hello");
}

// Why?
// Function declarations are fully hoisted with their definition.
// So they can be called before the function is written in code.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 7: Function Expression with var
// --------------------------------------------------------------------------------------------------------------------------------------------

speak(); // ❌ TypeError: speak is not a function
console.log("Error:", err.message);
var speak = function () {
  console.log("Hi");
};

// Why?
// var speak is hoisted as undefined.
// So speak() means undefined(), causing TypeError.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 8: String Concatenation with Numbers
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(1 + "2" + 3); // Output: 123

// Why? (Explanation)
// "2" is a string → so 1 becomes "1" and concatenates → "12"
// Then "12" + 3 → "123" (string concatenation)

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 9: Number addition + String concatenation
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(1 + 2 + "3"); // Output: 33

// Why? (Explanation)
// 1 + 2 = 3 (number)
// Then 3 + "3" → "33" (string concatenation happens)

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 10: Undefined variable value
// --------------------------------------------------------------------------------------------------------------------------------------------

let p;
console.log(p); // Output: undefined

// Why? (Explanation)
// Variable declared but not assigned → JavaScript gives default value "undefined"

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 11: String to Number conversion using subtraction
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("5" - 2); // Output: 3

// Why? (Explanation)
// "-" operator forces type conversion to number
// "5" → 5 → 5 - 2 = 3

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 12: String concatenation using +
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("5" + 2); // Output: 52

// Why? (Explanation)
// "+" operator performs string concatenation if one operand is a string
// So "5" + 2 → "5" + "2" → "52"

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 13: == vs ===
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(0 == false); // Output: true
console.log(0 === false); // Output: false

// Why? (Explanation)
// == compares only values → type conversion happens → 0 becomes false → true
// === compares value + type → number vs boolean → false

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 14: Reference Type Behavior in Arrays
// --------------------------------------------------------------------------------------------------------------------------------------------

let d = [1, 2, 3];
let e = d;
e.push(4);
console.log(d); // Output: [1, 2, 3, 4]

// Why? (Explanation)
// Arrays are stored by reference, not value
// d and e point to the same memory → modifying e affects d

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 15: typeof null
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof null); // Output: "object"

// Why? (Explanation)
// This is a well-known JavaScript bug from the early days.
// null is not an object, but typeof returns "object"

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 16: Array comparison
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log([] == []); // Output: false

// Why? (Explanation)
// Arrays are reference types
// Two different arrays → two different memory locations → not equal

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 17: Array + Array conversion to string
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log([1, 2] + [3, 4]); // Output: "1,23,4"

// Why? (Explanation)
// Arrays convert to strings when using "+" operator
// [1,2] → "1,2"
// [3,4] → "3,4"
// Concatenation → "1,23,4"

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 18: Pre-increment vs Post-increment
// --------------------------------------------------------------------------------------------------------------------------------------------

let h = 5;
console.log(h++); // Output: 5
console.log(++h); // Output: 7

// Why? (Explanation)
// h++ returns old value then increments
// ++h increments first then returns new value

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 19: Object Reference Copy
// --------------------------------------------------------------------------------------------------------------------------------------------

let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name); // Output: "Doe"

// Why? (Explanation)
// Objects are reference types,
// so obj1 and obj2 refer to the same memory location.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 20: Comparing Objects
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log({} == {}); // Output: false
// console.log({} === {}); // Output: false

// Why? (Explanation)
// Each object is stored at a new memory location,
// hence references are not equal.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 21: parseInt vs Number
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(parseInt("10abc")); // Output: 10
console.log(Number("10abc")); // Output: NaN

// Why? (Explanation)
// parseInt reads until invalid character → returns 10
// Number requires full valid number → returns NaN

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 22: for...in vs for...of
// --------------------------------------------------------------------------------------------------------------------------------------------

let arr = [10, 20, 30];

for (let i in arr) console.log(i); // Output: 0 1 2
for (let i of arr) console.log(i); // Output: 10 20 30

// Why? (Explanation)
// for...in → returns index
// for...of → returns value

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 23: Closure & Lexical Scope
// --------------------------------------------------------------------------------------------------------------------------------------------

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn(); // Output: 1
fn(); // Output: 2

// Why? (Explanation)
// inner() remembers the `count` variable due to closure.
// Even after outer() finishes, `count` is preserved in memory.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 24: setTimeout + Loop (var vs let)
// --------------------------------------------------------------------------------------------------------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output: 4 4 4

// Why? (Explanation)
// var is function-scoped → final value of i is 4 when callbacks run.
// So all logs print 4.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 25: setTimeout + Loop with let
// --------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output: 1 2 3

// Why? (Explanation)
// let is block-scoped → each iteration creates a new `i`,
// so logs print values individually.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 26: IIFE + Hoisting Trick
// --------------------------------------------------------------------------------------------------------------------------------------------

var f = 10;
(function () {
  console.log(f); // Output: undefined
  var f = 20;
})();

// Why? (Explanation)
// Inner var f shadows outer f.
// var is hoisted but initialized as undefined inside function scope.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 27: Object Key Coercion
// --------------------------------------------------------------------------------------------------------------------------------------------

const obj = {};
obj[true] = "A";
obj[1] = "B";
console.log(obj[true]); // Output: "A"

// Why? (Explanation)
// Object keys are converted to strings.
// true becomes "true"
// 1 becomes "1"
// "true" and "1" are different keys, so no overwrite happens.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 28: typeof NaN
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof NaN); // Output: "number"

// Why? (Explanation)
// NaN stands for "Not a Number" but is actually of type number (language design quirk).

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 29: Destructuring Pitfall
// --------------------------------------------------------------------------------------------------------------------------------------------

let myArr = [1, 2, 3];
const [f, , g] = myArr;
console.log(f, g); // Output: 1 3

// Why? (Explanation)
// Second element is skipped because of empty slot in destructuring.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 30: Promise Execution Order
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout

// Why? (Explanation)
// Microtask Queue (Promise) runs before Task Queue (setTimeout).

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 31: this in Arrow Function
// --------------------------------------------------------------------------------------------------------------------------------------------

const obj2 = {
  name: "A",
  getName: () => console.log(this.name),
};

obj2.getName(); // Output: undefined

// Why? (Explanation)
// Arrow functions do NOT have their own `this`,
// they take `this` from surrounding scope (global), not obj1.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 32: Spread & Mutation Confusion
// --------------------------------------------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3];
const ref = numbers;
const copy = [...numbers];
ref.push(4);
console.log(ref); // Output: [1, 2, 3, 4]
console.log(copy); // Output: [1, 2, 3]

// Why? (Explanation)
// ref is same reference → mutation affects original.
// copy is a new array → not affected.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 33: Callback Hell → Execution Order
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output:
// A
// D
// C
// B

// Why? (Explanation)
// "A" and "D" run first (synchronous).
// Promise (microtask) runs before setTimeout (task queue).

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 34: Closure Inside Loop (with var)
// --------------------------------------------------------------------------------------------------------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 500);
}

// Output: 4 4 4

// Why? (Explanation)
// var is function-scoped.
// When the timeout runs, loop is finished and i = 4.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 35: Closure Inside Loop (with let)
// --------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 500);
}

// Output: 1 2 3

// Why? (Explanation)
// let is block-scoped → each iteration preserves its own i.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 36: Promise + setTimeout Mixed
// --------------------------------------------------------------------------------------------------------------------------------------------

setTimeout(() => console.log("X"), 0);
Promise.resolve().then(() => console.log("Y"));
console.log("Z");

// Output:
// Z
// Y
// X

// Why? (Explanation)
// Job Queue (Microtasks) → Promise executes before Task Queue → Timeout.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 37: Function Returning Function (Closure)
// --------------------------------------------------------------------------------------------------------------------------------------------

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
c1(); // Output: 1
c1(); // Output: 2

// Why? (Explanation)
// Function retains its lexical scope even after parent execution (closure).

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 38: this in Arrow vs Normal Function
// --------------------------------------------------------------------------------------------------------------------------------------------

const user = {
  name: "Alice",
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

user.normal(); // Output: Alice
user.arrow(); // Output: undefined

// Why? (Explanation)
// arrow() takes `this` from global scope, not `user`.

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 39: typeof Trick
// --------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof typeof 5);

// Output: "string"

// Why? (Explanation)
// typeof 5 → "number"
// typeof "number" → "string"

// --------------------------------------------------------------------------------------------------------------------------------------------
// Example 40: Promise Chain Return
// --------------------------------------------------------------------------------------------------------------------------------------------

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => x + 1)
  .then(console.log);

// Output: 3

// Why? (Explanation)
// Each .then receives the returned value of previous .then.
