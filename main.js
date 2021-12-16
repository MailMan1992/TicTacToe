import { GameController } from "./js/gamecontroller.js";

let startButton = document.getElementById("play");
startButton.addEventListener("click", start);

function start() {
  document.querySelector(".play-container").classList.add("invisible");
  document.querySelector(".container").classList.add("visible");
  GameController.setUpGame("X", "O");
  GameController.playGame();
}
