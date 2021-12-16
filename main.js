import { GameController } from "./js/gamecontroller.js";

let startButton = document.getElementById("play");

startButton.addEventListener("click", start);

function start() {
  document.querySelector(".play-container").classList.add("invisible");
  document.querySelector(".container").classList.add("visible");
  let player1 = document.querySelector("#player1").value;
  let player2 = document.querySelector("#player2").value;
  GameController.setupGame(player1, player2);
}
