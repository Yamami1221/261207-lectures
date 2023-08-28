let answer;

const pResult = document.querySelector("#result");
const inputGuess = document.getElementById("input-guess");
const btnGuess = document.getElementById("btn-guess");
const btnRestart = document.getElementById("btn-restart");

restartGame();

function restartGame() {
  answer = Math.floor(Math.random() * 10) + 1;
  pResult.innerText = "";
  inputGuess.value = "";
}

btnGuess.onclick = () => {
  const guessValue = Number(inputGuess.value);
  if (guessValue > answer) {
    pResult.innerText = "Too Much 😥";
  } else if (guessValue < answer) {
    pResult.innerText = "Too Low 😥";
  } else pResult.innerText = `Correct 🎉🎉🎉 Answer is ${answer} `;

  pResult.className = "animate__animated animate__headShake";
  setTimeout(() => {
    pResult.className = "";
  }, 1000);
};

btnRestart.onclick = () => {
  restartGame();
};
