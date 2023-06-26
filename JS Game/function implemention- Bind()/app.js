const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;
const rock_button = document.getElementById("rock-btn");
const paper_button = document.getElementById("paper-btn");
const scissors_button = document.getElementById("scissors-btn");


let x = document.getElementById("toggle-div");
x.style.display = "none";
let selection = "";
let clicked = false;

let theMain = document.querySelector("#theMain")
theMain.addEventListener("click",clickChecker,false)

var clickedItem;
function clickChecker(e){
  if(e.target !== e.currentTarget){
    var clickedItem =e.target.id;
    
  }
  console.log(clickedItem)
}
const getPlayerChoice = (e) => {
  if (e.target !== e.currentTarget) {

    console.log(clickedItem)
  rock_button.addEventListener("click", () => {
    clicked = true;
      selection = ROCK;
      gameIsRunning = true;

  });
}
  else{
  paper_button.addEventListener("click", () => {
    clicked = true;
      selection = PAPER;
      gameIsRunning = true;
  });
}
  {
  scissors_button.addEventListener("click", () => {
    clicked = true;
      selection = SCISSORS;
      gameIsRunning = true;
  });
}
  if (startGameBtn) {
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
      return;
    }
  }

  return clicked ? selection : "Please Choose a weapon.";
};

const toggleDiv = () => {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// const getPlayerChoice = () => {
//   const selection = prompt(
//     `${ROCK}, ${PAPER} or ${SCISSORS}?`,
//     ""
//   ).toUpperCase();
//   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
//     alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
//     return;
//   }
//   return selection;
// };

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning && clicked) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game
