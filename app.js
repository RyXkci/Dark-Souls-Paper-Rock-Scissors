const buttons = document.querySelectorAll('.btn');

const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');

const playerHealthBar = document.querySelector('#playerHealthBar');
const computerHealthBar = document.querySelector('#computerHealthBar');

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

function addPlayerSelection(selection) {
    const choiceDiv = document.createElement('div');
    choiceDiv.classList.add('choice')
    choiceDiv.innerText = selection;
    playerChoicesContainer.appendChild(choiceDiv);
}

function addComputerSelection(selection) {
    const choiceDiv = document.createElement('div');
    choiceDiv.classList.add('choice')
    choiceDiv.innerText = selection;
    computerChoicesContainer.appendChild(choiceDiv);
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) return `It's a draw! Both ${playerSelection}`
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++
            totalRounds++
            resultsFunc({ score: playerScore, winner: playerScoreText, healthBar: computerHealthBar });
            computerHealthBarCount--;
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
        }
        else {
            computerScore++
            totalRounds++
            resultsFunc({ score: computerScore, winner: computerScoreText, healthBar: playerHealthBar });
            playerHealthBarCount--;
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
        }

    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            totalRounds++
            resultsFunc({ score: playerScore, winner: playerScoreText, healthBar: computerHealthBar });
            computerHealthBarCount--;
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
        }
        else {
            computerScore++
            totalRounds++
            resultsFunc({ score: computerScore, winner: computerScoreText, healthBar: playerHealthBar });
            playerHealthBarCount--;
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++
            totalRounds++
            resultsFunc({ score: playerScore, winner: playerScoreText, healthBar: computerHealthBar });
            computerHealthBarCount--;
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
        }
        else {
            computerScore++
            totalRounds++
            resultsFunc({ score: computerScore, winner: computerScoreText, healthBar: playerHealthBar });
            playerHealthBarCount--;
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)

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
    gameFinishedText.classList.add(colorClass)
    setTimeout(() => {
        gameFinished.classList.add('toggled');
    }, 500)
}

resetButton.addEventListener('click', reset);



function reset() {
    console.log(playerHealthBarCount)
    console.log(computerHealthBarCount)

    reAddDivs(playerHealthBarCount, 'player-healthsection', playerHealthBar);
    reAddDivs(computerHealthBarCount, 'computer-healthsection', computerHealthBar);

    removeChildren(playerChoicesContainer);
    removeChildren(computerChoicesContainer);

    playerHealthBarCount = 5;
    computerHealthBarCount = 5;
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = 0;
    computerScoreText.innerText = 0;
    overlay.classList.remove('toggled');
    gameFinished.classList.remove('toggled');
    gameFinishedText.innerText = '';
    totalRounds = 0;

}