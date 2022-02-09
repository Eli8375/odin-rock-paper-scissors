let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rButton = document.getElementById("r");
let pButton = document.getElementById("p");
let sButton = document.getElementById("s");
let pScore = document.getElementById("pScore");
let cScore = document.getElementById("cScore");
let winner = document.getElementById("winner");

let rEffects = document.querySelector("#r")
let pEffects = document.querySelector("#p")
let sEffects = document.querySelector("#s")

rButton.addEventListener("click", function () {
    playRound(choices[0])
})

pButton.addEventListener("click", function () {
    playRound(choices[1])
})

sButton.addEventListener("click", function () {
    playRound(choices[2])
})







//the computer's randomized plays
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const computerChoices = choices[randomNumber];
    return computerChoices;
}









function playerWins() {
    playerScore++
    pScore.textContent = `Player Score: ${playerScore}`
}

function playerLoses() {
    computerScore++
    cScore.textContent = `Computer Score: ${computerScore}`
}

function playerTies() {
}









function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        playerTies()
    }
    if (playerSelection === choices[0]) {
        if (computerSelection === choices[2]) {
            playerWins()
        } else if (computerSelection === choices[1]) {
            playerLoses()
        }
    }
    if (playerSelection === choices[1]) {
        if (computerSelection === choices[0]) {
            playerWins();
        } else if (computerSelection === choices[2]) {
            playerLoses()
        }
    }
    if (playerSelection === choices[2]) {
        if (computerSelection === choices[1]) {
            playerWins()
        } else if (computerSelection === choices[0]) {
            playerLoses()
        }
    }
    else if (!choices) {
        console.log("Please input a correct response!")
    }
    game()
}









function game() {
    if (playerScore == 5) {
        winner.textContent = "Player Wins!"
    } else if (computerScore == 5) {
        winner.textContent = "Computer Wins!"
    }       
}