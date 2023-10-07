'use strict';

/*const bookings = [];

function createBooking(
    flightNumber,
    numPassengers = 1,
    price = 199 * numPassengers,
  ) {
  // ES5 way
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);
// createBooking(`LH123`, 2);
// createBooking(`LH123`, 5);
// createBooking(`LH123`, undefined, 1000);

const flight = `LH124`;
const omer = {
  name: `Ömer Mert ERYİĞİT`,
  passport: 45518726213,
};

function checkIn(flightNumber, passenger) {
  flightNumber = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 45518726213) {
    console.log(`Check In`);
  } else {
    console.log(`Wrong passport!`);
  };
};
checkIn(flight, omer);
console.log(flight, omer);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(omer);
console.log(omer);
checkIn(flight, omer);

function oneWord(str) {
  return str.replace(/ /g, ``).toLowerCase();
};

function upperFirstWord(str) {
  const [first, ...other] = str.split(` `);
  return [first.toUpperCase(), ...other].join(` `);
};

//High Order Func
function transformer(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name} function.`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

function highFive() {
  console.log(`👋🏻`);
};
document.body.addEventListener('click', highFive);
[`Ömer`, `Göktan`, `Ümit`, `Kerem`].forEach(highFive);*/

// LESSON: Functions Returning Functions
/*function greet(greetings) {
  return function(name) {
    console.log(`${greetings} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey(`Ömer`);
greeterHey(`Jonas`);
greet(`Hello`)(`Jonas`);

const greet2 = (greetings) => (name) => console.log(`${greetings} ${name}`);
greet2(`Sup`)(`Jonas`);*/

// LESSON: Call, Apply and Bind Methods
/*const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode + flightNum}`);
    this.bookings.push({flight: `${this.iataCode+flightNum}`, name});
  },
};

lufthansa.book(486, `Jonas`);
console.log(lufthansa);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],

}

const book = lufthansa.book;

book.call(eurowings, 23, `Sarah Williams`);
book.call(lufthansa, 236, `John Doe`);

const flightData = [583, `George Cooper`];
book.apply(eurowings, flightData);
book.call(lufthansa, ...flightData);

const bookEW = book.bind(eurowings);
bookEW(23, `Steven Williams`);

const bookLH23 = book.bind(lufthansa, 23);
bookLH23(`Sarah Williams`);

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxNew = rate => value => value + value * rate;

console.log(addTaxNew(0.1)(200));
const addVATNew = addTaxNew(0.23);
console.log(addVATNew(100));*/

// LESSON: Immediately Invoked Function Expressions (IIFE)
/*(function () {
  console.log(`This will run once!`);
})();

(() => console.log(`This is will run once too!`))();*/

// LESSON: Closures
/*function secureBooking() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

//console.dir(booker);

let f;
function g() {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

function h() {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();

function boardPassengers(n, wait) {
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);*/