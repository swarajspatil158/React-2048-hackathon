import "./App.css";
import GameBoard from "./components/GameBoard";
import Score from "./components/Score";
import HowTo from "./HowTo";

function App() {
  return (
    <div className="App">
      <Score />
      <GameBoard />
      <HowTo />
    </div>
  );
}

export default App;
