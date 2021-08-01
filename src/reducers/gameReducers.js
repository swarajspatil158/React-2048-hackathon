import {
  generateBoard,
  moveLeft,
  moveRight,
  moveUp,
  generateRandom,
  moveDown,
} from "./functions";

// initialising the empty board with a 2 block
let initialBoard = generateBoard();
initialBoard = generateRandom(initialBoard);
// getting the highscore stored in localstorage
let highScore = localStorage.getItem("highScore") || 0;

// setting initial state
let initialState = { board: initialBoard, score: 0, highScore: highScore };

const gameReducer = (state = initialState, action) => {
  let newState = { ...state };

  // checking if the action is related to moving of board
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

    // adding up the score
    newScore = state.score + mergeScore;
    newState = { ...state, board: newBoard, score: newScore };

    // checking if the score is greater than highscore if so then setting the new high score
    if (newScore > state.highScore) {
      newState.highScore = newScore;
      localStorage.setItem("highScore", newScore);
    }
  } else if (action.type === "NEW_GAME") {
    // if its a new game then resets the board, generates a 2 block and then setting score to 0
    let newBoard = generateBoard();
    newBoard = generateRandom(newBoard);
    newState.board = newBoard;
    newState.score = 0;
  }
  return newState;
};

export default gameReducer;
