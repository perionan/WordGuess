// 🧠 Starter Word Guess Game — Keyboard Input Ready
window.alert("Welcome to the Guess the Word game!");

// Word bank
var words = ["javascript", "array", "loop", "variable"];

// Randomly select one word from the list
var chosenWord = words[Math.floor(Math.random() * words.length)];
let wordArray = chosenWord.split("");
let guessArray = new Array(wordArray.length).fill("_");

let vizWord = document.querySelector("#maskedWord");
vizWord.textContent = guessArray.join(" ");
let vizGuessed = document.querySelector("#guessedLetters");
let vizAttempts = document.querySelector("#attempts");

// Track guessed letters and remaining attempts
var guessedLetters = [];
var attempts = 10;
vizAttempts.textContent = attempts;

// Log the chosen word for debugging
console.log("Chosen word:", chosenWord);

// 🎮 Function students will build next
function startGame(letter) {
  console.log(`You pressed: ${letter}`);

  if (!wordArray.includes(letter)) {
    attempts -= 1;
    vizAttempts.textContent = attempts;
    guessedLetters.push(letter);
    vizGuessed.textContent = guessedLetters.join(" ");

    if(attempts <= 0) {
      window.alert("Sorry you lose!");
      window.location.reload();
    }

  } else {

    while (wordArray.includes(letter)) {
      let letterIndex = wordArray.indexOf(letter);
      guessArray[letterIndex] = letter;
      wordArray[letterIndex] = "_";
    }

    vizWord.textContent = guessArray.join(" ");

    if (guessArray.join("") === chosenWord) {
      window.alert(`You guessed the word ${chosenWord}!`);
      
      if (window.confirm("Play again?")) {
        window.location.reload();
      } else {
        window.alert("Leave then.");
      }
    }

  }

  // TODO:
  // 1️⃣ Build a masked string using underscores for letters not yet guessed.
  // 2️⃣ Track guessed letters and remaining attempts.
  // 3️⃣ Detect win or loss and display a message.
  // 4️⃣ (Bonus) Show guessed letters and progress dynamically in the console or DOM.
}

// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  } else {
    console.log("Please press a valid letter (A–Z).");
  }
});
