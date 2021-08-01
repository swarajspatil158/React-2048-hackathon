import "./App.css";
import GameBoard from "./components/GameBoard";
import Score from "./components/Score";
import HowTo from "./components/HowTo";
import { Route, Switch ,useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route
          path="/game"
          component={() => (
            <>
              <Score />
              <GameBoard />
            </>
          )}
        />
        <Route exact path="/" component={HowTo} />
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
