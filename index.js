const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const buttonContainer = document.querySelector('#buttonContainer');
const score = document.querySelector('#score')
const currRoundResult = document.querySelector("#result");
const winner = document.querySelector("#winner")

let computerWins = 0;
let playerWins = 0;
    

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

const clickEventHandler = (event) => {
    {
        if(playerWins < 5 && computerWins < 5) {
            let target = event.target;
            switch (target.id) {
                case 'rock':
                    currRoundResult.textContent = playGame(target.id.toUpperCase(), getComputerChoice());
                    break;
                case 'scissors':
                    currRoundResult.textContent = playGame(target.id.toUpperCase(), getComputerChoice());

                    break;
                case 'paper':
                    currRoundResult.textContent = playGame(target.id.toUpperCase(), getComputerChoice());

                    break;
                default:
                    currRoundResult.textContent = 'Please click on a button!';
                    break;
            }
            game();
    } else {
        playerWins === 5 ? winner.textContent = 'Player is the winner' : winner.textContent = 'Computer is the winner';
        buttonContainer.removeEventListener('click', clickEventHandler)
    }
        
}
}
    
buttonContainer.addEventListener('click', clickEventHandler) 
    



const game = () => {
    if (currRoundResult.textContent === 'Player wins'){
        playerWins++;
        console.log('Player wins this round')
    } else if ( currRoundResult.textContent === 'Computer wins') {
        computerWins++;
        console.log('Computer wins this round');
    } else if ( (currRoundResult.textContent === 'Something went wrong!') || (currRoundResult.textContent === 'Please click on a button!')) {
        console.log('Please provide a valid choice between rock, paper and scissors or scissor')
    } else {
        console.log('this round is a draw')
    }
        score.textContent = `Score: Computer: ${computerWins}, Player: ${playerWins}`
}

