// #1
/* const team1Label = "Dolphins";
const team1Score1 = 85;
const team1Score2 = 54;
const team1Score3 = 41;

const team2Label = "Koalas";
const team2Score1 = 23;
const team2Score2 = 34;
const team2Score3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(team1Avg, team2Avg) {
  team1Avg = calcAverage(team1Score1, team1Score2, team1Score3).toFixed(1);
  team2Avg = calcAverage(team2Score1, team2Score2, team2Score3).toFixed(1);

  if ( team1Avg > team2Avg) {
    return `${team1Label} win (${team1Avg}  vs. ${team2Avg} 🏆)`;
  } else {
    return `${team2Label} win (${team2Avg}  vs. ${team1Avg} 🏆)`;
  }
}

console.log(checkWinner()); */

// #2
/* const calcTip = billTotal => billTotal >= 50 && billTotal <= 300  ? billTotal*0.15 : billTotal*0.2;

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i <= 2; i++) {
  tips[i] = calcTip(bills[i]);
  total[i] = bills[i] + tips[i];
}

console.log(bills, tips, total); */

// #3
const userMark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
}

const userJohn = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

console.log(userMark.calcBMI() > userJohn.calcBMI() ? `${userMark.fullName}'s BMI (${(userMark.calcBMI()).toFixed(2)}) is higher than ${userJohn.fullName}'s (${(userJohn.calcBMI()).toFixed(2)})!` : `${userJohn.fullName}'s BMI (${(userJohn.calcBMI()).toFixed(2)}) is higher than ${userMark.fullName}'s (${(userMark.calcBMI()).toFixed(2)})!`);

