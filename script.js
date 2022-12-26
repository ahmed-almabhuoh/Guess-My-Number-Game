'use strict';

const scoreElement = document.querySelector('.score');
const messageElement = document.querySelector('.message');
const highScoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');

let privateNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 20;
let highScore = highScoreElement.textContent;

document.querySelector('.check').addEventListener('click', function () {
  scoreElement.textContent = attempts;
  highScoreElement.textContent = highScore;

  const value = guessElement.value;

  if (attempts > 0) {
    if (value.length == 0) {
      messageElement.textContent = 'The value input is required';
    } else if (value > 20 || value <= 0) {
      messageElement.textContent =
        'The input value should be between 1 - 20 only';
    } else if (value == privateNumber) {
      messageElement.textContent = 'Winner Winner Checking Dinner';
      document.querySelector('body').style.backgroundColor = 'green';
      numberElement.textContent = privateNumber;
      if (attempts > highScore) {
        highScore = attempts;
        highScoreElement.textContent = highScore;
      }
    } else if (value < privateNumber) {
      --attempts;
      messageElement.textContent = 'Too height';
      scoreElement.textContent = attempts;
    } else if (value > privateNumber) {
      --attempts;
      messageElement.textContent = 'Too low';
      scoreElement.textContent = attempts;
    }
  } else {
    messageElement.textContent = 'You loss the game.';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  privateNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 20;
  scoreElement.textContent = attempts;
  messageElement.textContent = 'Start guessing ....';
  document.querySelector('body').style.backgroundColor = 'black';
  numberElement.textContent = '?';
  guessElement.value = '';
});
