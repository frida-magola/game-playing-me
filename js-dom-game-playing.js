/**
 * GAME PLAYER
 */
let score, dice, roundScore, activePlayer, gamePlayer, lastDice;
init();

/**
 * DOM MANIPULATION
 */

//button roll function start game
function btnRoll() {
  // test the state of the btn
  if (gamePlaying) {
    //1. random number <> 1 and 6 when the btn is clicked
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    document.getElementById('dice-1').src = '/images/dice-' + dice1 + '.png'; //display dice image based on dice random number
    document.getElementById('dice-1').style.display = 'block';

    document.getElementById('dice-2').src = '/images/dice-' + dice2 + '.png';
    document.getElementById('dice-2').style.display = 'block';

    /**
     ** The player game loose the game if he has 2 6 rolls in the row
     */
    if (dice1 !== 1 && dice2 !== 1) {
      // change the player turn
      //add class active to panel-1
      //player active 0 turn
      roundScore += dice1 + dice2; // == roundScore = roundScore+1;
      //Update the webpage
      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScore;
    } else {
      //player active 1 turn
      nextPlayer();
    }
    /*if (dice === 6 && lastDice === 6) {
      //loose the game
      scores[activePlayer] = 0;
      //Update the UI
      document.querySelector('#score-' + activePlayer).textContent =
        scores[activePlayer];
      nextPlayer();
    } else if (dice !== 1) {
      // change the player turn
      //add class active to panel-1
      //player active 0 turn
      roundScore += dice; // == roundScore = roundScore+1;
      //Update the webpage
      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScore;
    } else {
      //player active 1 turn
      nextPlayer();
    }*/
    //store the last dice
    lastDice = dice;
  }
}

//Btn hold function
function btnHold() {
  if (gamePlaying) {
    //Add score to the global Score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent =
      scores[activePlayer];

    //input
    let input = document.querySelector('.final-score').value;
    let winningScore;
    // undefined, 0, "" are coerced to false
    // Anything else coerced to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    //check the winner
    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'winner';
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      gamePlaying = false;
      // disable btn roll and hold
      const rollBtn = document.querySelector('.btn-roll');
      const holdBtn = document.querySelector('.btn-hold');
      rollBtn.setAttribute('disabled', 'disabled');
      rollBtn.style.cursor = 'not-allowed';
      holdBtn.setAttribute('disabled', 'disabled');
      holdBtn.style.cursor = 'not-allowed';
    } else {
      //next player
      nextPlayer();
    }
  }
}

//next player function
function nextPlayer() {
  //chech active player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //reset the roundScore to zero
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //add class active to panel-1
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  //hide dice image onload of the page
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  //initial all by 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //initialize name player
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  //remove winner class
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // remove class active
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  //add class active to panel-1
  document.querySelector('.player-0-panel').classList.add('active');

  // initialize btn
  const rollBtn = document.querySelector('.btn-roll');
  const holdBtn = document.querySelector('.btn-hold');
  rollBtn.removeAttribute('disabled', 'disabled');
  rollBtn.style.cursor = 'pointer';
  holdBtn.removeAttribute('disabled', 'disabled');
  holdBtn.style.cursor = 'pointer';
}

//Add event Listener
document.querySelector('.btn-roll').addEventListener('click', btnRoll);
// add event listener btn hold
document.querySelector('.btn-hold').addEventListener('click', btnHold);

//start new game
document.querySelector('.btn-new').addEventListener('click', init);
