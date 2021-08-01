import React from 'react'
import "./HowTo.css"
import { FaGamepad } from "react-icons/fa";

export default function HowTo() {
    return (
        <>
            <section>
      <div className="box">
        <div className="container">
          <div className="form">
            <h2>How to Play</h2>

            <FaGamepad color="rgba(255, 255, 255, 0.5)" size="3vh"/>
            <form action="">
              <div className="inputBx">
                <span>
                    <p>
                    Use your arrow keys to move the tiles.Tiles with the same
                    number merge into one when they touch. Add them up to reach
                    2048  !
                  </p></span>
              </div>
            </form>
                    <h1>Let's Play</h1>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}