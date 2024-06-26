'use strict';

/////////////////////////
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

/* const jonas = new Person("Jonas", 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}
const matilda = new Person("Matilda", 2005);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2005}
console.log(jonas instanceof Person); // true

// PROTOTYPES
//console.log(Person.prototype); // calcAge: ƒ () // constructor: ƒ (firstName, birthYear)

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

const h1 = document.querySelector('h1')*/

Person.hey = function () {
  console.log(`Hey there 👋🏻`);
}

Person.hey();

/////////////////////////
// ES6 CLASSES
// ** class expression **
//const PersonCE = class {}

// ** class declration **
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const now = new Date().getFullYear();
    console.log(now - this.birthYear);
  }

  get age() {
    const now = new Date().getFullYear();
    return now - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if(name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there 👋🏻`);
  }
}
const walter = new PersonCL("Walter White", 2001)

const jessica = new PersonCL("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCL.prototype); // true

PersonCL.prototype.greet = function () {
  console.log(`Greetings ${this.fullName}!`);
}

jessica.greet();

const account = {
  owner: "Jonas",
  movements: [200, 100, 500, 150, 120],

  get latest() {
    return this.movements.slice(-1).pop()
  },
  
  set latest(mov) {
    this.movements.push(mov);
  }
}

console.log(account.latest);
account.latest = 70;
console.log(account.movements);

PersonCL.hey();

/////////////////////////
// OBJECT.CREATE
const PersonProto = {
  calcAge() {
    const now = new Date().getFullYear();
    console.log(now - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);
steven.init("Steven", 2002)
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979)
sarah.calcAge();

/////////////////////////
// INHERITANCE
const Student =  function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(PersonCL.prototype);

Student.prototype.intorduce = function () {
  console.log(`Hello my name is ${this.firstName} and I study ${this.course}.`);
}

const mike = new Student("Mike", 2001, "Computer Science");
console.log(mike);
mike.intorduce();
mike.calcAge();

Student.prototype.constructor = Student;

/////////////////////////
// Inheritance Between "Classes": ES6 Classes
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    //PersonCL.call(this, fullName, birthYear);
    super(fullName, birthYear); // Needs to happen first
    this.course = course;
  }

  intorduce() {
    console.log(`Hello my name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    const now = new Date().getFullYear();
    console.log(`I am ${now - this.birthYear} years old, but as a student I feel more like ${now - this.birthYear + 10}`);
  }
}

const martha = new StudentCL("Martha Jonas", 2002, "Computer Science");
martha.intorduce();
martha.calcAge();

/////////////////////////
// Inheritance Between "Classes": Object.create
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init(`Jay`, 2000, "Computer Science");
jay.calcAge();

/////////////////////////
// Another Class Example
// Encapsulation: Protected Properties and Methods
class Account {
  locale = navigator.language; // Public field
  #movements = []; // Private field
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //this._movements = []; // protected property
    //this.locale = navigator.language;

    console.log("Thanks for opening yout account!");
  }

  getMovements() {
    return this.#movements;
  }

  // Public Interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Private Methods
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if(this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved!");
    }
    return this;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

//console.log(acc1.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class

/////////////////////////
// Chaining
acc1.deposit(200).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);