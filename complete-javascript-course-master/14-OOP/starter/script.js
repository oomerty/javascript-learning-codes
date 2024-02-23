'use strict';

// CONSTRUCTOR FUNCTION
// 1. New empty object is created
// 2. Function is called, this = {}
// 3. {} is linked to a prototype
// 4. Function automatically returns {}
const Person = function (firstName, birthYear) {
  // console.log(this); // Person {}
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  /*this.calcAge = function () {
    console.log(2037 - birthYear);
  }*/
}

const jonas = new Person("Jonas", 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}
const matilda = new Person("Matilda", 2005);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2005}
console.log(jonas instanceof Person); // true

// PROTOTYPES
console.log(Person.prototype); // calcAge: ƒ () // constructor: ƒ (firstName, birthYear)

Person.prototype.calcAge = this.calcAge = function () {
  const now = new Date().getFullYear();
  console.log(now - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo Sapiens";

console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // false

console.log(jonas.__proto__); // {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [2, 3, 5, 6, 8, 11, 14];
console.log(arr.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Array.prototype.unique = function () {
  return [...new Set(this)];
}

console.log(arr.unique()); // (7) [2, 3, 5, 6, 8, 11, 14]

const h1 = document.querySelector('h1')