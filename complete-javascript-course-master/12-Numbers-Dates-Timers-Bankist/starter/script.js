'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 643],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2024-02-09T10:16:43.790Z',
    '2024-02-09T13:27:43.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

function formatMovements(date) {
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  const now = new Date();

  function daysPassed(future, past) {
    return (future - past) / (1000 * 60 * 60 * 24);
  }

  const passed = daysPassed(now, date);

  if (passed > 1) {
    if (passed < 365) return `${passed} day${passed > 1 ? `s` : ``} ago`;
    else return `${(passed / 356).toFixed(0)} years ago`;
  } else if (passed.toFixed(0) === 1) {
    return `a day ago`;
  } else {
    const hoursPassed = (passed * 24).toFixed(0);
    const minutesPassed = (passed * 60 * 24).toFixed(0);
    if (minutesPassed < 1) return `moments ago`;
    else if (minutesPassed < 60) return `${minutesPassed} minute${minutesPassed > 1 ? `s` : ``} ago`;
    else return `${hoursPassed} hour${hoursPassed > 1 ? `s` : ``} ago`;
  }
}

function formatCur(value, locale, currency) {
  const options = {
    style: "currency",
    currency: currency
  }

  return new Intl.NumberFormat(locale, options).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovements(date);
    

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCur(mov, acc.locale, acc.currency)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(acc.balance, acc.locale, acc.currency)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(out, acc.locale, acc.currency)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(interest, acc.locale, acc.currency)}`;
};

const logoutTimer = function (acc) {
  let endTime = new Date(null);
  let startTime = new Date(endTime);
  startTime.setMinutes(5);
  startTime.setSeconds(0);
  const options = {
    minute: `numeric`,
    second: `numeric`
  };

  function tick() {
    labelTimer.textContent = new Intl.DateTimeFormat(acc.locale, options).format(startTime);
    startTime -= 1000;
    if (startTime - endTime == 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
  }

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  // Display and start timer
  if (timer) clearInterval(timer);
  timer = logoutTimer(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
/*currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;*/

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Current Date
    const now = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: "numeric",
      month: `numeric`, //long -> February, numeric -> 02
      year: `numeric`,
      //weekday: `short`
    }
    //const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Timestampp
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset Timer
    clearInterval(timer);
    timer = logoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
    currentAccount.movements.push(amount);

    // Add Timestamp
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    }, 3000)

    //Reset Timer
    clearInterval(timer);
    timer = logoutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// LESSON: Converting and Checking Numbers
/*//Conversion
console.log(Number("23")); // 23
console.log(+"23"); // 23

//Parsing
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e23", 10)); // NaN

console.log(Number.parseInt("2.5rem", 10)); // 2
console.log(Number.parseFloat("2.5rem", 10)); // 2.5

console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(20 / 0)); // false

// Check if value is a number
console.log(Number.isFinite(21)); // true
console.log(Number.isFinite("21")); // false
console.log(Number.isFinite(20 / 0)); // false*/

// LESSON: Math and Rounding
/*console.log(Math.sqrt(25)); // 5
console.log(25 ** (1/2)); // 5
console.log(8 ** (1/3)); // 2

console.log(Math.max(5, 18, 24, 11, 2)); // 24
console.log(Math.max(5, 18, "24", 11, 2)); // 24
console.log(Math.max(5, 18, "24px", 11, 2)); // NaN

console.log(Math.min(5, 18, 24, 11, 2)); // 2

console.log(Math.PI);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1 ) + min;
console.log(randomInt(1, 6));

//Rounding
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.5)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.5)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor("23.5")); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.745).toFixed(2)); // 2.75
console.log(+(2.745).toFixed(2)); // 2.75 (INTEGER)*/

// LESSON: The Remainder Operator
/*console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(6 % 2); // 0

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `gray`;
  });
});*/

// LESSON: Numeric Separators
/*const diameter = 287_460_000_000;
console.log(diameter); //Ignores "_"*/

// LESSON: Working with BigInt
/*console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(9817549869837640957834561565314565643634635); // Int 9.817549869837641e+42
console.log(9817549869837640957834561565314565643634635n); //BigInt 9817549869837640957834561565314565643634635n
console.log(BigInt(9817549869837640957834561565314565643634635)); //BigInt 9817549869837640957834561565314565643634635n

// Operations - CANT mix types
console.log(typeof 200n); // bigint
console.log(1000n + 1000n); // 2000n

console.log(20n === 20); // false
console.log(20n == 20); // true

console.log(10n / 3n); // 3
console.log(10 / 3); // 3.3333333333333335*/

// LESSON: Creating Dates
// Create a Date
/*const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 15 2015"));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days - 24 hours - 60 minutes - 60 seconds - 1000 miliseconds

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T12:23:00.000Z

console.log(future.getTime()); // 2142246180000
console.log(Date.now()); // 1702204359843

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0300 (GMT+03:00)*/

// LESSON: Operations With Dates
/*const future = new Date(2037, 10, 19, 15, 23);
const past = new Date(2037, 10, 15, 15, 23);

function daysPassed(future, past) {
  return (future - past) / (1000 * 60 * 60 * 24);
}

console.log(daysPassed(future, past));*/

// LESSON: Internationalizing Numbers (Intl)
/*const num = 5416525.46;
const options = {
  style: "currency",
  currency: "EUR",
  //useGrouping: false
};

console.log(num);
console.log(`US: ` + new Intl.NumberFormat(`en-US`, options).format(num));
console.log(`GB: ` + new Intl.NumberFormat(`en-GB`, options).format(num));
console.log(`DE: ` + new Intl.NumberFormat(`de-DE`, options).format(num));
console.log(`${navigator.language.split(`-`).at(1)}: ` + new Intl.NumberFormat(navigator.language, options).format(num));*/

// LESSON: Timers: setTimeout and setInterval
/*const ingredients = [`olives`, `pepperoni`];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients);
if (ingredients.includes(`pepperoni`)) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  const options = {
    hour: `numeric`,
    minute: `numeric`,
    second: `numeric`
  }
  console.log(new Intl.DateTimeFormat(`tr-TR`, options).format(now));
}, 1000);*/

// LESSON: 