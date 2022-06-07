"use strict";
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let score = [0, 0]; //intial score of player
let currentScore = 0;
let activePlayer = 0;
let playing = true;

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active"); //toggle method will add the class if it's not there
  player1El.classList.toggle("player--active"); //It will also remove  the class if it's  there
};

// Rolling Dice Funtionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    //  1-Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `Dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      //    Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //   Switch to the next player
      switchPlayer();
    }
  }
});

// Implementing Hold button logic
btnHold.addEventListener("click", function () {
  if (playing) {
    //Add current scoe to active player
    score[activePlayer] += currentScore;
    // score[1] = score[1] +currentscrore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //Check scroe >= 100
    if (score[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

// Implementing New game button features

btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  let score = [0, 0]; //intial score of player
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;
});
