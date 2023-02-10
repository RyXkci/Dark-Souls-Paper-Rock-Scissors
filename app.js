const buttons = Array.from(document.querySelectorAll('.btn'));

const playerScoreText = document.querySelector('#playerScoreText');
const computerScoreText = document.querySelector('#computerScoreText');

let playerSelection = '';

console.log(buttons)

buttons.forEach((button => {
    button.addEventListener('click', () => {
        playerSelection = button.name
    })
}))


function getComputerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]

}


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) return `It's a draw! Both ${playerSelection}`
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
            return `You won! ${playerSelection} beats ${computerSelection}!`
        }
        else {
            computerScore++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }

    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
            return `You won! ${playerSelection} beats ${computerSelection}!`
        }
        else {
            computerScore++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
            return `You won! ${playerSelection} beats ${computerSelection}!`
        }
        else {
            computerScore++
            console.log(`***Player score is ${playerScore}***`)
            console.log(`***Computer Score is ${computerScore}***`)
            playerScoreText.innerText = playerScore;
            computerScoreText.innerText = computerScore;
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice();
        playerSelection = playerSelection;
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        return `You won the match!`
    }
    else {
        return `You lost the match!`
    }
}
/* playRound(playerSelection, computerSelection) */