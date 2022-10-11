function getComputerChoice() {
  let randoms = ["rock", "paper", "scissor"];
  let random = randoms[Math.floor(Math.random() * randoms.length)];
  return random;
}

game();

function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Enter: ");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
    

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else if (
                playerSelection === "paper" &&
                computerSelection === "scissor"
            ) {
                console.log("You lose! Scissor beats Paper");
                computerScore++;
            } else if (
                playerSelection === "scissor" &&
                computerSelection === "rock"
            ) {
                console.log("You lose! Rock beats Scissor");
                computerScore++;
            } else if (
                playerSelection === "rock" &&
                computerSelection === "scissor"
            ) {
                console.log("You win! Rock beats Scissor");
                playerScore++;
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                console.log("You win! Paper beats Rock");
                playerScore++;
            } else if (
                playerSelection === "scissor" &&
                computerSelection === "paper"
            ) {
                console.log("You win! Scissor beats Paper");
                playerScore++;
            } else if (playerSelection === computerSelection) {
                console.log("Draw");
            }
        }
        console.log(playRound(playerSelection, computerSelection));
  }
  if(playerScore < computerScore) {
    console.log(`Computer score is ${computerScore}. So you lose!`)
  }else if(playerScore > computerScore) {
    console.log(`Your score is ${playerScore}. So you win!`)
  }
}


