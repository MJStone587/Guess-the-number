'use strict';
/*
document.querySelector('.message').textContent;
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23;
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//condensing code for .message textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input or input is 0
  if (!guess) {
    displayMessage('⛔ No Number Selected!');

    // when the correct number is guessed
  } else if (guess === number) {
    displayMessage('👌👏 You Guessed Correctly!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? '👎 Try Guessing Lower' : '👎 Try Guessing Higher'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
    //when guess is less than the target number
  } else if (guess < number) {
    // loop to show end game text when score is 0
    if (score > 1) {
      document.querySelector('.message').textContent = '👎 Try Guessing Higher';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 Game Over';
      document.querySelector('.score').textContent = 0;
    }

    // when number guessed is greater than target number
  } else if (guess > number) {
    //loop to show end game text when score hits 0
    if (score > 1) {
      document.querySelector('.message').textContent = '👎 Try Guessing Lower';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '👎 Game Over';
    }
  }*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  displayMessage('Start guessing...');
});

document.querySelector('.reset').addEventListener('click', function () {
  highScore = 0;
  document.querySelector('.highscore').textContent = highScore;
});
