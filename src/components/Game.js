import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { newGame } from "../actions/index";
import {motion} from "framer-motion";
import GameBoard from "./GameBoard";
import Score from "./Score";
import HowToModal from "./HowToModal.jsx";
import "./HowToModal.css";
import { FaHome } from "react-icons/fa";
import ShareModal from "./ShareModal.js";
import "./ShareModal.css";
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
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [isShareOn,setIsShareOn] = useState(false);
  // dispatch function for creating newGame
  const dispatch = useDispatch();
  return (
    <motion.div 
    initial="out"
      animate="in"
    exit="out" variants={pageTranstion}
      className="game">
      <div className="go-to-home"><a href="/"> <FaHome></FaHome></a></div>
      <div className="game-controls">
        <button onClick={()=>{setModalIsOpen(true)}}>How to Play</button>
        {ModalIsOpen?
        (<HowToModal setModalIsOpen={setModalIsOpen}></HowToModal>)
        :null
        }
        <button onClick={() => dispatch(newGame())}>New Game</button>
        <button onClick={() => setIsShareOn(true)}>Share</button>
        {isShareOn ?
          (<ShareModal setIsShareOn={setIsShareOn}></ShareModal>)
          : null
        }

      </div>
      <Score />
      <GameBoard />
      <footer>
        <div>Made by Team Aditya ✨</div>
        <div>Contributers - <a href="https://github.com/swarajspatil158">Swaraj</a>, <a href="https://github.com/siddharth20190428/">Siddharth</a>, <a href="https://github.com/Dhrumil0723/">Venom</a>, <a href="https://github.com/abhaygupta08">Abhay</a></div>
      </footer>
    </motion.div>
  );
};

export default Game;
