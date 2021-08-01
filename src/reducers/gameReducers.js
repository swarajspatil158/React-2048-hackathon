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
  let [newBoard, mergeScore, newScore] = [[], 0, 0];
  let newState = { ...state };

  if (action.type === "MOVE_LEFT") {
    [newBoard, mergeScore] = moveLeft(action.payload);
    newScore = state.score + mergeScore;
    newState = { ...state, board: newBoard, score: newScore };
  } else if (action.type === "MOVE_RIGHT") {
    [newBoard, mergeScore] = moveRight(action.payload);
    newScore = state.score + mergeScore;
    newState = { ...state, board: newBoard, score: newScore };
  } else if (action.type === "MOVE_UP") {
    [newBoard, mergeScore] = moveUp(action.payload);
    newScore = state.score + mergeScore;
    newState = { ...state, board: newBoard, score: newScore };
  } else if (action.type === "MOVE_DOWN") {
    [newBoard, mergeScore] = moveDown(action.payload);
    newScore = state.score + mergeScore;
    newState = { ...state, board: newBoard, score: newScore };
  }
  newScore = state.score + mergeScore;
  if (newScore > state.highScore) {
    newState.highScore = newScore;
    localStorage.setItem("highScore", newScore);
  }
  return newState;
};

export default gameReducer;
