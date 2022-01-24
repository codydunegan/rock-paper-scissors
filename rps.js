const randomInt = (max) => {
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}

const computerPlay = () => {
    let randomNumber = randomInt(options.length);

    return options[randomNumber];
}

const playRound = (playerSelection) => {
    let playerWon = false;
    let tieGame = false;

    let computerSelection = computerPlay();

    switch(playerSelection) {
        case computerSelection:
            tieGame = true;
            break;
        case "ROCK":
            if (computerSelection == "SCISSORS") {
                playerWon = true;
            }
            break;
        case "PAPER":
            if (computerSelection == "ROCK") {
                playerWon = true;
            }
            break;
        case "SCISSORS":
            if (computerSelection == "PAPER") {
                playerWon = true;
            }
            break;
        default:
    }

    if (tieGame) {
        addLog(`Tie Game! You both chose: ${playerSelection}`);
    }
    else if (playerWon) {
        playerScore++;
        addLog(`You won! ${playerSelection} beats ${computerSelection}!`);
    }
    else {
        computerScore++;
        addLog(`You lost! ${computerSelection} beats ${playerSelection}!`);
    }

    updateUI();

    if (playerScore >= winningScore || computerScore >= winningScore) {
        determineWinner();
    }
}

const determineWinner = () => {
    rockButton.removeEventListener('click', buttonClick);
    paperButton.removeEventListener('click', buttonClick);
    scissorsButton.removeEventListener('click', buttonClick);
    
    let winMessage = "";
    if (playerScore == computerScore) {
        winMessage = "TIE!";
    }
    else if (playerScore > computerScore) {
        winMessage = "You WIN!";
    }
    else {
        winMessage = "Computer WINS!";
    }

    addLog(winMessage);

    setTimeout(() => {
        alert(winMessage);
        resetScoresAndUI();
    }, 10);
}

const buttonClick = (event) => {
    playRound(event.target.id.toUpperCase());
}

const resetScoresAndUI = () => {
    playerScore = 0;
    computerScore = 0;

    updateUI();

    outputConsole.innerText = "";
    addLog("Player joined!");

    rockButton.addEventListener('click', buttonClick);
    paperButton.addEventListener('click', buttonClick);
    scissorsButton.addEventListener('click', buttonClick);
}

const updateUI = () => {
    playerScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = computerScore;
}

const addLog = (message) => {
    console.log(message);

    let logItem = document.createElement("p");
    logItem.innerText = message;

    outputConsole.prepend(logItem);
}

const options = ["ROCK", "PAPER", "SCISSORS"];

let winningScore = 5;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerScoreDiv = document.querySelector("#player");
const computerScoreDiv = document.querySelector("#computer");

const outputConsole = document.querySelector("#output-console");

resetScoresAndUI();