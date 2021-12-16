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

  return {
    setPlayerSymbol,
    getPlayerSymbol,
    setTurn,
    getTurn,
    setWin,
    getWin,
  };
};

const HardAI = (board) => {
  const defaultFunctionality = Player(board);
  return Object.assign({}, defaultFunctionality);
};

const EasyAI = (board) => {
  const defaultFunctionality = Player(board);
  return Object.assign({}, defaultFunctionality);
};

const Human = (board) => {
  const defaultFunctionality = Player(board);
  const makeMove = () => {
    console.log("Making a move");
  };
  return Object.assign({}, defaultFunctionality, { makeMove });
};
export { EasyAI, HardAI, Human };
