const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector("#result");


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
    } else if (playerChoice === 'SCISSORS' && computerChoice === 'SCISSORS') {
        return 'It\'s a draw'
    } else if (playerChoice === 'ROCK' && computerChoice === 'ROCK') {
        return 'It\'s a draw'
    } else if (playerChoice === 'PAPER' && computerChoice === 'PAPER') {
        return 'It\'s a draw'
    } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        return 'Player wins'
    } else if (playerChoice === 
        'SCISSORS' && computerChoice === 'PAPER') {
            return 'Player wins'
    } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        return 'Computer wins'
    } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        return 'Computer wins'
    } else {
        return 'Something went wrong!'
    }
}

rockButton.addEventListener('click', (e) => {
    result.textContent = playGame(e.target.id.toUpperCase(), getComputerChoice());
});

paperButton.addEventListener('click', (e) => {
    result.textContent = playGame(e.target.id.toUpperCase(), getComputerChoice());
});

scissorsButton.addEventListener('click', (e) => {
    console.log(e.target.id)
    result.textContent = playGame(e.target.id.toUpperCase(), getComputerChoice());
});

// console.log(playGame(prompt('What do you choose?').toUpperCase(), getComputerChoice()))

// const game = () => {
//     let computerWins = 0;
//     let playerWins = 0;

//     for (let i=0 ; i < 5 ; i++){
//         const result = playGame(prompt('What do you choose?').toUpperCase(), getComputerChoice());
//         if (result === 'Player wins'){
//             playerWins++;
//             console.log('Player wins this round')
//         } else if ( result === 'Computer wins') {
//             computerWins++;
//             console.log('Computer wins this round');
//         } else if ( result === 'Something went wrong!') {
//             i--;
//             console.log('Please provide a valid choice between rock, paper and scissors or scissor')
//         } else {
//             i--;
//             console.log('this round is a draw')
//         }
//     }

//     return playerWins > computerWins ? `Player wins` : 'Computer Wins';
// }

// console.log(game());