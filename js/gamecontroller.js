import { Player } from "./player.js";
import { DisplayController } from "./displayController.js";
import { Gameboard } from "./gameboard.js";

let GameController = (() => {
  let gameboard = Gameboard.getGameboard();
  let webGameboard = document.querySelector(".tic-tac-toe");
  let player1;
  let player2;
  let round = 0;

  let setUpGame = (p1, p2, ...board) => {
    player1 = Player(gameboard);
    player2 = Player(gameboard);
    player1.setPlayerSymbol(p1);
    player2.setPlayerSymbol(p2);
    player1.setTurn(true);
    player2.setTurn(false);
    DisplayController.displayGame(gameboard);
  };

  const playGame = () => {
    webGameboard.addEventListener("click", (e) => {
      // console.log(e.target.children[0]);
      if (e.target.textContent === "") {
        let chosenPosition = e.target.dataset.position;
        let positionArray = [...chosenPosition.split(" ")];
        let row = positionArray[0];
        let col = positionArray[1];
        let currentSymbol;

        if (player1.getTurn()) {
          currentSymbol = player1.getPlayerSymbol();
          player1.playerMove(row, col);
          player1.setTurn(false);
          player2.setTurn(true);
          player1.setWin(Gameboard.checkboardWinner(player1.getPlayerSymbol()));
          if (player1.getWin()) {
            alert(`Player ${player1.getPlayerSymbol()} Wins`);

            resetGame();
          }
          // console.log(player1.getTurn());
          round++;
        } else if (player2.getTurn()) {
          currentSymbol = player2.getPlayerSymbol();
          player2.playerMove(row, col);
          player2.setTurn(false);
          player1.setTurn(true);
          Gameboard.checkboardWinner(player2.getPlayerSymbol());
          player2.setWin(Gameboard.checkboardWinner(player2.getPlayerSymbol()));
          if (player2.getWin()) {
            alert(`Player ${player2.getPlayerSymbol()} Wins`);
            resetGame();
          }
          round++;
        }
        e.target.children[0].textContent = currentSymbol;
      } else {
      }
      // console.log(round);
      // console.log(gameboard);
      if (round === 9) {
        resetGame();
        return true;
      }
    });
  };
  const resetGame = () => {
    round = 0;
    console.log(gameboard);
    Gameboard.clearBoard();
    gameboard = Gameboard.getGameboard();
    DisplayController.resetDisplay();
    setUpGame("X", "O", gameboard);
    // console.log(gameboard);
  };

  return { setUpGame, playGame };
})();

export { GameController };
