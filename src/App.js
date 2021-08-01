import "./App.css";
import GameBoard from "./components/GameBoard";
import Score from "./components/Score";
import HowTo from "./components/HowTo";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
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
    </div>
  );
}

export default App;
