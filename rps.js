
const options = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;

const randomInt = (max) => {
    let randomNumber = Math.floor(Math.random() * max);

    //console.log(`Random number = ${randomNumber}`); 
    return randomNumber;
}

const computerPlay = () => {
    let randomNumber = randomInt(options.length);

    return options[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
    let playerWon = false;
    let tieGame = false;

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
        console.log(`Tie Game! You both chose: ${playerSelection}`);
        return;
    }

    if (playerWon) {
        playerScore++;
        console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
    }
    else {
        computerScore++;
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
    }
    return;
}

const getPlayerChoiceFromPrompt = () => {
    let playerChoice = window.prompt("Choose: ROCK, PAPER, or SCISSORS", "ROCK");

    if (playerChoice == null // cancel button
        || playerChoice == '' // empty input
        || !isNaN(playerChoice) // is a number
        || !options.includes(playerChoice.toUpperCase()) // not in options array
    ) {
        alert("Invalid choice");
        return getPlayerChoiceFromPrompt();
    }

    return playerChoice.toUpperCase();
}

const game = (rounds = 1) => {
    console.log(`Let's play ${rounds} rounds of rock, paper, scissors!`);

    for (let i = 1; i <= rounds; i++) {
        console.log("");
        console.log(`ROUND ${i}!`);

        let playerSelection = getPlayerChoiceFromPrompt();
        let computerSelection = computerPlay();

        console.log(`Player chose '${playerSelection}' | Computer chose '${computerSelection}'`);

        playRound(playerSelection, computerSelection);
    }

    console.log("");
    console.log("");
    console.log("FINAL SCORES");
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    if (playerScore == computerScore) {
        console.log("TIE!");
    }
    else if (playerScore > computerScore) {
        console.log("You WIN!");
    }
    else {
        console.log("Computer WINS!");
    }
}

let rounds = 5;
game(rounds);