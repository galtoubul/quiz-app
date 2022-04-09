import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./componenets/NavBar/NavBar";
import Game from "./componenets/Game/Game";
import Leaderboard from "./componenets/Game/Leaderboard/Leaderboard";

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isDataRetrieved, setIsDataRetrieved] = useState(false);
  const [isGameMode, setIsGameMode] = useState(true);
  const [questionInd, setQuestionInd] = useState(0);
  const [score, setScore] = useState(0);

  async function playNewGame() {
    const response = await axios.get("https://opentdb.com/api.php?amount=10");
    setQuestionsData(response["data"]["results"]);
    setIsGameMode(true);
    setQuestionInd(0);
    setScore(0);
  }

  useEffect(() => {
    setIsDataRetrieved(false);
    axios.get("https://opentdb.com/api.php?amount=10").then((response) => {
      setQuestionsData(response["data"]["results"]);
      setIsDataRetrieved(true);
    });
  }, []);

  return (
    <div className="main-container">
      <NavBar setIsGameMode={setIsGameMode} onPlayClick={playNewGame} />
      {isGameMode ? (
        isDataRetrieved ? (
          <Game
            isGameMode={isGameMode}
            setIsGameMode={setIsGameMode}
            questionInd={questionInd}
            setQuestionInd={setQuestionInd}
            questionsData={questionsData}
            score={score}
            setScore={setScore}
          />
        ) : (
          <div>loading</div>
        )
      ) : (
        <Leaderboard setIsGameMode={setIsGameMode} />
      )}
    </div>
  );
};

export default App;
