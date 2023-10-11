// (1) create an array of choices
// (2) write a function to choose randomly from it by the computer
// (3) return the output

const choices = ["ROCK", "PAPER", "SCISSORS"];
let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

// console.log(getComputerChoice());

// (1) take input using prompt
// (2) make it all upper case
// (3) make a const to hold the values of the user choice and computer choice
// (4) write a function accepting two parameters

function playRound(userSelection, computerSelection) {
  if (userSelection == computerSelection) {
    return `tie`;
  } else if ((userSelection == "ROCK" && computerSelection == "SCISSORS") || (userSelection == "PAPER" && computerSelection == "ROCK") || (userSelection == "SCISSORS" && computerSelection == "PAPER")) {
    userScore++;
    return `You won! ${userSelection} beats ${computerSelection}.`;
  } else if ((userSelection == "ROCK" && computerSelection == "PAPER") || (userSelection == "PAPER" && computerSelection == "SCISSORS") || (userSelection == "SCISSORS" && computerSelection == "ROCK")) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${userSelection}.`;
  }
}

let i = 0;
function game() {
  while (i < 5) {
    let userSelection = prompt("Enter your choice: ").toUpperCase();
    let computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    console.log(userSelection);
    console.log(computerSelection);
    // console.log(getComputerChoice());
    console.log(userScore);
    console.log(computerScore);
    i++;
  }
}
console.log(game());
