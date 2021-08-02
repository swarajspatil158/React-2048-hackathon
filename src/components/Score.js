import React from "react";
import { useSelector } from "react-redux";

const Score = () => {
  // getting the score and highscore state from the state
  const score = useSelector((state) => state.gameBoard).score;
  const highScore = useSelector((state) => state.gameBoard).highScore;
  return (
    <div className="scoreBoard">
      <div>SCORE<br></br>{score}</div> 
      <div>HIGHSCORE<br></br>{highScore}</div>
    </div>
  );
};

export default Score;
