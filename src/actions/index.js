const moveAction = (board, direction) => {
  return {
    type: `MOVE_${direction}`,
    payload: board,
  };
};

const moveLeft = (board) => moveAction(board, "LEFT");
const moveRight = (board) => moveAction(board, "RIGHT");
const moveUp = (board) => moveAction(board, "UP");
const moveDown = (board) => moveAction(board, "DOWN");

export { moveDown, moveLeft, moveRight, moveUp };
