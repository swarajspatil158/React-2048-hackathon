import React from "react";
import { useSelector } from "react-redux";

const Score = () => {
  const score = useSelector((state) => state.gameBoard).score;
  const highScore = useSelector((state) => state.gameBoard).highScore;
  return <div>{score}</div>;
};

export default Score;
