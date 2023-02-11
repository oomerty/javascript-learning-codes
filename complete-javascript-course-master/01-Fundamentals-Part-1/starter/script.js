/*let js = "amazing";

console.log(10+15*3-4);

let firstName = "Jonas";
let statusName = true;
console.log(firstName)
console.log(typeof firstName); //string
console.log(typeof statusName); //boolean

firstName = "Ömer"; //Veriyi değiştirirken tekrar let kullanmaya gerek yok
console.log(firstName);

let age = 20; // let - değiştirilebilir
age = 21;

const birthYear = 2002; // const - değişmez
// birthYear = 2001; // bu olamaz
// const job; //değer yok olamaz

var job = "programmer"; // eski kullanım
job = "teacher"; */

/* let currentYear = 2023;
const birthYear = 2002;
let age = currentYear - birthYear;
console.log(`Your are ${age} years old`);

const firstName = "Ömer Mert";
const lastName = "ERYİĞİT";
console.log(`${firstName} ${lastName}`); */

// 5 FALSY VALUES : 0 - '' - undefined - null - NaN //
/* console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN)) */

/* const hasDriversLicense = true;
const hasGoodVision = true;

const shouldDrive = hasDriversLicense && hasGoodVision; // AND

if (shouldDrive) {
  console.log("You are good to drive!");
} else {
  console.log("Someone else should drive...");
} */

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break
  case "tuesday":
    console.log("Prepare theory videos");
    break
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break
  case "friday":
    console.log("Record videos");
    break
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break
  default:
    console.log("Not a valid day...");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if ((day === "wednesday") || (day === "thursday")) {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if ((day === "saturday") || (day === "sunday")) {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day...");
}

