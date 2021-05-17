// Buttons Variables:
const flappyBirdPlayButton = document.querySelector("#flappy-bird-play-button");
const flappyBirdCodeButton = document.querySelector("#flappy-bird-code-button");
const snakePlayButton = document.querySelector("#snake-play-button");
const snakeCodeButton = document.querySelector("#snake-code-button");
const breakoutPlayButton = document.querySelector("#breakout-play-button");
const breakoutCodeButton = document.querySelector("#breakout-code-button");
const calculatorPlayButton = document.querySelector("#calculator-play-button");
const calculatorCodeButton = document.querySelector("#calculator-code-button");
const hangmanPlayButton = document.querySelector("#hangman-play-button");
const hangmanCodeButton = document.querySelector("#hangman-code-button");
const todoListPlayButton = document.querySelector("#todo-list-play-button");
const todoListCodeButton = document.querySelector("#todo-list-code-button");
const scoreKeeperPlayButton = document.querySelector(
  "#score-keeper-play-button"
);
const scoreKeeperCodeButton = document.querySelector(
  "#score-keeper-code-button"
);
const ctcmPlayButton = document.querySelector("#ctcm-play-button");
const ctcmCodeButton = document.querySelector("#ctcm-code-button");
const profileCardPlayButton = document.querySelector(
  "#profile-card-play-button"
);
const profileCardCodeButton = document.querySelector(
  "#profile-card-code-button"
);
const ttsPlayButton = document.querySelector("#tts-play-button");
const ttsCodeButton = document.querySelector("#tts-code-button");

// Button links
// Flappy Bird
flappyBirdPlayButton.addEventListener("click", () => {
  window.open("https://flappy-bird-max-b10.netlify.app/");
});
flappyBirdCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/flappy-bird");
});

// Snake
snakePlayButton.addEventListener("click", () => {
  window.open("https://snake-max-b10.netlify.app/");
});
snakeCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/snake");
});

// Breakout
breakoutPlayButton.addEventListener("click", () => {
  window.open("https://brick-breaker-max-b10.netlify.app/");
});
breakoutCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/Brick-Breaker");
});

// Calculator
calculatorPlayButton.addEventListener("click", () => {
  window.open("https://calculator-max-b10.netlify.app/");
});
calculatorCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/JS-Calculator");
});

// Hangman
hangmanPlayButton.addEventListener("click", () => {
  window.open("https://max-b10-hangman.netlify.app/");
});
hangmanCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/hangman");
});

// Todo-List
todoListPlayButton.addEventListener("click", () => {
  window.open("https://max-b10-todolist.netlify.app/");
});
todoListCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/todo-app");
});

// Compare the Crypto Market
ctcmPlayButton.addEventListener("click", () => {
  window.open("https://ctcm-max-b10.netlify.app");
});
ctcmCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/Crypto-Compare-App");
});

// Text to Speech
ttsPlayButton.addEventListener("click", () => {
  window.open("https://tts-max-b10.netlify.app/");
});
ttsCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/Text-To-Speech");
});
