// Buttons:
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
const ctcmPlayButton = document.querySelector("#ctcm-play-button");
const ctcmCodeButton = document.querySelector("#ctcm-code-button");
const ttsPlayButton = document.querySelector("#tts-play-button");
const ttsCodeButton = document.querySelector("#tts-code-button");
const dadJokePlayButton = document.querySelector("#djg-play-button");
const dadJokeCodeButton = document.querySelector("#djg-code-button");
const portfoliov1PlayButton = document.querySelector(
  "#portfoliov1-play-button"
);
const portfoliov1CodeButton = document.querySelector(
  "#portfoliov1-code-button"
);

//  Contact icons:
const githubIcon = document.querySelector("#github-icon");
const linkedinIcon = document.querySelector("#linkedin-icon");
const emailIcon = document.querySelector("#email-icon");
const phoneIcon = document.querySelector("#phone-icon");
const pdfIcon = document.querySelector("#pdf-icon");

// Project button links
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

// Dad Joke Generator
dadJokePlayButton.addEventListener("click", () => {
  window.open("https://djg-max-b10.netlify.app/");
});
dadJokeCodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/Dad-joke-generator");
});

// Portfolio V1
portfoliov1PlayButton.addEventListener("click", () => {
  window.open("https://portfoliov1-max-b10.netlify.app/");
});
portfoliov1CodeButton.addEventListener("click", () => {
  window.open("https://github.com/max-b10/MyPortfolio");
});

//  Contact icon links:
githubIcon.addEventListener("click", () => {
  window.open("https://github.com/max-b10");
});
linkedinIcon.addEventListener("click", () => {
  window.open("https://linkedin.com/in/max-bungay");
});
pdfIcon.addEventListener("click", () => {
  window.open("/CV Max Bungay 2021.pdf");
});
