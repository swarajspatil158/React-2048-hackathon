import React from "react";
import { useDispatch } from "react-redux";
import { newGame } from "../actions/index";

import GameBoard from "./GameBoard";
import Score from "./Score";

const Game = () => {
  // dispatch function for creating newGame
  const dispatch = useDispatch();
  return (
    <div className="game">
      <button onClick={() => dispatch(newGame())}>NewGame</button>
      <Score />
      <GameBoard />
    </div>
  );
};

export default Game;
