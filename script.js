const solution = "BANANA"; // Replace with dynamic word generation if needed
const maxAttempts = 100;

document.addEventListener("DOMContentLoaded", () => {
  createGrid(solution.length, maxAttempts);

  document.getElementById("submit").addEventListener("click", handleGuess);
});

function createGrid(wordLength, attempts) {
  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${wordLength}, 40px)`; // Adjust grid columns dynamically

  for (let i = 0; i < wordLength * attempts; i++) {
    const cell = document.createElement("div");
    grid.appendChild(cell);
  }
}

let currentAttempt = 0;

function handleGuess() {
  const guess = document.getElementById("guess").value.toUpperCase();

  if (guess.length !== solution.length) {
    alert(`Please enter a ${solution.length}-letter word!`);
    return;
  }

  const start = currentAttempt * solution.length;
  const gridCells = document.querySelectorAll("#grid div");

  for (let i = 0; i < solution.length; i++) {
    const cell = gridCells[start + i];
    cell.textContent = guess[i];

    if (guess[i] === solution[i]) {
      cell.classList.add("correct");
    } else if (solution.includes(guess[i])) {
      cell.classList.add("present");
    } else {
      cell.classList.add("absent");
    }
  }

  currentAttempt++;

  if (guess === solution) {
    document.getElementById("result").textContent = "Congratulations! You guessed the word!";
    document.getElementById("submit").disabled = true;
  } else if (currentAttempt === maxAttempts) {
    document.getElementById("result").textContent = `Game Over! The word was ${solution}.`;
    document.getElementById("submit").disabled = true;
  }

  document.getElementById("guess").value = "";
}
