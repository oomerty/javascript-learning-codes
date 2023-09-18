'use strict';

let scoreNumber = 20;
let highScore = 0;
document.querySelector('.score').textContent = scoreNumber;
document.querySelector('.highscore').textContent = highScore;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

/* RANDOM NUMBER CREATOR */
function numberRandomizer() {
    return Math.trunc(Math.random()*20)+1;
  }
let secretNumber = numberRandomizer();

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // Gameplay
    if(scoreNumber > 1) {
        // Wrong or no input from player
        if((0 > guess || guess > 20) || !(guess)) {
            displayMessage("No or Wrong Number! ⛔");
        }
        // When player wins
        else if (guess === secretNumber) {
            displayMessage("Correct Number! 🥳");
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.check').disabled = true;
            document.querySelector('.guess').disabled = true;

            if (scoreNumber > highScore) {
                highScore = scoreNumber;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        // Low or high guess from player
        else {
            scoreNumber--;
            displayMessage(guess > secretNumber ? `Little lower...` : `Little higher...`);
        }
    }
    // Lose condition when score hits 0
    else {
        scoreNumber--;
        displayMessage(`GAME OVER! 😥 Try again...`);
        document.querySelector('body').style.backgroundColor = "#b34e47";
        document.querySelector('.check').disabled = true;
        document.querySelector('.guess').disabled = true;
    }

    document.querySelector('.score').textContent = scoreNumber;
});

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;

  secretNumber = numberRandomizer();
  scoreNumber = 20;

  displayMessage(`Start guessing...`);
  document.querySelector('.number').textContent = "?";
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = "";
});