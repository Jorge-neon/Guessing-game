const words = ["apple", "banana", "grape", "mango", "orange", "lemon"];
let secretWord;
let maxAttempts = 5;
let attemptsLeft;
let gameOver = false;

const message = document.getElementById("message");
const hint = document.getElementById("hint");
const input = document.getElementById("guessInput");

function chooseRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function initializeGame() {
  secretWord = chooseRandomWord();
  attemptsLeft = maxAttempts;
  gameOver = false;
  message.textContent = "";
  input.value = "";
  document.body.style.backgroundColor = "#f4f4f4";
  hint.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
}

function checkGuess() {
  if (gameOver) return;

  let userGuess = input.value.trim().toLowerCase();
  input.value = "";

  if (!userGuess) {
    message.textContent = `Incorrect guess. You have ${--attemptsLeft} attempts left. Try again!`;
  } else if (userGuess === secretWord.toLowerCase()) {
    message.textContent = "🎉 Congratulations! You guessed the secret word!";
    document.body.style.backgroundColor = "#a2f5a2"; // green for win
    gameOver = true;
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      message.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    } else {
      message.textContent = `💀 Game over! The secret word was '${secretWord}'.`;
      document.body.style.backgroundColor = "#f5a2a2"; // red for loss
      gameOver = true;
    }
  }
}

function restartGame() {
  initializeGame();
}


input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Start the game initially
initializeGame();
