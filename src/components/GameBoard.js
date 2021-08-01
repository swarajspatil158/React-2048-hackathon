import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, moveUp } from "../actions/index";
import { useEffect } from "react";
import { isGameOver } from "../reducers/functions";

// a cell component
const Cell = ({ number }) => (
  <div className={`cell number color-${number}`}>
    {number > 0 ? number : ""}
  </div>
);

const GameBoard = () => {
  // getting the board
  const board = useSelector((state) => state.gameBoard).board;
  const dispatch = useDispatch();

  //   keydown and what to perform
  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        dispatch(moveLeft(board));
        break;
      case "ArrowRight":
        dispatch(moveRight(board));
        break;
      case "ArrowUp":
        dispatch(moveUp(board));
        break;
      case "ArrowDown":
        dispatch(moveDown(board));
        break;

      default:
        return;
    }
    let [isOver, reason] = isGameOver(board);
    // check if the game is over
    if (isOver) {
      alert(`game is over! you ${reason}`);
    }
  };

  //   addition and removal of event listener for moves
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return (
    <div className="game-board">
      {/* placement of board */}
      {board.map((row, i) => {
        return (
          <div key={`row-${i}`} className="row">
            {row.map((cell, j) => (
              <Cell key={`cell-${i}-${j}`} number={cell} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
