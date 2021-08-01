// generates empty board
const generateBoard = () =>
  new Array(4).fill(null).map(() => new Array(4).fill(0));

// checks for a value if the board contains the value
const hasValue = (board, value) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === value) {
        return true;
      }
    }
  }
  return false;
};

// checks if the board is full
const isFull = (board) => {
  return !hasValue(board, 0);
};

// gets random position
const randomPosition = () => {
  let row = Math.floor(Math.random() * 4);
  let col = Math.floor(Math.random() * 4);
  return [row, col];
};

// generates random cell
const generateRandom = (board) => {
  if (isFull(board)) {
    return board;
  }

  let [row, col] = randomPosition();
  while (board[row][col] !== 0) {
    [row, col] = randomPosition();
  }

  board[row][col] = 2;
  return board;
};

// compresses the board to the left
const compress = (board) => {
  let newBoard = generateBoard();
  for (let i = 0; i < board.length; i++) {
    let col = 0;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        newBoard[i][col] = board[i][j];
        col++;
      }
    }
  }
  return newBoard;
};

// merges the board to the left if possible
const merge = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] > 0 && board[i][j] === board[i][j + 1]) {
        board[i][j] = board[i][j] * 2;
        board[i][j + 1] = 0;
      }
    }
  }
  return board;
};

// reverses the board
const reverse = (board) => {
  let newBoard = generateBoard();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // turns col0 to col3, col1 to col2, col2 to col1, col3 to col0
      newBoard[i][j] = board[i][board.length - 1 - j];
    }
  }
  return newBoard;
};

// rotates anticlockwise 90 deg
const rotateLeft = (board) => {
  let newBoard = generateBoard();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // turns row0 to col0, row1 to col1, row2 to col2, row3 to col3
      newBoard[i][j] = board[j][board.length - 1 - i];
    }
  }
  return newBoard;
};

// rotates clockwise 90 deg
const rotateRight = (board) => {
  let newBoard = generateBoard();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // turns row0 to col3, row1 to col2, row2 to col1, row3 to col0
      newBoard[i][j] = board[board.length - 1 - j][i];
    }
  }
  return newBoard;
};

// checks if the board has different elements
const hasDiff = (board, newBoard) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== newBoard[i][j]) {
        return true;
      }
    }
  }
  return false;
};

const moveFunction = (board, main, process, result) => {
  const nBoard1 = main(board);
  const nBoard2 = process(nBoard1);
  const resBoard = result(nBoard2);
  return generateRandom(resBoard);
};

const moveLeft = (board) => moveFunction(board, compress, merge, compress);
const moveRight = (board) => moveFunction(board, reverse, moveLeft, reverse);
const moveUp = (board) =>
  moveFunction(board, rotateLeft, moveLeft, rotateRight);
const moveDown = (board) =>
  moveFunction(board, rotateRight, moveLeft, rotateLeft);

// checks if the board contains 2048 so the game is ended and the user has won the game
const isGameWon = (board) => hasValue(board, 2048);

const isGameLost = (board) =>
  !(
    hasDiff(board, moveLeft(board)) ||
    hasDiff(board, moveRight(board)) ||
    hasDiff(board, moveUp(board)) ||
    hasDiff(board, moveDown(board))
  );

const isGameOver = (board) => {
  let over = false,
    reason = "";
  if (isGameWon(board)) {
    over = true;
    reason = "won";
  } else if (isGameLost(board)) {
    over = true;
    reason = "lost";
  }
  return [over, reason];
};

export { generateBoard, moveLeft, moveRight, moveUp, moveDown, isGameOver };
