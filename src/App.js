import "./App.css";
import HowTo from "./components/HowTo";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/game" component={Game} />
        <Route exact path="/" component={HowTo} />
      </Switch>
    </div>
  );
}

export default App;
