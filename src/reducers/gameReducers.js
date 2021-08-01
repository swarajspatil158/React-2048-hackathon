import {
  generateBoard,
  moveLeft,
  moveRight,
  moveUp,
  generateRandom,
  moveDown,
} from "./functions";

let initialBoard = generateBoard();
initialBoard = generateRandom(initialBoard);
let highScore = localStorage.getItem("highScore");

let initialState = { board: initialBoard, score: 0, highScore: highScore };

const gameReducer = (state = initialState, action) => {
  let newState = { ...state };

  if (action.type.slice(0, 4) === "MOVE") {
    let [newBoard, mergeScore, newScore] = [[], 0, 0];

    if (action.type === "MOVE_LEFT") {
      [newBoard, mergeScore] = moveLeft(action.payload);
    } else if (action.type === "MOVE_RIGHT") {
      [newBoard, mergeScore] = moveRight(action.payload);
    } else if (action.type === "MOVE_UP") {
      [newBoard, mergeScore] = moveUp(action.payload);
    } else if (action.type === "MOVE_DOWN") {
      [newBoard, mergeScore] = moveDown(action.payload);
    }

    newScore = state.score + mergeScore;
    newState = { ...state, board: newBoard, score: newScore };

    if (newScore > state.highScore) {
      newState.highScore = newScore;
      localStorage.setItem("highScore", newScore);
    }
  } else if (action.type === "NEW_GAME") {
    let newBoard = generateBoard();
    newBoard = generateRandom(newBoard);
    newState.board = newBoard;
    newState.score = 0;
  }
  return newState;
};

export default gameReducer;
