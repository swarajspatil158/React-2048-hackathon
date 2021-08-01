import "./App.css";
import GameBoard from "./components/GameBoard";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Score />
      <GameBoard />
    </div>
  );
}

export default App;
