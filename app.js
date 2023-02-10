function getComputerChoice() {
    const choices = ['paper', 'rock', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]

}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Pick paper, rock or scissor".toLowerCase());



function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
}

/* playRound(playerSelection, computerSelection) */