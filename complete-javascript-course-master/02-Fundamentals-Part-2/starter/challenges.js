 function describeCountry(country, population, capitalCity) {
   console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

// describeCountry("Türkiye", 80, "Ankara");

function percentageOfWorld1(population) {
  return population / 79;
}

/* const percentageOfWorld2 = function (population) {
  return population / 79;
}

const percentageOfWorld3 =  population => population / 79;

// console.log(percentageOfWorld1(80).toFixed(2));
// console.log(percentageOfWorld1(1441).toFixed(2));
// console.log(percentageOfWorld1(33).toFixed(2));
// console.log(percentageOfWorld2(80).toFixed(2));
// console.log(percentageOfWorld2(1441).toFixed(2));
// console.log(percentageOfWorld2(33).toFixed(2));
console.log(percentageOfWorld3(80).toFixed(2));
console.log(percentageOfWorld3(1441).toFixed(2));
console.log(percentageOfWorld3(33).toFixed(2)); */

function describePopulation(country, population) {
  const percentageLabel = percentageOfWorld1(population).toFixed(2);
  return `${country} has ${population} million people, which is about ${percentageLabel}% of the world`;
}

// console.log(describePopulation("Türkiye", 80));
/* const populations = [80, 1441, 33, 727];
const percentages = [percentageOfWorld1(populations[0]).toFixed(2), percentageOfWorld1(populations[1]).toFixed(2), percentageOfWorld1(populations[2]).toFixed(2), percentageOfWorld1(populations[3]).toFixed(2)];
console.log(percentages); */

/* const neighbours = ["Turkey", "Bulgaria", "Azerbejian"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D")
} else {
  console.log("A central European country yey!")
}

neighbours[0] = "Republic of Turkey";
console.log(neighbours); */

const myCountry = {
  country: "Türkiye",
  capital: "Ankara",
  language: "Turkish",
  population: 80,
  neighbours: ["Azerbejian", "Bulgaria"],
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland},

  describe: function () {
    return `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`},
}

/* console.log(myCountry.describe());
console.log(myCountry.checkIsland()); */

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

/*const populations = [80, 1441, 33, 727];
const percentages = [percentageOfWorld1(populations[0]).toFixed(2), percentageOfWorld1(populations[1]).toFixed(2), percentageOfWorld1(populations[2]).toFixed(2), percentageOfWorld1(populations[3]).toFixed(2)];
let percentages2 = [];

for (i = 0; i < populations.length; i++) {
  deneme = populations[i] / 79;
  percentages[i] == deneme.toFixed(2) ? percentages2[i] = true : percentages2[i] = false;
}

console.log(`${percentages2}`);*/

/*const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (i=0; i < listOfNeighbours.length; i++) {
  for(n=0; n < listOfNeighbours[i].length; n++) {
    console.log(`${listOfNeighbours[i][n]}`);
  }
}*/

/*const populations = [80, 1441, 33, 727];
const percentages = [percentageOfWorld1(populations[0]).toFixed(2), percentageOfWorld1(populations[1]).toFixed(2), percentageOfWorld1(populations[2]).toFixed(2), percentageOfWorld1(populations[3]).toFixed(2)];
let percentages3 = [];

let i = 0;
while (i < populations.length) {
  deneme = populations[i] / 79;
  percentages[i] == deneme.toFixed(2) ? percentages3[i] = true : percentages3[i] = false;
  i++;
}

console.log(`${percentages3}`);*/

