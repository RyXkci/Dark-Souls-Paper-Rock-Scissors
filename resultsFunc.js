const resultsFunc = ({
    score,
    winner,
    healthBar
}) => {
    winner.innerText = score;
    healthBar.removeChild(healthBar.lastElementChild);
}

