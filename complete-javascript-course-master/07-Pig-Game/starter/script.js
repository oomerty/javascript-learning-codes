'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let currentScore0El = document.getElementById("current--0");
let currentScore1El = document.getElementById("current--1");
let diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  diceEl.classList.add("hidden");
}

function rollRandomizer() {
  return Math.trunc(Math.random()*6)+1;
}

function playerChanger() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

init();

btnRoll.addEventListener("click", function() {
  if (playing) {
    let rolledNumber = rollRandomizer();
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${rolledNumber}.png`;

    if (rolledNumber !== 1) {
      //add to current score
      currentScore += rolledNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      //switch to next player
      playerChanger();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
      playerChanger();
    }
  }
});

btnNew.addEventListener('click', init);