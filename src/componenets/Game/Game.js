import { useState } from "react";
import "./Game.css";
import QuestionForm from "./Question/QuestionForm.js";
import Score from "./Score/Score";
import GameSummary from "./GameSummary/GameSummary";
import Sidebar from "./SideBar/SideBar.js";

const Game = (props) => {
  const [score, setScore] = useState(0);
  const [questionInd, setQuestionInd] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  console.log(props.questionsData[0]);
  return (
    <div className="main-screen">
      <Score score={score} />
      <div className="question-form-and-sidebar-container">
        {questionInd <= 9 ? (
          <QuestionForm
            questionData={props.questionsData[questionInd]}
            setScore={setScore}
            setQuestionInd={setQuestionInd}
            questionInd={questionInd}
            setTimerKey={setTimerKey}
          />
        ) : (
          <GameSummary score={score} />
        )}
        {questionInd <= 9 ? (
          <Sidebar
            timerKey={timerKey}
            setQuestionInd={setQuestionInd}
            setTimerKey={setTimerKey}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Game;
