'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//

function displayMovement(movements) {
  containerMovements.innerHTML = ``;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = 
    `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovement(account1.movements);

function printDisplayBalance(movements) {
  let balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
printDisplayBalance(account1.movements);

function calcDisplaySummary(accs) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = movements.filter(mov => mov > 0).map(deposit => deposit * 1.2 / 100).filter((int) => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(account1.movements);

/*const euroToUsd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);*/

function createUsername(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(` `).map(value => value[0]).join(``);
  });
};
createUsername(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// LESSON: Simple Array Methods (Slice, Splice, Reverse, Concat, Join)
/*let arr = [`a`, `b`, `c`, `d`, `e`];

// Slice
console.log(arr.slice(2)); //  ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1, -2)); // ['b', 'c']

// Splice // Changes original one
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

// Reverse // Changes original one
arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`f`, `g`, `h`, `i`, `j`];
console.log(arr2.reverse()); //  ['j', 'ı', 'h', 'g', 'f']
console.log(arr2); // Changes original one

// Concat
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']

// Join
console.log(letters.join()); // a,b,c,d,e,j,i,h,g,f
console.log(letters.join(` - `)); // a - b - c - d - e - j - i - h - g - f*/

// LESSON: The new at Method
/*const arr = [233, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// gettin last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));*/

// LESSON: Looping Arrays: forEach
/*//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
};

console.log(`----- FOREACH -----`);
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});*/

// LESSON: forEach With Maps and Sets
/*// MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
currenciesUnique.forEach(function (value, _, set) { // _ : Throwaway
  console.log(`${value}: ${value}`);
});*/

// LESSON: Data Transformations: map, filter, reduce
// map Method - creates new array with instructions
/*const euroToUsd = 1.1;
const movemenToUsd = movements.map(mov => (mov * euroToUsd).toFixed(2));
console.log(movements);
console.log(movemenToUsd);

const movementsDesc = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdraw`} ${Math.abs(mov)}`);
console.log(movementsDesc);*/

// filter Method - filters elements that satisfy certain instructions
/*const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);*/

// reduce Method - accumulator: SNOWBALL
/*let balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 1000); // 3840 + accumulator's defaultvalue 1000
console.log(balance);

let maxNmbr = movements.reduce((acc, cur) => cur > acc ? acc = cur : acc);
console.log(maxNmbr), movements[0];*/

// LESSON: Find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements, firstWithdrawal);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account.username);