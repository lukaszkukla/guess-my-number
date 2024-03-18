'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberUpdate = function (number) {
  document.querySelector('.number').textContent = number;
};

const backgroundChange = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const widthChange = function (width) {
  document.querySelector('.number').style.width = width;
};

const scoreUpdate = function (score) {
  document.querySelector('.score').textContent = score;
};

numberUpdate('?');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // no input message
  if (!guess) {
    displayMessage('Enter a number 💩');
    // win condition
  } else if (guess === secretNumber) {
    displayMessage('🎉🎉🎉 Correct number! 🎉🎉🎉');
    numberUpdate(secretNumber);
    backgroundChange('#60b347');
    widthChange('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // guess incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreUpdate(score);
    } else {
      displayMessage('You lost');
      scoreUpdate(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  scoreUpdate(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  backgroundChange('#222');
  widthChange('15rem');
  numberUpdate('?');
});
