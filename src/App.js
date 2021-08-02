import "./App.css";
import HowTo from "./components/HowTo";
import {
  Route, 
  Switch ,
  useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Game from "./components/Game";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route
          path="/game"
          component= {Game}
        />
        <Route exact path="/" component={HowTo} />
      </Switch>
      </AnimatePresence>
      </div>
  );
}

export default App;
