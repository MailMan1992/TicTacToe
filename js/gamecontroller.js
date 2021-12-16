import { EasyAI, HardAI, Human } from "./player.js";
import { DisplayController } from "./displayController.js";
import { Gameboard } from "./gameboard.js";

let GameController = (() => {
  let player1;
  let player2;
  let gameboard = Gameboard.getGameboard();

  const setupGame = (p1, p2) => {
    player1 =
      p1 === "hardAI"
        ? HardAI(gameboard)
        : p1 === "easyAI"
        ? EasyAI(gameboard)
        : p1 === "human"
        ? Human(gameboard)
        : null;
  };

  return { setupGame };
})();

export { GameController };
