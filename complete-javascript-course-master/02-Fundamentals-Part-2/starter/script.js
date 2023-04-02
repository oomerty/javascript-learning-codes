'use strict';

// function logger() {
//   console.log("My name is Ömer");
// }

// logger();
// logger();

/* function objectMultiplier(objectSize, selectedObject) {
  const objectMultiplied = objectSize > 1 ? selectedObject + "s" : selectedObject;
  return objectMultiplied;
}

function fruits(apples, oranges) {
  let appleLabel = "apple";
  let orangeLabel = "orange";
  let juiceMiddle;

  appleLabel = objectMultiplier(apples, appleLabel);
  orangeLabel = objectMultiplier(oranges, orangeLabel);

  if (apples && oranges) {
    juiceMiddle = `${apples} ${appleLabel} 🍎 and ${oranges} ${orangeLabel} 🍊`;
  } else if (apples) {
    juiceMiddle = `${apples} ${appleLabel} 🍎`;
  } else {
    juiceMiddle = `${oranges} ${orangeLabel} 🍊`;
  }

  const juice = `Yummy yummy juice with ${juiceMiddle}!`;
  return juice;
}

const appleJuice = fruits(2, 3);
console.log(appleJuice);
console.log(fruits(2, 0));
console.log(fruits(0, 1)); */

/* function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const calcAge2 = birthYear => 2023 - birthYear;
const retirementAge = birthYear => {
  const age = 2023 - birthYear;
  const retirement = 65 -age;
  return retirement;
}
const retirementAgeMessage = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 -age;
  return `Dear ${firstName}, you will be elligible to retire in ${retirement} years.`;
}

console.log(calcAge2(2002));
console.log(retirementAge(2002));

let ageUser = prompt("Please enter your age", "");
let nameUser = prompt("Please enter your name", "");

console.log(retirementAgeMessage(2002, "Ömer"));
console.log(retirementAgeMessage(ageUser, nameUser)); */

