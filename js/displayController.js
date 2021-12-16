const DisplayController = (() => {
  let gameContainer = document.querySelector(".tic-tac-toe");

  const displayGame = (board) => {
    board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        let div = document.createElement("div");
        div.dataset.position = `${rowIndex} ${colIndex}`;
        let p = document.createElement("p");
        div.append(p);
        gameContainer.append(div);
      });
    });
  };

  const resetDisplay = () => {
    let gameContainerChildren = [...gameContainer.childNodes];
    gameContainerChildren.forEach((element) => {
      element.remove();
    });
  };
  return { displayGame, resetDisplay };
})();

export { DisplayController };
