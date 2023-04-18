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

// startsWith() & endsWith() are case sensitive!

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
// Output: false

console.log(planet.includes("art"));
// Output: true

// search() will give you location of match! 

console.log(planet.search("art"));
// Output: 1

//===============================================
// Symbols are a new primitive data type (Used for unique IDs). 
// Does not conflict with Object string keys.
// Using Symbol prevents a naming conflict with an object.

const id = Symbol();

const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course"
};

courseInfo[id] = 41284;
console.log(courseInfo);
// Output: {title: "JavaScript", topics: Array(3), id: "js-course", Symbol(): 41294}

console.log(courseInfo[id]);
// Output: 41284

//===============================================
// Maps hold key:value pairs.

let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course);
// Output: Map(2) {"react" => {...}, "jest" => {...}}

console.log(course.react);
// Output: undefined

console.log(course.get.react);
// Output: {description: "ui"}

// Maps and objects are different from each other.
// Maps can be accessed with .get, while dot notation is used for objects.

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]]
]);

console.log(details.size);
// Output: 3

details.forEach(function(item){
  console.log(item);
  // Output: today
  //         {javascript: Array(3)}
  //         (2) [1, 2]
});

// Unlike objects, maps iterate by insertion order they were added.

//===============================================
// Sets are a collection of values that can be of any type, as long as every entry is unique.

let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace");

console.log(books);
// Output: Set(2) {"Pride and Prejudice", "War and Peace"}...

console.log(books.size);
// Output: 2

console.log("has Oliver Twist", books.has("Oliver Twist"));
// Output: has Oliver Twist false

books.add("Oliver Twist");

console.log("has Oliver Twist", books.has("Oliver Twist"));
// Output: has Oliver Twist true

books.delete("Oliver Twist");

// Will always display unique sets, no duplicates even with reentry of same data.
books.add("War and Peace");

console.log(books)
// Output: Set(2) {"Pride and Prejudice", "War and Peace"}...

// .map() does not work on sets. Must use forEach to iterate.
books.map(function (item){
  console.log(item);
  // Output: Uncaught TypeError:
  // books.map is not a function...
});

books.forEach(function (item){
  console.log(item);
  // Output: Pride and Prejudice
  //         War and Peace
  //         has Oliver Twist false
});

//================================================
// Spread Operator turns elements of an Array into arguments of an function call
// or elements into an Array literal.
// Duplicate entries will log, does not have to be unique.

let cats = ["Biscuit", "Muffin"];
let dogs = ["Meatloaf", "Bacon"];

let animals = ["Albert", "Gilbert", "Winston", cats, dogs];

console.log(animals);
// Output: ["Albert", "Gilbert", "Winston", Array(2), Array(2)]

let spreadAnimals = ["Albert", "Gilbert", "Winston", ...cats, ...dogs];

console.log(spreadAnimals);
// Output: ["Albert", "Gilbert", "Winston", "Biscuit", "Muffin", "Meatloaf", "Bacon"]

//=================================================
// Destructuring allows users to extract data from arrays and objects and assign them
// to variables.

let cities = ["New York City", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle"];

console.log(cities[0]);
// Output: New York City

let [first, second, last] = ["New York City", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle"];

console.log(first);
// Output: New York City

console.log(second);
// Output: Los Angeles

console.log(last);
// Output: Chicago
// Destructuring parameters go by placement of Array.

// To skip placements use "commas" , to take the place of parameters until targeted value is selected.
let [firstCity, secondCity, , , , lastCity] = ["New York City", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle"];

console.log(lastCity);
// Output: Seattle

//===================================================
// .includes() can be used with Arrays not just Strings.

let crayons = ["Red", "Green", "Orange", "Blue", "Yellow"];

console.log(crayons.includes("Green"));
// Output: true

console.log(crayons.includes("Purple"));
// Output: false

// .includes() was implemented into ES6+. Used to be added with a 3rd-party
// to handle this type of functionality prior to ES6.

//=====================================================
// 

