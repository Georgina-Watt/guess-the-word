const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector (".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessElement = document.querySelector(".remaining");
const remaingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".playAgain");

const word = "magnolia";
const guessedLetters = [];

// Display a symbol as placeholders for letter 
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter)
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText ="";
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    } 
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.lenght === 0) {
        message.innertext = "Please enter a letter.";
    } else if (input.length > 1) {
            message.innertext = "Please enter a single letter";
    } else if (input.match(acceptedLetter)) {
        message.innerText ="Please enter a letter from A to Z"; 
    } else {
    return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, try again";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
}
};

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append("li");
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase ();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of WordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
   console.log(revealWord);
   wordInProgress.innerText = revealWorld.join("");
   checkIfWin();
};

const checkIfWIn = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win")
        message.innerHTML = `<p class="highlight"> You guessed the correct word! Congrats!</p>`
    }
};