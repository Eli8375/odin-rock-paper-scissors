let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//the computer's randomized plays
function computerPlay() {
        const randomNumber = Math.floor(Math.random() * choices.length);
        const computerChoices = choices[randomNumber];
        return computerChoices;
}

let computerSelection = computerPlay();

function playerWins() {
        playerScore++;
        console.log(playerScore, computerScore);
}

function playerLoses() {
        computerScore++;
        console.log(playerScore, computerScore);
}

function playerTies() {
        console.log(playerScore, computerScore);
}



function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
                (playerTies());
                return "It's a tie!";
        }
        if (playerSelection.toLowerCase() === choices[0]) {
                if (computerSelection === choices[2]) {
                        playerWins();
                        return "You win! Rock beats scissors.";
                } else {
                        playerLoses();
                        return "You lose! Paper beats rock.";
                }
        }
        if (playerSelection.toLowerCase() === choices[1]) {
                if (computerSelection === choices[0]) {
                        playerWins();
                        return "You win! Paper beats rock.";
                } else {
                        playerLoses();
                        return "You lose! scissors beats paper.";
                }
        }
        if (playerSelection.toLowerCase() === choices[2]) {
                if (computerSelection === choices[1]) {
                        playerWins();
                        return "You win! scissors beats paper.";
                } else {
                        playerLoses();
                        return "You lose! rock beats scissors.";
                }
        }
        else {
                return "Please input a correct response!";
        }
}

function game() {
        let playerSelection = window.prompt("Make your choice!");
        console.log(playRound(playerSelection, computerSelection));
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore >= 3) {
                return "You won the game!";
        } else if (computerScore >= 3) {
                return "You lost the game!";
        } else {
                return "The game ends in a draw!";
        }
        
}

console.log(game());