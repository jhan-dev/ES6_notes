//============================================
// Not using let
var topic = "JavaScript";

if (topic) {
  var topic = "ECMAScript";
  console.log("block", topic);
}

console.log("global", topic);

// topic is global and not scoped
// Output1:
//   block ECMAScript
//   global ECMAScript

//=============================================
// Using let
var topic = "JavaScript";

if (topic) {
  var topic = "ECMAScript";
  console.log("block", topic);
}

console.log("global", topic);

// topic is block scope with let
// Output2:
//   block ECMAScript
//   global JavaScript

//==============================================
// Not using Const

var pizza = true;
pizza = false;
console.log(pizza);

// May not be an issue in this example but in more complex lines of code (100s-1000s) may be a problem.
// Output1:
//  false

//==============================================
// Using Const

const pizza = true;
pizza = false;
console.log(pizza);

// Errors out and prevents reassignment of variable whether intentional or accidental. Provides an extra layer of security.
// Output2:
//  Uncaught TypeError: ...Assignment to constant variable.

//===============================================
// Not using Template strings

function print(firstName){
  console.log("Hello", firstName);
}

print("Isabelle");
// Output1:
// Hello Isabelle

//================================================
// Using Template strings

function print(firstName){
  console.log(`Hello ${firstName}`);
}

print("Isabelle");

// Output2:
// Hello Isabelle

//================================================
// Searching Strings

const planet = "Earth";

//startsWith() & endsWith() are case sensitive!

console.log(planet.startsWith("Ear"));
// Output: true

console.log(planet.startsWith("th"));
// Output: false

console.log(planet.startsWith("ear"));
// Output: false

console.log(planet.endsWith("th"));
// Output: true

console.log(planet.endsWith("s"));
// Output: false

console.log(planet.includes("h"));
// Output: true

console.log(planet.includes("Earth1"));
//  Output: false

console.log(planet.includes("art"));
//  Output: true

// search() will give you location of match! 

console.log(planet.search("art"));
//  Output: 1


