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
  let score = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] > 0 && board[i][j] === board[i][j + 1]) {
        score += board[i][j] * 2;
        board[i][j] = board[i][j] * 2;
        board[i][j + 1] = 0;
      }
    }
  }
  return [board, score];
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

// creating the move left function
const moveLeft = (board) => {
  // firstly we compress the board to the left
  const nBoard1 = compress(board);
  // then we merge if any two cells are same
  const [nBoard2, score] = merge(nBoard1);
  // then we compress the board once more
  const nBoard3 = compress(nBoard2);
  // then we adds a new 2 block at random position
  return [generateRandom(nBoard3), score];
};

// for making right,up,down we have some repeated code like firstly we have to do something to make it happen for move left then perform moveleft and then revert to its original state
const moveFunction = (board, main, process, result) => {
  // doing some pre required adjustment
  const nBoard1 = main(board);
  // performing move left function
  const [nBoard2, score] = process(nBoard1);
  // doing some post required adjustment
  const resBoard = result(nBoard2);
  // returning the resultant board with score
  return [resBoard, score];
};

// using moveFunction for creating moveRight, moveUp, moveDown function
const moveRight = (board) => moveFunction(board, reverse, moveLeft, reverse);
const moveUp = (board) =>
  moveFunction(board, rotateLeft, moveLeft, rotateRight);
const moveDown = (board) =>
  moveFunction(board, rotateRight, moveLeft, rotateLeft);

// checks if the board contains 2048 so the game is ended and the user has won the game
const isGameWon = (board) => hasValue(board, 2048);

// so we check if there is any possibility to merge the block if yes then our game is not over otherwise if no possibility to merge blocks then our game is over and we lose
const isGameLost = (board) =>
  !(
    hasDiff(board, moveLeft(board)[0]) ||
    hasDiff(board, moveRight(board)[0]) ||
    hasDiff(board, moveUp(board)[0]) ||
    hasDiff(board, moveDown(board)[0])
  );

// checking if game is over either by winning or losing
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

export {
  generateBoard,
  generateRandom,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  isGameOver,
};
