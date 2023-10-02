'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    [weekdays[2]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  /* Enhanced Object Literals */
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = `20:00`,
  }) {
    console.log(
      `Order received! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your fire pizza with ${ing1}, ${ing2} and ${ing3}!`);
  },
};

// LESSON: Practice
/*const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const newFlights = flights.split(`+`);
for (const i of newFlights) {
  let displayedFlight = i.slice(1).split(`;`);
  displayedFlight[0] = displayedFlight[0].split(`_`).join(` `);
  console.log(`${displayedFlight[0] === `Delayed Departure` || displayedFlight[0] === `Delayed Arrival` ? `🔴` : ``} ${displayedFlight[0]} from ${displayedFlight[1].slice(0, 3).toUpperCase()} to ${displayedFlight[2].slice(0, 3).toUpperCase()} (${displayedFlight[3]})`.padStart(55));
}*/

// LESSON: Strings 3
/*console.log(`a+very+nice+string`.split(`+`));

const [firstName, lastName] = `Ömer Eryiğit`.split(` `);
console.log(`${firstName} ${lastName.toUpperCase()}`);
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName); 

function capitalizeName(name) {
  //lower case the name, split and select last item to capitilaze
  let newName = name.toLowerCase().split(` `);
  let correctName = [];
  for (const i of newName) {
    correctName += i != newName[Object.keys(newName).length - 1] ? i[0].toUpperCase() + i.slice(1) + ` ` : i.toUpperCase();
  }
  console.log(correctName);
};
capitalizeName(`jessica anN smith davis`);
capitalizeName(`ömer mert hamza eryiğit`)

// Padding
const message = `Go to gate 23!`;
console.log(message.padEnd(25, `!`));

function maskCC (number) {
  const str = number + ``;
  console.log(str.slice(-4).padStart(str.length, `*`));
};
maskCC(4553791573297626);

// Repeat
const repeatedMsg = `Bad Weather... All Departures Delayed... `;
console.log(repeatedMsg.repeat(3));

function planesInLine(n) {
  console.log(`The are ${n} planes waiting in line ${`✈️`.repeat(n)}`);
}
planesInLine(5);*/

// LESSON: Strings 2
/*const airline = `The Turkish Airlines`;
const plane = `A320`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passengerName = `jOnAs`;
const passengerNameLower = passengerName.toLowerCase();
const passengerNameCorrect = passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameCorrect);

// Email Comparison
const email = `jonas@hello.com`;
const loginEmail = `  jOnaS@heLlo.COm \n`
// const loginEmailLow = loginEmail.toLowerCase();
// const loginEmailTrim = loginEmailLow.trim();
const loginEmailCorrect = loginEmail.toLowerCase().trim();
console.log(email === loginEmailCorrect);

// Replacing
const priceTL = `1.146,62₺`;
let priceUStoTL = 27.39;
let priceTLnum = Number(priceTL.replace(`₺`, ``).replace(`.`, ``).replace(`,`, `.`));

const priceUS = priceTL.replace(`₺`, `$`);
let priceUSnum = `\$${(priceTLnum/priceUStoTL).toFixed(2)}`;

console.log(priceTL, priceUSnum);

const announcementNote = `All passengers come to the door 23. Boarding door 23!`;
console.log(announcementNote.replaceAll(`door`, `gate`));
console.log(announcementNote.replaceAll(/door/g, `gate`)); //Old method

// Booleans
const plane2 = `A320neo`;
console.log(plane2.includes(`A320`));
console.log(plane2.includes(`Boeing`));
console.log(airline.startsWith(`The`));
console.log(airline.slice(4).startsWith(`Turkish`));

// Practice
function checkBaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`gun`) || baggage.includes(`knife`)) {
    console.log(`You are NOT allowed on this flight.`);
  } else {
    console.log(`Welcome abord! ✈️`);
  }
}
checkBaggage(`I have a Laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);*/

// LESSON: Strings 1
/*const airline = `The Turkish Airlines`;
const plane = `A320`;

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Air`));

console.log(airline.slice(4)); //Remove 0,1,2,3 - It become substring
console.log(airline.slice(4,11));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

function checkMiddleSeat (seat) {
  //B and E are middle seats
  console.log(`Your seat is${seat.indexOf(`B`) === 2 || seat.indexOf(`E`) === 2 ? `` : ` not`} in the middle.`);
};
checkMiddleSeat(`11B`);*/

// LESSON: Maps: Iteration
/*const question = new Map ([
  [`question`, `What is the best programming langue in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Congrats 🎉`],
  [false, `Try again!`]
]);
console.log(question.get(`question`));
for (const [k,v] of question) {
  if (typeof(k) === `number`) console.log(`Answer ${k}: ${v}`);
}
const answer = Number(prompt(`You answer`, Number()));
console.log(question.get(answer === question.get(`correct`)));*/

// LESSON: Maps: Fundementals - like objects
/*const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
console.log(rest.set(2, `Lisbon, Portugal`));

rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open 😍`)
  .set(false, `We are closed 😔`);

console.log(rest.get(`name`));
console.log(rest.get(true));

let time = 22;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`) ? true : false));
rest.delete(2);
rest.set([1,2], `deneme`); //const arr = [1, 2]; cl(rest.get(arr));
rest.set(document.querySelector('h1'), `Heading`)
console.log(rest, rest.size);*/

// LESSON: Sets - like arrays
/*const orderSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has(`Pizza`));
console.log(orderSet.has(`Bread`));

orderSet.add(`Garlic Bread`);
orderSet.add(`Garlic Bread`);
console.log(orderSet);
orderSet.delete(`Risotto`);
console.log(orderSet);
// orderSet.clear(`Risotto`);
// console.log(orderSet);

// console.log(new Set(`Jonas`));
// console.log(new Set([`Jonas`]));

const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const staffUniqıe = [...new Set(staff)];
console.log(staff, staffUniqıe);*/

// LESSON: Looping Objects: Object Keys, Values, Entires
/*const properties = Object.keys(openingHours);

//Property Keys
let openStr = `We are open on ${properties.length} days: `;
for (const days of Object.keys(openingHours)) {
  openStr += `${days}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Property Entries = Key + Value
const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}
*/

// LESSON: Optional Chaining ?.
/*if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.sat) console.log(restaurant.openingHours.sat.open);
console.log(restaurant.openingHours.sat?.open);*/

/* LESSON: Looping Arrays - for-of loop */
/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);
for(const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
}

// console.log([...menu.entries()]);*/

/* LESSON: Logical Assigment Operators */
/*const rest1 = {
  name: "Capri",
  numGuest: 22,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1.numGuest, rest2.numGuest);

rest1.owner &&= "<ANONYMUS>";
rest2.owner &&= "<ANONYMUS>";
console.log(rest1.owner, rest2.owner);*/

/* LESSON: The Nullish Coalescing Operator (??) */
/*restaurant.guestNmbr = 0;
const guest = restaurant.guestNmbr || 10;
const guestCorrect = restaurant.guestNmbr ?? 10;
console.log(guest, guestCorrect);*/

/* LESSON: Short Circuiting (|| and &&) */
/*console.log(0 || "Ömer");
console.log("Ömer" || "Mert");
console.log(null || undefined);
console.log(null || undefined || "" || "Ömer" || "Mert" || 0);

console.log(0 && "Ömer");
console.log(7 && "Ömer");
console.log(7 && "Ömer" && null && "Mert");*/

/* LESSON: Rest Pattern and Parameters */
/*const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);*/

/* LESSON: Spread Operator - good for copying and combining arrays */
/*const arr = [3, 4, 5];
const newArr = [1, 2];
const finalArr = [...newArr, ...arr];
console.log(finalArr);
console.log(...finalArr);

const firstName = "Ömer";
const letters = [...firstName, " ", "E."]
console.log(letters);

const ingredients = [
  prompt(`Let's make pasta! First ingredient is...`, ``),
  prompt(`Second ingredient is...`, ``),
  prompt(`And our finishing ingredient is...`, ``)
]
restaurant.orderPasta(...ingredients);

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe",};
console.log(newRestaurant);*/

/* LESSON: Destructuring Objects */
/*restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 23`,
  starterIndex: 1,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantTitle, openingHours: hours, categories: tags,} = restaurant;
console.log(restaurantTitle, hours, tags);

// Default Values
const {menu = [], starterMenu : starters = []} = restaurant;
console.log(menu, starters);

// Mutating Values
let a = 111;
let b = 999;
const obj = {a: 27, b: 9, c: 14,};
({a, b} = obj);
console.log(a, b);

// Nested Objects
const {
  fri: {open: o, close: c},
} = openingHours;
console.log(o, c);*/

/* LESSON: Destructuring Arrays */
// // let str = ``;
// // for(let i=0; i < restaurant.categories.length; i++) {
// //   str = str + `${restaurant.categories[i]}, `;
// // }
// // console.log(str);

// let str = ``;
// let selectedStuff = restaurant.mainMenu;
// for(let i=0; i < selectedStuff.length; i++) {
//   if(i != (selectedStuff.length - 1)) {
//     str = str + `category${[i+1]} `;
//   } else {
//     str = str + `category${[i+1]}`;
//   }
// }
// str = str.split(" ");
// let arr = selectedStuff;
// [str] = arr;
// console.log(arr);

// // let arr = restaurant.categories;
// // const [category1, category2, category3, category4] = arr;
// // console.log(arr);

// Data needed for a later exercise
