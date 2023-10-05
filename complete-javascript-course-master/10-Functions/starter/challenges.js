'use strict';

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function() {
  let pickedAnswer = prompt(`What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++`);
  pickedAnswer = Number(pickedAnswer);
  console.log(pickedAnswer);
  if (0 > pickedAnswer || pickedAnswer > 3) {
    console.log(`${pickedAnswer} is not even an option! Pick a correct one or buzz off!`);
  } else {
    this.answers[pickedAnswer]++;
  }
  console.log(this.answers);
};

function displayResults(arr) {
  let resultTxt = `Poll results are `;
  for (let i = 0; i < arr.length ;i++) {
    i < arr.length - 1 ? resultTxt += `${arr[i]}, ` : resultTxt += `${arr[i]}.`;
  }
  console.log(resultTxt);
};

document.querySelector('.poll').addEventListener('click', function() {
  poll.registerNewAnswer();
  displayResults(Object.values(poll.answers));
});

displayResults([5, 2, 3]);
displayResults( [1, 5, 3, 9, 6, 1]);