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