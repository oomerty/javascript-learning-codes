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

function greet(greetings) {
  return function(name) {
    console.log(`${greetings} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey(`Ömer`);
greeterHey(`Jonas`);
greet(`Hello`)(`Jonas`);

const greet2 = (greetings) => (name) => console.log(`${greetings} ${name}`);
greet2(`Sup`)(`Jonas`);