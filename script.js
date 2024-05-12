'use strict';

// GUESS MY NUMBER [GAME]

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input is there
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }

  else if (guess ===22){
   document.querySelector('.message').textContent='Alert! Value out of range';
  }
  //correct guess
  else if (guess === SecretNumber) {
    displayMessage('💐 Correct Answer!');
    document.querySelector('body').style.backgroundColor = 'green';

    displayNumber(SecretNumber);
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //incorrect guess
  else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? ' 📈 Too high!' : '📉 Too Low :(');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😞 Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }


});
