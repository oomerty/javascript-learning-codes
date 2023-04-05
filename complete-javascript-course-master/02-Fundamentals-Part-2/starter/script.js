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

/* const friends = ["Peter", "Brian", "Stewie"];
const years = new Array(1984, 1991, 2007, 2023);

// console.log(friends[0]);
// console.log(friends.length); //3
// console.log(friends[friends.length -1]); //friends[2]

// friends[2] = "Lois"; //Stewie is changed with Lois
// console.log(friends[friends.length -1]); //friends[2]

const firstName = "Ömer";
const userData = [firstName, "ERYİĞİT", 2023 - 2002, "student", friends];

for (let i = 0; i <= 4; i++) {
  console.log(userData[i]);
}

const calcAge = birthYear => 2023 - birthYear;

for (let n = 0; n <= 3; n++) {
  console.log(calcAge(years[n])) 
} */

/* # ARRAYS
const friends = ["Peter", "Brian", "Stewie"];
friends.push("Lois"); //ADD to end
console.log(friends);

friends.unshift("Chris"); //ADD to beginning
console.log(friends);

friends.pop(); //REMOVE from end
const poppedFriend = friends.pop();
console.log(poppedFriend); //removed friend output
console.log(friends); 

friends.shift(); //REMOVE from beginning
console.log(friends); 

console.log(friends.indexOf("Brian")); //Location of brian
console.log(friends.includes("Brian"));
console.log(friends.includes("Quagmire")); */

/* # OBJECTS
const omerObject = {
  firstName: "Ömer",
  lastName: "ERYİĞİT",
  pronoun: ["He", "him", "his"],
  birthYear: 2002,
  job: "student",
  friend: ["Utkan", "Davut", "Göktan"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.age} years-old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license. ${this.pronoun[0]} likes to hang out with ${this.pronoun[2]} friends: ${this.friend[0]}, ${this.friend[1]} and ${this.friend[2]}.`
  }
} //Literal Syntax

console.log(omerObject);
console.log(omerObject.lastName);
console.log(omerObject["lastName"]);

const nameCaller = "Name";
console.log(omerObject["first" + nameCaller]);
console.log(omerObject["last" + nameCaller]);

const interestedIn = prompt("What do you want to know about this user? Available selections are firstName, lastName, age, job and friend");

console.log(omerObject[interestedIn])

omerObject.location = "Türkiye";
omerObject["nickName"] = "oomerty";
console.log(omerObject);

console.log(`${omerObject.firstName} has ${omerObject.friend.length}, and his best friend is called ${omerObject.friend[0]}`);

console.log(omerObject.calcAge());
console.log(omerObject.age);
console.log(omerObject["age"]);

console.log(omerObject.getSummary()); */

// # LOOPS




