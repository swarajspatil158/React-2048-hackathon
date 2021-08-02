import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { newGame } from "../actions/index";

import GameBoard from "./GameBoard";
import Score from "./Score";
import HowToModal from "./HowToModal.jsx";
import "./HowToModal.css";
const Game = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  // const [BoardLocked, setBoardLocked] = useState(false);
  // dispatch function for creating newGame
  const dispatch = useDispatch();
  return (
    <div className="game">
      <button onClick={()=>{setModalIsOpen(true)}}>How to Play</button>
      {ModalIsOpen?
      (<HowToModal setModalIsOpen={setModalIsOpen}></HowToModal>)
      :null
      }
      <button onClick={() => dispatch(newGame())}>NewGame</button>
      <Score />
      <GameBoard />
    </div>
  );
};

export default Game;
