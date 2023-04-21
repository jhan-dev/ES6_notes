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
// The object below has some repetitive lines of code. Using object literals
// can help cut down on some of that.

function skier(name, sound) {
  return {
    name: name,
    sound: sound,
    powderYell: function() {
      let yell = this.sound.toupperCase();
      console.log(`${yell}! ${yell}!`);
    }
  };
}

skier("Joseph", "woo").powderYell();

// We can get rid of the name and sound duplicate with the colon as below.
// This can be called Object Literal Enhancement.

function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function() {
      let yell = this.sound.toupperCase();
      console.log(`${yell}! ${yell}!`);
    }
  };
}

skier("Joseph", "woo").powderYell();

//=====================================================
// You can use the spread operator with Arrays.

const daytime = {
  breakfast: "Oatmeal",
  lunch: "Ham and cheese sandwich"
};

const nighttime = "Spaghetti and meatball";

const backpackingMeals = {
  daytime,
  nighttime
};

console.log(backpackingMeals);
// Output: {daytime: {...}, nighttime: "Spaghetti and meatball"}

const spreadOperatorPack = {
  ...daytime,
  nighttime
};

console.log(spreadOperatorPack);
// Output: {breakfast: "Oatmeal", lunch: "Ham and cheese sandwich", nighttime: Spaghetti and meatball"}

//======================================================
// Destructuring an Object

const sandwich = {
  title: "Reuben",
  price: 6.50,
  description: "Classic",
  ingredients: [
    "bread",
    "corned beef",
    "dressing",
    "sauerkraut",
    "cheese"
  ]
};

console.log(sandwich.title) // --> Reuben
console.log(sandwich.price) // --> 6.50

// Destructure the object by wrapping data parameters.
// Console.log the keys to get teh same result.

const { title, price } = {
  title: "Reuben",
  price: 6.50,
  description: "Classic",
  ingredients: [
    "bread",
    "corned beef",
    "dressing",
    "sauerkraut",
    "cheese"
  ]
};

console.log(title) // --> Reuben
console.log(price) // --> 6.50

// Example of passing destructuring object literal data.

const vacation = {
  destination: "Iceland",
  travelers: 2,
  activities: "Hiking",
  cost: 1500
};

function marketing({ destination, activity }) {
  return `Come to ${destination} and do some ${activity} to have a time of your life!`;
};

console.log(marketing(vacation)); // --> Come to Iceland and do some Hiking to have a time of your life!

//====================================================
// For of loop is a new iteration syntax that can replace for-in & for each.
// Iterable objects can be used such as arrays, strings, maps, and sets.

for(let letter of "JavaScript"){
  console.log(letter);
}
/*
  Output:
  J
  a
  v
  a
  S
  c
  r
  i
  p
  t
*/

let topics1 = ["JavaScript", "Node", "CSS"];

for(let topic of topics1){
  console.log(topic);
}
/*
  Output:
    JavaScript
    Node
    CSS
*/

let topics2 = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/javascript");

for(let topic of topics2){
  console.log(topic);
}
/*
Output:
  ["HTML", "/topic/html"]
  ["CSS", "/topic/css"]
  ["JavaScript", "/topic/javascript"]
*/

// Using the .keys() will display key from the map.

for(let topic of topics2.keys()){
  console.log(topic);
}

/*
  Output:
    HTML
    CSS
    JavaScript
*/

// Using the .values() will display key value from the map.

for(let topic of topics2.values()){
  console.log(topic);
}

/*
  Output:
    /topic/html
    /topic/css
    /topic/javascript
*/

// Using the .entries() will display the key value pairs from the map.

for(let topic of topics2.entries()){
  console.log(topic);
}

/*
  Output:
    ["HTML", "/topic/html"]
    ["CSS", "/topic/css"]
    ["JavaScript", "/topic/javascript"]
*/

//================================================================
//

