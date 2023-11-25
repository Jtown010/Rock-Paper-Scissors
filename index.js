function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playerSelection() {
   let choice = prompt("Throw!");
   choice = choice.toLowerCase();
   return choice;
}

let computerSelection = getComputerChoice();


