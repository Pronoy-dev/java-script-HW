// == Player one info
const playerOneBox = document.querySelector(".playerOneBox");
const player_one = document.querySelector(".player_one");
const playerOneError = document.querySelector(".playerOneError");
const playerOneInputField = document.querySelector(".playerOneInputField");
const startBtn = document.querySelector(".startBtn");
// == Player one info

// == Player two info
const playerTwoBox = document.querySelector(".playerTwoBox");
const player_two = document.querySelector(".player_two");
const playerTwoError = document.querySelector(".playerTwoError");
const playerTwoInputField = document.querySelector(".playerTwoInputField");
const GuessBtn = document.querySelector(".GuessBtn");
const PlayAgainBtn = document.querySelector(".PlayAgainBtn");
// == Player two info

// ======= Player game start
let playerOneNumber = null;
startBtn.addEventListener("click", () => {
  const playerOneValue = playerOneInputField.value;
  if (isNaN(playerOneValue)) {
    playerOneError.innerHTML = "This is invalid input give a number";
    playerOneError.style.textTransform = "capitalize";
    playerOneError.style.color = "Red";
  } else if (playerOneValue < 0 || playerOneValue > 10) {
    playerOneError.innerHTML = "Value must be 1 to 10";
    playerOneError.style.textTransform = "capitalize";
    playerOneError.style.color = "Red";
  } else {
    playerOneError.innerHTML = "Well , you are giving a right input";
    playerOneError.style.textTransform = "capitalize";
    playerOneError.style.color = "Green";
    playerOneNumber = playerOneValue;

    // ===== Player two box arrived

    playerOneBox.style.display = "none";
    playerTwoBox.style.display = "block";
  }
});

// ===== Guess functionality
let chance = 3;

GuessBtn.addEventListener("click", () => {
  playerTwoValue = playerTwoInputField.value;
  if (isNaN(playerTwoValue)) {
    playerTwoError.innerHTML = "This is invalid input give a number";
    playerTwoError.style.textTransform = "capitalize";
    playerTwoError.style.color = "Red";
  } else if (playerTwoValue < 0 || playerTwoValue > 10) {
    playerTwoError.innerHTML = "Value must be 1 to 10";
    playerTwoError.style.textTransform = "capitalize";
    playerTwoError.style.color = "Red";
  } else {
    chance--;

    if (playerTwoValue == playerOneNumber) {
      GuessBtn.style.display = "none";
      playerTwoInputField.style.display = "none";
      playerTwoError.style.display = "none";
      player_two.innerHTML = "** Win **";
      player_two.style.color = "Green";
      PlayAgainBtn.style.display = "block";
    } else {
      player_two.innerHTML = `You have ${chance} chance left`;
      player_two.style.color = "Red";
      if (chance == 0) {
        GuessBtn.style.display = "none";
        playerTwoInputField.style.display = "none";
        playerTwoError.style.display = "none";
        player_two.innerHTML = "** Game Over **";
        player_two.style.color = "Red";
        PlayAgainBtn.style.display = "block";
      }
    }
  }
});

// ======= Player game start

// ======= Play Again Btn Work

PlayAgainBtn.addEventListener("click", () => {
  location.reload();
});

// ======= Play Again Btn Work

// ======= game making done
