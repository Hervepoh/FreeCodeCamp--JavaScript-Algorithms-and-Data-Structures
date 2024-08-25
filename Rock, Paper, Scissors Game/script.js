const playerSpan = document.getElementById("player");
const computerSpan = document.getElementById("computer");
const optionsContainer = document.getElementById("options-container");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset-game-btn");
const countTurnMsg = document.getElementById("turn-msg");
const resultsMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");

const options = ["rock", "paper", "scissors"];
const maxScore = 3;

let playerScore = 0;
let computerScore = 0;

let turnCounter = 0;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRandomComputerResult() {
  return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
  const userChoice = player.toLowerCase();
  const computerChoice = computer.toLowerCase();
  return (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  );
}

function getRoundResults(player) {
  const computer = getRandomComputerResult();
  if (player === computer) {
    return "It's a tie! Both chose " + player;
  } else if (hasPlayerWonTheRound(player, computer)) {
    playerScore++;
    return `Player wins! ${player} beats ${computer}`;
  } else {
    computerScore++;
    return `Computer wins! ${computer} beats ${player}`;
  }
}

function displayResult(userOption) {
  const message = getRoundResults(userOption);

  playerSpan.innerText = playerScore;
  computerSpan.innerText = computerScore;

  countTurnMsg.innerText = `Number of turns : ${turnCounter+=1}`;
  resultsMsg.innerText = message;

  if (playerScore === maxScore || computerScore === maxScore) {
    optionsContainer.style.display = "none";
    resetButton.style.display = "block";
    winnerMsg.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  turnCounter= 0;
  playerSpan.innerText = 0;
  computerSpan.innerText = 0;
  optionsContainer.style.display = "block";
  resetButton.style.display = "none";
  countTurnMsg.innerText = "";
  resultsMsg.innerText = "";
  winnerMsg.innerText = "";
}

rockButton.addEventListener("click", () => {
  displayResult("rock");
});
paperButton.addEventListener("click", () => {
  displayResult("paper");
});
scissorsButton.addEventListener("click", () => {
  displayResult("scissors");
});

resetButton.addEventListener("click", resetGame);
