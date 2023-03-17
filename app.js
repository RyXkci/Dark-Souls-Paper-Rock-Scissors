const buttons = document.querySelectorAll('.btn');

const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');

const playerHealthBar = document.querySelector('#playerHealthBar');
const computerHealthBar = document.querySelector('#computerHealthBar');

/* PlayerHealthBarCounts are here to be counted down every round when a healthbar div gets removed,
that way then can be dynaically added back when reset is called */
let playerHealthBarCount = 5;
let computerHealthBarCount = 5;



const playerChoicesContainer = document.querySelector('#playerChoicesContainer');
const computerChoicesContainer = document.querySelector('#computerChoicesContainer');

const overlay = document.querySelector('#overlay');
const gameFinished = document.querySelector('#gameFinished');
const gameFinishedText = document.querySelector('#gameFinishedText');
const resetButton = document.querySelector('#reset');


let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

let totalRounds = 0;


function getComputerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]

}


buttons.forEach((button => {
    button.addEventListener('click', () => {
        playerSelection = button.name
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        addPlayerSelection(playerSelection)
        addComputerSelection(computerSelection)
    })
}))

// Adds 'paper, rock or scissors' choice to the players div //
function addPlayerSelection(selection) {
    const choiceSpan = document.createElement('span');
    choiceSpan.classList.add('choice')
    choiceSpan.innerText = selection;
    playerChoicesContainer.appendChild(choiceSpan);
}

function addComputerSelection(selection) {
    const choiceSpan = document.createElement('span');
    choiceSpan.classList.add('choice')
    choiceSpan.innerText = selection;
    computerChoicesContainer.appendChild(choiceSpan);
}


function playRound(playerSelection, computerSelection) {
    /*  console.log(playerSelection)
     console.log(computerSelection) */
    if (playerSelection === computerSelection) return // Escapes to carry on with function in case of draw //
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++
            totalRounds++
            resultsFunc(playerScore, playerScoreText, computerHealthBar);  // Functions that accepts parameters to dynamically modify the dom //
            computerHealthBarCount--;
            /* console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`) */
        }
        else {
            computerScore++
            totalRounds++
            resultsFunc(computerScore, computerScoreText, playerHealthBar);
            playerHealthBarCount--;
            /* console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`) */
        }

    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            totalRounds++
            resultsFunc(playerScore, playerScoreText, computerHealthBar);
            computerHealthBarCount--;
            /*  console.log(`***Player score is ${playerScore}***`)
             console.log(`***Computer Score is ${computerScore}***`) */
        }
        else {
            computerScore++
            totalRounds++
            resultsFunc(computerScore, computerScoreText, playerHealthBar);
            playerHealthBarCount--;
            /*   console.log(`***Player score is ${playerScore}***`)
              console.log(`***Computer Score is ${computerScore}***`) */
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++
            totalRounds++
            resultsFunc(playerScore, playerScoreText, computerHealthBar);
            computerHealthBarCount--;
            /*  console.log(`***Player score is ${playerScore}***`)
             console.log(`***Computer Score is ${computerScore}***`) */
        }
        else {
            computerScore++
            totalRounds++
            resultsFunc(computerScore, computerScoreText, playerHealthBar);
            playerHealthBarCount--;
            /* console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`) */

        }
    }
    checkRounds()
}


function checkRounds() {
    if (totalRounds === 5) {
        if (playerScore > computerScore) {

            endGame('Victory Achieved', 'won')
        }
        else {
            endGame('You Died', 'lost')
        }
    }
}

function endGame(gameResult, colorClass) {
    overlay.classList.add('toggled');
    gameFinishedText.innerText = gameResult
    gameFinishedText.classList.toggle(colorClass)
    setTimeout(() => {
        gameFinished.classList.add('toggled');
    }, 500)
}

resetButton.addEventListener('click', reset);



function reset() {
    /* console.log(playerHealthBarCount)
    console.log(computerHealthBarCount) */

    // Adds the divs back to the healthbar //
    reAddDivs(playerHealthBarCount, 'player-healthsection', playerHealthBar);
    reAddDivs(computerHealthBarCount, 'computer-healthsection', computerHealthBar);

    // Removes the choices from the player div //
    removeChildren(playerChoicesContainer);
    removeChildren(computerChoicesContainer);

    // Resets game stats //
    playerHealthBarCount = 5;
    computerHealthBarCount = 5;
    playerScore = 0;
    computerScore = 0;

    // resets dom //
    playerScoreText.innerText = 0;
    computerScoreText.innerText = 0;
    overlay.classList.remove('toggled');
    gameFinished.classList.remove('toggled');
    gameFinishedText.innerText = '';
    gameFinishedText.classList.remove('won', 'lost')
    totalRounds = 0;
}