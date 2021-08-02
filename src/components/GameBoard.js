import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, moveUp } from "../actions/index";
import { useEffect,useRef } from "react";
import { isGameOver } from "../reducers/functions";
import VanillaTilt from "vanilla-tilt";

// a cell component
const Cell = ({ number }) => (
  <div className={`cell number color-${number}`}>
    {number > 0 ? number : ""}
  </div>
);


// tilt component
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
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
  //  tilt object
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };
  //   addition and removal of event listener for moves
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return (
    <Tilt className="game-board" options={options}>
      {board.map((row, i) => {
        return (
          <div key={`row-${i}`} className="row">
            {row.map((cell, j) => (
              <Cell key={`cell-${i}-${j}`} number={cell} />
            ))}
          </div>
        );
      })}
    </Tilt>
  );
};

export default GameBoard;
