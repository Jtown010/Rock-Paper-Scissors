function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
 
function playRound(playerChoice, computerSelection) {
    if (playerChoice === "rock" && computerSelection === "paper") {
        return "You lose";
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        return "You win";
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        return "You win";
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        return "You lose";
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        return "You lose";
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You win";
    } else {
        return "Draw";
    }
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Throw!");
        playerChoice = playerChoice.toLowerCase();
        let computerSelection = getComputerChoice();

        let roundResult = playRound(playerChoice, computerSelection);
        
        console.log("Round: " + [i + 1]);
        console.log("Computer: " + computerSelection);
        console.log("You: " + playerChoice);
        console.log(roundResult);
        console.log("");

        if (roundResult === "You lose") {
            computerScore = computerScore + 1;
        } else if (roundResult === "You win") {
            playerScore = playerScore + 1;
        } 
    }

    if (playerScore > computerScore) {
        console.log("You WIN the game!");
    } else if (playerScore < computerScore) {
        console.log("You LOSE the game!");
    } else {
        console.log("The game is a draw");
    }

    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Thanks for throwing down!");
}







