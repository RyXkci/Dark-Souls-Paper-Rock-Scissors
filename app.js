const buttons = Array.from(document.querySelectorAll('.btn'));

const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');

let playerSelection = '';
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
    })
}))



function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) return `It's a draw! Both ${playerSelection}`
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++
            totalRounds++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
        else {
            computerScore++
            totalRounds++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }

    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            totalRounds++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
        else {
            computerScore++
            totalRounds++
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
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
        }
        else {
            computerScore++
            totalRounds++
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
            console.log('You won')
        }
        else {
            console.log('You lost')
        }
    }
}