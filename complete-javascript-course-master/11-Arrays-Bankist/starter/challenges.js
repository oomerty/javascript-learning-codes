// CHALLENGE: 1
let dogsJulia = [9, 16, 6, 8, 3];
let dogsKate = [10, 5, 6, 1, 4];

function checkDogs(arrJulia, arrKate) {
  let dogsJuliaCRCTD = arrJulia.slice(1,3);
  let dogsAll = dogsJuliaCRCTD.concat(arrKate);
  dogsAll.forEach(function (value, key) {
    console.log(`Dog number ${key + 1} is ${value >= 3 ? `an adult, and is ${value} years old` : `still a puppy 🐶`}`);
  });
};
//checkDogs(dogsJulia, dogsKate);

// CHALLENGE: 2 + 3
function calcAverageHumanAge(ages) {
  ages.forEach((value, key) => ages[key] = value <= 2 ? 2 * value : 16 + value * 4);
  let dogToHuman = ages.filter(ages => ages >= 18);
  let dogAgeAvg = dogToHuman.reduce((acc, cur) => acc + cur) / dogToHuman.length;
  return dogAgeAvg;
};
//console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// CHALLENGE: 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// p1
function recommendedAmount(weight){return (weight ** 0.75 * 28).toFixed(0)};
dogs.forEach(i => i.recommendedFood = recommendedAmount(i.weight));
console.log(dogs);

// p2
let sarahIndex = dogs.findIndex(x => x.owners.includes('Sarah'));
isOvereating(dogs[sarahIndex].recommendedFood, dogs[sarahIndex].current) ? console.log(`Sarah's dog eats too much!`) : console.log(`Sarah's dog eats right amount of food.`)

// p3
let ownersEatTooMuch = [], ownersEatTooLittle = [];
dogs.forEach(i => isOvereating(i.recommendedFood, i.curFood) && i.curFood > i.recommendedFood ? ownersEatTooMuch.push(i.owners) : ownersEatTooLittle.push(i.owners));
console.log(ownersEatTooLittle.flat());

function isOvereating(recommended, current) {
  return current > (recommended * 0.90) && current < (recommended * 1.10) ? false : true;
}

// p4
console.log(`${nameListing(ownersEatTooLittle)}'s dogs eat too little!`);
console.log(`${nameListing(ownersEatTooMuch)}'s dogs eat too much!`);

function nameListing(arr) {
  let str = ``;
  arr.flat().forEach((value, i) => str += i != arr.length ? (i == 0 ? `${value}` : `, ${value} `) : `and ${value}`);
  return str;
}

// p5
dogs.forEach(
  (value, i) => value.curFood === value.recommendedFood ? console.log("true") : console.log("false")
)

// p6 + p7
let okayEaters = [];
dogs.forEach(
  (value, i) => !isOvereating(i.recommendedFood, i.curFood) ? okayEaters.push(value) : console.log("false")
)

// p8
// let dogsCopy = [...dogs];

// for (let i = 1; i < dogsCopy.length; i++) {
//   for (let k = 0; k < i; k++) {
//     if (dogsCopy[i].recommendedFood < dogsCopy[k].recommendedFood) {
//         let temp = dogsCopy[i];
//         dogsCopy[i] = dogsCopy[k];
//         dogsCopy[k] = temp;
//     }
//   }
// }
let dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
