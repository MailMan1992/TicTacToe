const Player = (board) => {
  let playerSymbol;
  let turn;
  let win;

  const setPlayerSymbol = (input) => {
    playerSymbol = input;
  };

  const getPlayerSymbol = () => {
    return playerSymbol;
  };

  const setWin = (value) => {
    win = value;
  };

  const getWin = () => {
    return win;
  };
  const setTurn = (value) => {
    turn = value;
  };

  const getTurn = () => {
    return turn;
  };
  const playerMove = (row, col) => {
    if (board[row][col] != "") {
      alert("taken");
    } else {
      board[row][col] = getPlayerSymbol();
    }
  };
  return {
    setPlayerSymbol,
    getPlayerSymbol,
    setTurn,
    getTurn,
    playerMove,
    setWin,
    getWin,
  };
};

export { Player };
