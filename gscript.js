let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0; // Counter for attempts
let score = 0; // Score counter
let gameOver = false; // Flag to track game over status

// Get the buttons and assign event listeners
document.getElementById('guessButton').addEventListener('click', checkGuess);
document.getElementById('restartButton').addEventListener('click', resetGame);
document.getElementById('quitButton').addEventListener('click', quitGame);
document.getElementById('revealButton').addEventListener('click', revealAnswer);

// Function to check the guess
function checkGuess() {
    if (gameOver) return; // If game is over, don't allow more guesses

    const userGuess = document.getElementById('userGuess').value;
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');
    const clue1 = document.getElementById('clue1');
    const clue2 = document.getElementById('clue2');
    const clue3 = document.getElementById('clue3');

    if (!userGuess) {
        message.textContent = "Please enter a number!";
        message.style.color = "orange";
        return;
    }

    attempts++; // Increment attempt counter

    if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "red";
        clue1.textContent = `Clue 1: The number is higher than ${userGuess}.`;
        clue2.textContent = `Clue 2: Try guessing a number between ${parseInt(userGuess) + 1} and 100.`;
        clue3.textContent = `Clue 3: Your guess was too low, try guessing higher next time.`;
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "red";
        clue1.textContent = `Clue 1: The number is lower than ${userGuess}.`;
        clue2.textContent = `Clue 2: Try guessing a number between 1 and ${parseInt(userGuess) - 1}.`;
        clue3.textContent = `Clue 3: Your guess was too high, try guessing lower next time.`;
    } else if (userGuess == randomNumber) {
        message.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
        message.style.color = "green";
        score += 10; // Increase score by 10 for a correct guess
        scoreDisplay.textContent = score;
        gameOver = true; // Game over
    }
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    document.getElementById('userGuess').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('clue1').textContent = '';
    document.getElementById('clue2').textContent = '';
    document.getElementById('clue3').textContent = '';
}

// Function to quit the game
function quitGame() {
    if (confirm("Are you sure you want to quit? / Back to Portfolio?")) {
        window.location.href = "index.html";
    }
}

// Function to reveal the answer
function revealAnswer() {
    const message = document.getElementById('message');
    message.textContent = `The correct number is ${randomNumber}. Game over!`;
    message.style.color = "blue";
    gameOver = true;
}
