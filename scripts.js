const playerCounter = document.querySelector('#player-card-number');
const computerCounter = document.querySelector('#computer-card-number');

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const description = document.querySelector('.description');


let playerScore = 0;
let computerScore = 0;
let isGameOver = false;


btnRock.addEventListener('click', () => roundResult('rock'));
btnPaper.addEventListener('click', () => roundResult('paper'));
btnScissors.addEventListener('click', () => roundResult('scissors'));
playerCounter.addEventListener('change', () => changeColor());








// FUNCTIONS //
function changeColor() {
    playerCounter.style.color = 'green';
}

function randomNumberGenerator(min = 1, max = 3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomComputerTurn() {
    let randomNumber = randomNumberGenerator();

    switch (randomNumber) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
        default: break;
    }
}

function roundResult(playerChoice) {
    let computerChoice = randomComputerTurn()

    if (!isGameOver && playerScore < 3 && computerScore < 3) {
        if (playerChoice === computerChoice) {
            description.innerHTML = 'TIE!';
        }
        else if (playerChoice === 'rock' && computerChoice === 'paper') {
            description.innerHTML = "AI picked PAPER - You lost this round!";
            computerScore++;
            computerCounter.innerHTML = computerScore.toString();
        }
        else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            description.innerHTML = "AI picked SCISSORS - You win this round!";
            playerScore++;
            playerCounter.innerHTML = playerScore.toString();
        }
        else if (playerChoice === 'paper' && computerChoice === 'rock') {
            description.innerHTML = "AI picked ROCK - You win this round!";
            playerScore++;
            playerCounter.innerHTML = playerScore.toString();
        }
        else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            description.innerHTML = "AI picked SCISSORS - You lost this round!";
            computerScore++;
            computerCounter.innerHTML = computerScore.toString();
        }
        else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            description.innerHTML = "AI picked ROCK - You lost this round!";
            computerScore++;
            computerCounter.innerHTML = computerScore.toString();
        }
        else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            description.innerHTML = "AI picked PAPER - You win this round!";
            playerScore++;
            playerCounter.innerHTML = playerScore.toString();
        }
        else {
            console.log('Something went wrong!');
        }
    }
    else {
        description.innerHTML = "GAME OVER!";
    }
}