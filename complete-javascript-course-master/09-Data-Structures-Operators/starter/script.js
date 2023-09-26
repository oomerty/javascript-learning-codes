'use strict';

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "fri", "sat", "sun"];

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

  orderDelivery: function({starterIndex = 1, mainIndex = 0, address, time = `20:00`}) {
    console.log(`Order received! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your fire pizza with ${ing1}, ${ing2} and ${ing3}!`);
  }
};

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.sat) console.log(restaurant.openingHours.sat.open);


/* Looping Arrays - for-of loop */
/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);
for(const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
}

// console.log([...menu.entries()]);*/

/* Logical Assigment Operators */
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

/* The Nullish Coalescing Operator (??) */
/*restaurant.guestNmbr = 0;
const guest = restaurant.guestNmbr || 10;
const guestCorrect = restaurant.guestNmbr ?? 10;
console.log(guest, guestCorrect);*/

/* Short Circuiting (|| and &&) */
/*console.log(0 || "Ömer");
console.log("Ömer" || "Mert");
console.log(null || undefined);
console.log(null || undefined || "" || "Ömer" || "Mert" || 0);

console.log(0 && "Ömer");
console.log(7 && "Ömer");
console.log(7 && "Ömer" && null && "Mert");*/

/* Rest Pattern and Parameters */
/*const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);*/

/* Spread Operator - good for copying and combining arrays */
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

/* Destructuring Objects */
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

/* Destructuring Arrays */
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

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
