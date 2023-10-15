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

// CHALLENGE: 2
function calcAverageHumanAge(ages) {
  ages.forEach((value, key) => ages[key] = value <= 2 ? 2 * value : 16 + value * 4);
  let dogToHuman = ages.filter(ages => ages >= 18);
  let dogAgeAvg = dogToHuman.reduce((acc, cur) => acc + cur) / dogToHuman.length;
  return dogAgeAvg;
};
//console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));