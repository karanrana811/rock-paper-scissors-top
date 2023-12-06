

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return 'ROCK';
    } else if (randomNum === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

const playGame = (playerChoice, computerChoice) => {
    console.log( computerChoice,  playerChoice)
    if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
        return 'Player wins'
    } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
        return 'Computer wins'
    } else if (playerChoice === 'SCISSORS' || playerChoice === 'SCISSOR' && computerChoice === 'SCISSORS') {
        return 'It\'s a draw'
    } else if (playerChoice === 'ROCK' && computerChoice === 'ROCK') {
        return 'It\'s a draw'
    } else if (playerChoice === 'PAPER' && computerChoice === 'PAPER') {
        return 'it\'s a draw'
    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        return 'Player wins'
    } else if (playerChoice === 
        'SCISSORS' || playerChoice === 'SCISSOR' && computerChoice === 'PAPER') {
            return 'Player wins'
    } else if (playerChoice === 'SCISSORS' || playerChoice === 'SCISSOR' && computerChoice === 'ROCK') {
        return 'Computer wins'
    } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        return 'Computer wins'
    } else {
        return 'Something went wrong!'
    }
}

console.log(playGame(prompt('What do you choose?').toUpperCase(), getComputerChoice()));