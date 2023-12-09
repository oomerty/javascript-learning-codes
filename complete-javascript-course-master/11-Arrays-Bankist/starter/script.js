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

function displayMovement(movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

function printDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

function calcDisplaySummary(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter((int) => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
}

/*const euroToUsd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);*/

function createUsername(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(` `).map(value => value[0]).join(``);
  });
};
createUsername(accounts);

// Event Handlers
let currentAccount;

function updateUI() {
  // Calculate and Display Balance
  printDisplayBalance(currentAccount);

  // Calculate and Display Summary
  calcDisplaySummary(currentAccount);

  // Display Movements
  displayMovement(currentAccount.movements);
};

currentAccount = btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI
    containerApp.style.opacity = "1";

    let timeOfUser = new Date();
    let labelTime = timeOfUser.getHours();

    if (labelTime > 12 && labelTime < 18) {
      labelTime = `Afternoon`;
    } else if (labelTime > 18 && labelTime < 24) {
      labelTime = `Night`;
    } else {
      labelTime = `Morning`;
    }
    labelWelcome.textContent = `Good ${labelTime}, ${currentAccount.owner.split(" ")[0]}!`;
    labelDate.innerHtml = 23;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";

    updateUI();

    // Start/Restart User Timer
  }

  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiver = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferTo.value = inputTransferAmount.value = "";

    if (amount > 0 && receiver && currentAccount.balance >= amount && receiver?.username !== currentAccount.username) {
      currentAccount.movements.push(-amount);
      receiver.movements.push(amount);
      updateUI();
    }
  });

  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const loanAmmount = inputLoanAmount.value;
    if (loanAmmount > 0 && currentAccount.movements.some(mov => mov >= loanAmmount/10)) {
      currentAccount.movements.push(Number(loanAmmount));
      updateUI();
    }
    inputLoanAmount.value = "";
  });

  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentAccount.username === inputCloseUsername.value  && currentAccount.pin === Number(inputClosePin.value)) {
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      accounts.splice(index, 1);
      containerApp.style.opacity = "0";
      labelWelcome.textContent = "Account deleted.";
      updateUI();
    }
    inputCloseUsername.value = inputClosePin.value = "";
  });
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function (e) {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => el.textContent.replace("€", ""));
  console.log(movementsUI);
});

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
/*const arrAt = [233, 11, 64];
console.log(arrAt[0]);
console.log(arrAt.at(0));

// gettin last element
console.log(arrAt[arrAt.length - 1]);
console.log(arrAt.slice(-1)[0]);
console.log(arrAt.at(-1));*/

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
/*const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements, firstWithdrawal);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account.username);*/

// LESSON: some and every
/*console.log(movements);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 0); //Any movements higher than 0? YES
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0)); //All movements are higher than 0? NO

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));*/

// LESSON: flat and flatMap
/*const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements);
// const allAccountMovements = accountMovements.flat();
// console.log(allAccountMovements);
// const overallBalance = allAccountMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalanceNew = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceNew);

const overallBalanceFlatMap = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceFlatMap);*/

// LESSON: Sorting
/*const Names = ["Ömer", "Ahmet", "Göktan", "Ümit"];
console.log(Names.sort());

console.log(movements);
// const sortedMovements = movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
const sortedMovements = movements.sort((a, b) => a - b); // Ascending
console.log(sortedMovements);
const sortedMovements2 = movements.sort((a, b) => b - a); // Descending
console.log(sortedMovements2);*/

// LESSON: More Ways of Creating and Filling Arrays
/*const arr = new Array(7);
console.log(arr);
// arr.fill(1);
// console.log(arr); //[1, 1, 1, 1, 1, 1, 1]

// arr.fill(1, 3); 
// console.log(arr); //[0, 0, 0, 1, 1, 1, 1]

arr.fill(1, 3, 5); 
console.log(arr); //[0, 0, 0, 1, 1, 0, 0]

const arrFrom = Array.from({length: 7}, (_, i) => i + 1);
console.log(arrFrom);*/

// LESSON: Practices
/*// 1
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 0).reduce((prev, curr) => prev + curr , 0);
console.log(bankDepositSum);

// 2
const depositOver1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
console.log(depositOver1000);
const depositOver999 = accounts.flatMap(acc => acc.movements).reduce((i, curr) => curr > 999 ? ++i : i = i, 0);
console.log(depositOver999);

// 3
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((i, curr) => {
    //curr > 0 ? i.deposits += curr : i.withdrawals += curr;
    i[curr > 0 ? "deposits" : "withdrawals"] += curr;
    return i;}
, {deposits: 0, withdrawals: 0});
console.log(deposits);
console.log(withdrawals);

// 4
// "this is a nice title" -> "This Is a Nice Title"
function converTitleCase(title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  return title.toLowerCase().split(" ").map((value, i) => i = exceptions.includes(value) ? value.toLowerCase() : value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
};
console.log(converTitleCase("tHis iS A nice title"));*/