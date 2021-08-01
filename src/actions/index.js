// since we have repeated code for moving action function so this is a reusable function for that
const moveAction = (board, direction) => {
  return {
    type: `MOVE_${direction}`,
    payload: board,
  };
};

// with the help of moveAction creating moveLeft, moveRight, moveUp, moveDown action functions
const moveLeft = (board) => moveAction(board, "LEFT");
const moveRight = (board) => moveAction(board, "RIGHT");
const moveUp = (board) => moveAction(board, "UP");
const moveDown = (board) => moveAction(board, "DOWN");

// creating the newGame action function
const newGame = () => {
  return {
    type: "NEW_GAME",
  };
};

export { moveDown, moveLeft, moveRight, moveUp, newGame };
