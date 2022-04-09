import { useState } from "react";
import "./Game.css";
import QuestionForm from "./Question/QuestionForm.js";
import Score from "./Score/Score";
import GameSummary from "./GameSummary/GameSummary";
import Sidebar from "./SideBar/SideBar.js";

const Game = (props) => {
  const [timerKey, setTimerKey] = useState(0);

  console.log(props.questionsData[0]);
  return (
    <div className="main-screen">
      <Score score={props.score} />
      <div className="question-form-and-sidebar-container">
        {props.questionInd <= 9 ? (
          <QuestionForm
            questionData={props.questionsData[props.questionInd]}
            setScore={props.setScore}
            setQuestionInd={props.setQuestionInd}
            questionInd={props.questionInd}
            setTimerKey={setTimerKey}
          />
        ) : (
          <GameSummary score={props.score} />
        )}
        {props.questionInd <= 9 ? (
          <Sidebar
            timerKey={timerKey}
            setQuestionInd={props.setQuestionInd}
            setTimerKey={setTimerKey}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Game;
