// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = param => param;


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => param1 + param2;
    console.log(add(1,2));
    

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(1,2));


// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => num * 3);
console.log(triple)