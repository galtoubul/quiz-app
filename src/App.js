import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./componenets/NavBar/NavBar";
import Game from "./componenets/Game/Game";
import Leaderboard from "./componenets/Game/Leaderboard/Leaderboard";

function createData(place, name, score, date) {
  return { place, name, score, date };
}

// Copied from here: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
// Marked answer as useful :)
const getTodayDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isDataRetrieved, setIsDataRetrieved] = useState(false);
  const [isGameMode, setIsGameMode] = useState(true);
  const [questionInd, setQuestionInd] = useState(0);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("guest");
  const [leaderboardRows, setleaderboardRows] = useState([]);

  const getPlayerPlace = () => {
    for (let i = 0; i < leaderboardRows.length; i++) {
      if (score > leaderboardRows[i]["score"]) {
        console.log(
          `bigger than | score = ${score} | leaderboardRows[i]["score"] = ${leaderboardRows[i]["score"]}`
        );
        for (let j = i; j < leaderboardRows.length; j++) {
          leaderboardRows[j]["place"] += 1;
        }
        return i + 1;
      } else {
        console.log(
          `score = ${score} | leaderboardRows[i]["score"] = ${leaderboardRows[i]["score"]}`
        );
      }
    }
    return leaderboardRows.length + 1;
  };

  const addRowToLeaderBoard = () => {
    setleaderboardRows((prevLeaderboardRows) => {
      console.log(prevLeaderboardRows);
      let playerPlace = getPlayerPlace();
      let newRow = createData(playerPlace, playerName, score, getTodayDate());
      prevLeaderboardRows.splice(playerPlace - 1, 0, newRow);
      console.log(prevLeaderboardRows);
      setIsGameMode(false);
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
            setPlayerName={setPlayerName}
          />
        ) : (
          <div>loading</div>
        )
      ) : (
        <Leaderboard leaderboardRows={leaderboardRows} />
      )}
    </div>
  );
};

export default App;
