import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, moveUp } from "../actions/index";
import { useEffect } from "react";
import { isGameOver } from "../reducers/functions";

const Cell = ({ number }) => (
  <div className={`cell number color-${number}`}>
    {number > 0 ? number : ""}
  </div>
);

const GameBoard = () => {
  const game = useSelector((state) => state.gameBoard);
  const board = game.board;
  const score = game.score;
  console.log(score);
  const dispatch = useDispatch();

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
    if (isOver) {
      alert(`game is over! you ${reason}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return (
    <div className="game-board">
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
