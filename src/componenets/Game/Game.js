import { useState } from "react";
import "./Game.css";
import QuestionForm from "./Question/QuestionForm.js";
import Score from "../Score/Score";

const Game = (props) => {
  const [score, setScore] = useState(0);

  console.log(props.questionsData[0]);
  return (
    <div className="main-screen">
      <Score score={score} />
      <div className="question-form-and-sidebar-container">
        <QuestionForm
          questionData={props.questionsData[0]}
          setScore={setScore}
        />
        <div className="sidebar-container"></div>
      </div>
    </div>
  );
};

export default Game;

// const Game = ({ questionsData }) => {
//   const [questionInd, setQuestionInd] = useState(0);

//   return <QuestionForm />;

//   //   return (
//   //     <div className="main-screen">
//   //       <div className="score-container"></div>
//   //       <div className="question-form-and-sidebar-container">
//   //         <QuestionForm questionData={questionsData[questionInd]} />
//   //         <div className="sidebar-container"></div>
//   //       </div>
//   //     </div>
//   //   );
// };
