const buttons = Array.from(document.querySelectorAll('.btn'));

const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');

const playerHealthBar = document.querySelector('#playerHealthBar');
const computerHealthBar = document.querySelector('#computerHealthBar');


const playerChoicesContainer = document.querySelector('#playerChoicesContainer');
const computerChoicesContainer = document.querySelector('#computerChoicesContainer');

const overlay = document.querySelector('#overlay');
const gameFinished = document.querySelector('#gameFinished');
const gameFinishedText = document.querySelector('#gameFinishedText');
const resetButton = document.querySelector('#reset');

console.log(playerHealthBar)

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

let playerHealthBars = [];
let computerHealthBars = [];

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
            computerHealthBars.push(computerHealthBar.removeChild(computerHealthBar.lastElementChild))
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
        else {
            computerScore++
            totalRounds++
            playerHealthBars.push(playerHealthBar.removeChild(playerHealthBar.lastElementChild));
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }

    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            totalRounds++
            computerHealthBars.push(computerHealthBar.removeChild(computerHealthBar.lastElementChild))
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
        else {
            computerScore++
            totalRounds++
            playerHealthBars.push(playerHealthBar.removeChild(playerHealthBar.lastElementChild));
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++
            totalRounds++
            computerHealthBars.push(computerHealthBar.removeChild(computerHealthBar.lastElementChild))
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
        else {
            computerScore++
            totalRounds++
            playerHealthBars.push(playerHealthBar.removeChild(playerHealthBar.lastElementChild));
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;

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
    computerHealthBars.forEach(healthbar => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('player-healthbar')
        computerHealthBar.appendChild(newDiv)
    })

    playerHealthBars.forEach(healthbar => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('player-healthbar')
        playerHealthBar.appendChild(newDiv)
    })
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = 0;
    computerScoreText.innerText = 0;
    overlay.classList.remove('toggled');
    gameFinished.classList.remove('toggled');
    gameFinishedText.innerText = '';
    playerHealthBars = [];
    computerHealthBars = [];
    totalRounds = 0;
}