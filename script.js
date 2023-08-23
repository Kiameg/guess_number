"use strict";

const input = document.querySelector("#number");
const buttonSubmit = document.querySelector(".submit");
const buttonRefresh = document.querySelector(".refresh");
const randomNumber = Math.floor(Math.random() * 101);
const p = document.querySelector("p");
const animation = document.querySelector(".slideInLeft");

buttonSubmit.addEventListener("click", checkGuess);
buttonRefresh.addEventListener("click", refreshGame);
console.log(randomNumber);

input.value = "";

function checkGuess() {
  if (Number(input.value) < randomNumber) {
    p.textContent = "Number too low!";
    wrongGuess();
  }
  if (Number(input.value) > randomNumber) {
    p.textContent = "Number too high!";
    wrongGuess();
  }

  if (Number(input.value) === randomNumber) {
    p.textContent = "Number is correct!";
    p.style.color = "#00ab41";
    buttonRefresh.style.display = "block";
    buttonSubmit.style.display = "none";
    showAnimation();
  }
}

function showAnimation() {
  animation.style.display = "block";
}

function wrongGuess() {
  p.classList.add("tilt-shaking");
  delay(500).then(() => {
    p.classList.remove("tilt-shaking");
  });
}

function refreshGame() {
  location.reload();
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
