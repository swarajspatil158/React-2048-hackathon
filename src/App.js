import "./App.css";
import HowTo from "./components/HowTo";
import { Route, Switch ,useLocation} from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
import Game from "./components/Game";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.key}>
        <Route
          path="/game"
          component= {Game}
        />
        <Route exact path="/" component={HowTo} />
      </Switch>
    </div>
  );
}

export default App;
