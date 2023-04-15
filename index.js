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
