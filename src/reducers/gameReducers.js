import {
  generateBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
} from "./functions";

// let board = [
//   [2, 2, 4, 0],
//   [4, 0, 8, 4],
//   [8, 0, 8, 4],
//   [8, 4, 0, 8],
// ];
// console.table(rotateRight(board));

const gameReducer = (state = { board: generateBoard() }, action) => {
  switch (action.type) {
    case "MOVE_LEFT":
      return { ...state, board: moveLeft(action.payload) };
    case "MOVE_RIGHT":
      return { ...state, board: moveRight(action.payload) };
    case "MOVE_UP":
      return { ...state, board: moveUp(action.payload) };
    case "MOVE_DOWN":
      return { ...state, board: moveDown(action.payload) };
    default:
      return state;
  }
};

export default gameReducer;
