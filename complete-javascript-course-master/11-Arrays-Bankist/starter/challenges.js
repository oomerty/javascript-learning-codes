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
  let dogToHuman;
  ages.forEach(function (value, key) {
    dogToHuman = value <= 2 ? 2 * value : 16 + value * 4;
  });
  return dogToHuman;
};
console.log(calcAverageHumanAge(dogsKate));