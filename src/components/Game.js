import React from "react";
import { useDispatch } from "react-redux";
import { newGame } from "../actions/index";
import {motion} from "framer-motion";
import GameBoard from "./GameBoard";
import Score from "./Score";
import "./Game.css";

//  transition motion
const pageTranstion = {
  in: {
      opacity: 1,
      y: 0,
  },
  out: {
      opacity: 0,
      y: "-100%"
  }
}

const Game = () => {
  // dispatch function for creating newGame
  const dispatch = useDispatch();
  return (
    <motion.div 
      initial="out"
      animate="in"
    exit="out" variants={pageTranstion}
      className="game">
      <button onClick={() => dispatch(newGame())}>NewGame</button>
      <Score />
      <GameBoard />
    </motion.div>
  );
};

export default Game;
