import React from "react";
import "./HowTo.css";
import { FaGamepad } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HowTo() {
  return (
    <>
      <section>
        <div className="box">
          <div className="container">
            <div className="form">
              <h3 className="title">2048</h3>
              <h2>How to Play</h2>

              <FaGamepad color="rgba(255, 255, 255, 0.5)" size="3vh" />
              <FaArrowUp color="rgba(255, 255, 255, 0.5)" size="4vh" />

              <form action="">
                <div className="inputBx">
                  <FaArrowLeft color="rgba(255, 255, 255, 0.5)" size="4vh" />
                  <span>
                    <p>
                      Use your arrow keys to move the tiles.Tiles with the same
                      number merge into one when they touch. Add them up to
                      reach 2048 !
                    </p>
                  </span>
                  <FaArrowRight color="rgba(255, 255, 255, 0.5)" size="4vh" />
                </div>
                <FaArrowDown color="rgba(255, 255, 255, 0.5)" size="4vh" />
              </form>
              <h1>
                <Link to="/game">Let's Play</Link>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
