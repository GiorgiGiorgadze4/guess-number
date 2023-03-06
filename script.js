'use strict';

let randnum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = localStorage.getItem('highscore');

function init() {
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.score').textContent = score;
}

init();

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
      'we have a winner!!!' + '\r\n' + 'what a total chad';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      localStorage.setItem('highscore', highscore);
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
document.querySelector('.reset').addEventListener('click', function () {
  localStorage.setItem('highscore', 0);
  document.querySelector('.highscore').textContent = 0;
  console.log(highscore);
});
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   let randnum = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
