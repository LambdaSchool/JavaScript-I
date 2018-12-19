// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F"
};

// Write your intern objects here:
function Intern(id, name, gender, email) {
  this.id = id;
  this.name = name;
  this.gender = gender;
  this.email = email;
}

const mitzi = new Intern(1, "Mitzi", "F", "mmelloy0@psu.edu");
let kennan = new Intern(2, "Kennan", "M", "kdiben1@tinypic.com");
const keven = new Intern(3, "Keven", "F", "kmummery2@wikimedia.org");
const gannie = new Intern(4, "Gannie", "M", "gmartinson3@illinois.edu");
const antonietta = new Intern(5, "Antonietta", "F", "adaine5@samsung.com");

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);

// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(keven.email);
// Gannie's name
console.log(gannie.name);
// Antonietta's Gender
console.log(antonietta.gender);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// kennan.prototype.speak = function() {
//   console.log("Hello, my name is Kennan!");
// };

// Intern.prototype = {
//   constructor: Intern,
//   speak: function() {
//     console.log("Hello, my name is " + this.name + "!");
//   }
// };

Intern.prototype.speak = function() {
  console.log("Hello, my name is " + this.name + "!");
};

console.log(kennan.speak());

// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

Intern.prototype.multiplyNums = function(a, b) {
  return a * b;
};

console.log(antonietta.multiplyNums(3, 4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// ** I INTERPRETED THIS EXERCISE AS DOING OBJECTS WITHOUT CONSTRUCTOR FUNCTIONS **

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  speak: function() {
    return "Hello!" + this.name;
  },
  child: {
    name: "George",
    age: 50,
    speak: function() {
      return "Hello!" + this.name;
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        return "Hello!" + this.name;
      }
    }
  }
};

// Log the parent object's name

console.log(parent.name);

// Log the child's age

console.log(parent.child.age);

// Log the name and age of the grandchild

console.log(parent.child.grandchild.name, parent.child.grandchild.age);

// Have the parent speak

parent.speak();
console.log(parent.speak());

// Have the child speak

parent.child.speak();
console.log(parent.child.speak());

// Have the grandchild speak

parent.child.grandchild.speak();
console.log(parent.child.grandchild.speak());
