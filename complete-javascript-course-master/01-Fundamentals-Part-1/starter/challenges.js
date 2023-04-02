/* // 1
let massMark = 95;
let massJohn = 85;

let heightMark = 1.88;
let heightJohn = 1.76;

const markBMI = massMark / (heightMark ** 2);
const johnBMI = massJohn / (heightJohn ** 2);

// 2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
} */

// 3
/* const dolphins = ((97 + 112 + 101) / 3).toFixed(1);
const koalas = ((109 + 95 + 123) / 3).toFixed(1);

if ((dolphins < 100) || (koalas <100)) {
  if ((dolphins < 100) && (koalas <100)) {
    console.log("Both teams are disqualified!");
  } else if (dolphins < 100) {
    console.log(`Dolphins are disqualified with ${dolphins}`);
  } else {
    console.log(`Koalas are disqualified with ${koalas}`);
  }
} else {
  if (dolphins === koalas) {
    console.log("Same score, DRAW!");
  } else if (dolphins > koalas) {
    console.log(`Dolphins beats Koalas 🐬 with the score of ${dolphins} - ${koalas}`);
  } else {
    console.log(`Koalas beats Dolphins 🐨 with the score of ${koalas} - ${dolphins}`);
  }
} */

// 4
let billTotal = 275;

const tip = 50 < billTotal < 300 ? billTotal * 0.15 : billTotal * 0.2;
console.log(`The bill was ${billTotal}, the tip was ${tip}, and the total value
${billTotal + tip}`);






