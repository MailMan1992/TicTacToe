let Gameboard = (() => {
  // let testBoard = [
  //   ["X", "X", "O"],
  //   ["O", "X", "O"],
  //   ["X", "O", "O"],
  // ];
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const getGameboard = () => {
    return gameboard;
  };

  const clearBoard = () => {
    for (let i = 0; i < gameboard.length; i++) {
      for (let y = 0; y < gameboard.length; y++) {
        gameboard[i][y] = "";
      }
    }
  };

  const checkboardWinner = (playerSymbol) => {
    for (let i = 0; i < gameboard.length - 1; i++) {
      if (
        gameboard[0][i] === playerSymbol &&
        gameboard[1][i] === playerSymbol &&
        gameboard[2][i] === playerSymbol
      ) {
        return true;
      }
      if (
        gameboard[i][0] === playerSymbol &&
        gameboard[i][1] === playerSymbol &&
        gameboard[i][2] === playerSymbol
      ) {
        return true;
      }
    }
    if (
      (gameboard[0][0] === playerSymbol &&
        gameboard[1][1] === playerSymbol &&
        gameboard[2][2] === playerSymbol) ||
      (gameboard[0][2] === playerSymbol &&
        gameboard[1][1] === playerSymbol &&
        gameboard[2][0] === playerSymbol)
    ) {
      return true;
    }
    return false;
  };

  return { getGameboard, clearBoard, checkboardWinner };
})();

export { Gameboard };
