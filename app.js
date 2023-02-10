function getComputerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]

}





function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection === computerSelection) return `It's a draw! Both ${playerSelection}`
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return `You won! ${playerSelection} beats ${computerSelection}!`
        }
        else {
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }

    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return `You won! ${playerSelection} beats ${computerSelection}!`
        }
        else {
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return `You won! ${playerSelection} beats ${computerSelection}!`
        }
        else {
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    }
}

function game(fn) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Pick paper, rock or scissor".toLowerCase());
    return fn(playerSelection, computerSelection)
}
/* playRound(playerSelection, computerSelection) */