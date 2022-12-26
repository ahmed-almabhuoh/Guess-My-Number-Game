'use strict';

let privateNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 20;

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.score').textContent = attempts;
  const value = document.querySelector('.guess').value;

  if (attempts > 0) {
    if (value.length == 0) {
      document.querySelector('.message').textContent =
        'The value input is required';
    } else if (value > 20 || value <= 0) {
      document.querySelector('.message').textContent =
        'The input value should be between 1 - 20 only';
    } else if (value == privateNumber) {
      document.querySelector('.message').textContent =
        'Winner Winner Checking Dinner';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = privateNumber;
    } else if (value < privateNumber) {
      --attempts;
      document.querySelector('.message').textContent = 'Too height';
      document.querySelector('.score').textContent = attempts;
    } else if (value > privateNumber) {
      --attempts;
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.score').textContent = attempts;
    }
  } else {
    document.querySelector('.message').textContent = 'You loss the game.';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  privateNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 20;
  document.querySelector('.score').textContent = attempts;
  document.querySelector('.message').textContent = 'Start guessing ....';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
