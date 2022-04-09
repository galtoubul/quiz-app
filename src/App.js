import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./componenets/NavBar/NavBar";
import Game from "./componenets/Game/Game";

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isDataRetrieved, setIsDataRetrieved] = useState(false);

  async function retrieveData() {
    const response = await axios.get("https://opentdb.com/api.php?amount=10");
    setQuestionsData(response["data"]["results"]);
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
      <NavBar onClick={retrieveData} />
      {isDataRetrieved ? (
        <Game questionsData={questionsData} />
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default App;
