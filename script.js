


let answers = ["rock", "paper", "scissors"]


//function possibilities() {
//    if (playerSelection === "rock" && computerSelection === "paper") {
//        alert("You lose! Paper beats rock");
//    }
//    else if (playerSelection === "rock" && computerSelection === "rock") {
//        alert("You tie! Rock = rock");
//    }
//    else if (playerSelection === "rock" && computerSelection === "scissors") {
//        alert("You win! Rock beats scissors");
//    }
//    else if (playerSelection === "paper" && computerSelection === "paper") {
//        alert("You tie!");
//    }
//    else if (playerSelection === "paper" && computerSelection === "rock") {
//        alert("You win!");
//    }
//    else if (playerSelection === "paper" && computerSelection === "scissors") {
//        alert("You lose!");
//    }
//    else if (playerSelection === "scissors" && computerSelection === "paper") {
//        alert("You win!");
//    }
//    else if (playerSelection === "scissors" && computerSelection === "rock") {
//        alert("You lose!");
//    }
//    else (playerSelection === "scissors" && computerSelection === "scissors") {
//       alert("You tie!");
//    }
//}




function computerPlay(answers) {
    return answers[Math.floor(Math.random() * answers.length)];
}



function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats rock");
    }   else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("You tie! Rock = rock");
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats scissors");
    }   else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("You tie! Paper = Paper");
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats rock");
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beats paper");
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beats paper");
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats scissors");
    }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("You tie! Scissors = scissors");
    }
}

playRound("scissors", computerPlay(answers));
//console.log(playRound("rock", computerSelection));
