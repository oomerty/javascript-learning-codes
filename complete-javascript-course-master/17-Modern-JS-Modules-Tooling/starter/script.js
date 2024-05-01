// Importing Module
/*import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
 addToCart(`iPhone 15 - 128GB`, 1);
 console.log(price, tq);*/

//import { cart } from "./shoppingCart";

console.log(`Importing module`);
/*import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart(`bread`, 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);*/

//import add, { addToCart, totalPrice as price, tq }  from './shoppingCart.js';
//console.log(price, tq);
import add, { cart } from './shoppingCart.js';
add(`pizza`, 2);
add(`bread`, 5);
add(`apple`, 5);

console.log(cart);

// LESSON: TOP LEVEL AWAIT
/*// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

async function getLastPost() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {title: data.at(-1).title, text: data.at(-1).body};
};

// Not really clean
//const lastPost = getLastPost();
//lastPost.then(last => console.log(last));

// Top-Level Await
const lastPost = await getLastPost();
console.log(lastPost);*/

// LESSON: THE MODULE PATTERN
/*const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 227;
  const totalQuantity = 23;

  function addToCart(product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (shipping cost: ${shippingCost})`);
  }

  function orderStock(product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined*/

// LESSON: CommonJS MODULES
/*
// works in Node.JS
export.addToCard = function (product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart (shipping cost: ${shippingCost})`);
};

const { addToCard } = require(`./shoppingCart.js`);*/

// LESSON: Introduction to NPM
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 7 },
    { product: 'bagget', quantity: 3 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// PAGE WILL NOT RELOAD WITH THIS TRICK
if(module.hot) {
  module.hot.accept()
}

console.log(`Ömer` ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve("Test").then(x => console.log(x));

import "core-js/stable";
//import "core-js/stable/array/find";
//import "core-js/stable/promise";
import "regenerator-runtime/runtime"