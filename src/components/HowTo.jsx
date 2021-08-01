import React from "react";
import "./HowTo.css";
import { useEffect,useRef } from "react";
import { FaGamepad } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import VanillaTilt from "vanilla-tilt";

// tilt component
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
//  tilt object
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };
export default function HowTo() {
  return (
    <>
      <section>
        <div className="box">
          <div className="container">
            <motion.div className="form" initial={{opacity:0}} animate={{opacity:1}}
                    transition={{delay:0.3,duration:1.5}}>
              <h3 className="title" >2048</h3>
              <h2>How to Play</h2>

              <FaGamepad color="rgba(255, 255, 255, 0.5)" size="3vh"/>
              <FaArrowUp color="rgba(255, 255, 255, 0.5)" size="4vh" />

              <form action="">
                <div className="inputBx">
                  <FaArrowLeft color="rgba(255, 255, 255, 0.5)" size="4vh" />
                  <motion.span >
                    <motion.p whileHover={{scale:1.1}}>
                      Use your arrow keys to move the tiles.Tiles with the same
                      number merge into one when they touch. Add them up to
                      reach 2048 !
                    </motion.p>
                  </motion.span>
                  <FaArrowRight color="rgba(255, 255, 255, 0.5)" size="4vh" />
                </div>
              </form>
                <FaArrowDown class="down" color="rgba(255, 255, 255, 0.5)" size="4vh" />
              <Tilt h1 options={options}>
                <Link to="/game">Let's Play</Link>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
