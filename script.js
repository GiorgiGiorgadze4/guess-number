'use strict';

let randnum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);

  if (!input) {
    document.querySelector('.message').textContent = 'please give number';
  } else {
    score--;
  }
  if (input > randnum) {
    document.querySelector('.message').textContent = 'give lower number';
  } else if (input < randnum) {
    document.querySelector('.message').textContent = 'give higher number';
  } else if (input === randnum) {
    score++;
    document.querySelector('.message').textContent =
      'we have a winner!!!' + '\n' + 'what a total chad'; //BUG:\n how to wrie on new line

    if (Number(document.querySelector('.highscore').textContent) < score) {
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randnum;
  }
  if (score < 1) {
    document.querySelector('.message').textContent = 'LOSER!!LMAO';
    document.querySelector('body').style.backgroundColor = '#FF0000';
    score = 0;
  }
  document.querySelector('.score').textContent = score;
});
document.querySelector('.again').addEventListener('click', function () {
  score = 0;
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let randnum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
