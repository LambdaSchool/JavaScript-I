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
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

const Mitzi = {
  "id": 1,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": "F"
}

const Kennan = {
  "id": 2,
  "name": "Mitzi",
  "email": "kdiben1@tinypic.com",
  "gender": "M",
  "speak": () => {
    return `Hello, my name is Kennan!`;
  }
}
const Keven = {
  "id": 3,
  "name": "Keven",
  "email": "kmummery2@wikimedia.org",
  "gender": "M"
}
const Gannie = {
  "id": 4,
  "name": "Gannie",
  "email": "gmartinson3@illinois.edu",
  "gender": "M"
}
const Antonietta = {
  "id": 5,
  "name": "Antonietta",
  "email": "adaine5@samsung.com",
  "gender": "F",
  "multiplyNums": (num1, num2) => {
    return num1*num2;
  }
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Mitzi.name);
// Kennan's ID
console.log(Kennan.id);
// Keven's email
console.log(Keven.email);
// Gannie's name
console.log(Gannie.name);
// Antonietta's Gender
console.log(Antonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(Kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(Antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

function Speak(person) {
  console.log(`Hello, my name is ${person.name}!`);
}

const parent = {
  name: 'Susan',
  age: 70,
  speak: function() {
    Speak(this);
  },
  child: {
    name: 'George',
    age: 50,
    speak: function() {
      Speak(this);
    },
    grandchild: {
      name: 'Sam',
      age: 30,
      speak: function() {
        Speak(this);
      },
    }
  }
}

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(`${parent.child.grandchild.name} is ${parent.child.grandchild.age}`);
// Have the parent speak
Speak(parent);//parent.speak();
// Have the child speak
Speak(parent.child);//parent.child.speak();
// Have the grandchild speak
Speak(parent.child.grandchild);//parent.child.grandchild.speak();