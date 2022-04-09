import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./componenets/NavBar/NavBar";
import Game from "./componenets/Game/Game";
import Leaderboard from "./componenets/Game/Leaderboard/Leaderboard";

function createData(place, name, score, date) {
  return { place, name, score, date };
}

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isDataRetrieved, setIsDataRetrieved] = useState(false);
  const [isGameMode, setIsGameMode] = useState(true);
  const [questionInd, setQuestionInd] = useState(0);
  const [score, setScore] = useState(0);
  const [leaderboardRows, setleaderboardRows] = useState([
    createData(1, "Gal Toubul", 100, "09/04/2022"),
  ]);

  const addRowToLeaderBoard = () => {
    setleaderboardRows((prevLeaderboardRows) => {
      console.log(prevLeaderboardRows);
      prevLeaderboardRows = prevLeaderboardRows.concat([
        createData(2, "gal", 23, "1/1/1"),
      ]);
      console.log(prevLeaderboardRows);
      return prevLeaderboardRows;
    });
  };

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
            addRowToLeaderBoard={addRowToLeaderBoard}
          />
        ) : (
          <div>loading</div>
        )
      ) : (
        <Leaderboard
          leaderboardRows={leaderboardRows}
          setIsGameMode={setIsGameMode}
        />
      )}
    </div>
  );
};

export default App;
