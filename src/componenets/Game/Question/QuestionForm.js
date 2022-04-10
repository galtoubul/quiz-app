import "./QuestionForm.css";
import React from "react";
import Question from "./Question.js";
import Answer from "./Answer.js";
import QuestionNumber from "../QuestionNumber/QuestionNumber.js";

// Copied from here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Marked answer as useful :)
const shuffle = (array) => {
  console.log(array);
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const parseEntities = (txt) =>
  new DOMParser().parseFromString(txt, "text/html").body.innerText;

const QuestionForm = (props) => {
  let answers = props.questionData["incorrect_answers"].concat(
    props.questionData["correct_answer"]
  );
  answers = shuffle(answers);

  let minHeight = 50;
  let minWidth = 250;
  for (const ans of answers) {
    if (ans.length >= 50) {
      minWidth = 750;
      break;
    }
    if (ans.length >= 24) {
      minHeight = 66.5;
      break;
    }
  }

  const handleClick = (i) => {
    if (answers[i] === props.questionData["correct_answer"]) {
      props.setScore((prevScore) => prevScore + 10);
    }
    props.setQuestionInd((prevQuestionInd) => prevQuestionInd + 1);
    props.setTimerKey((prevTimerKey) => prevTimerKey + 1); // restart timer
  };

  const renderAnswer = (i) => {
    return (
      <Answer
        onClick={() => handleClick(i)}
        answerText={parseEntities(answers[i])}
        minHeight={minHeight}
        minWidth={minWidth}
      />
    );
  };

  return (
    <div className="question-container">
      <div className="question-box">
        <Question questionText={parseEntities(props.questionData.question)} />
        <div className={minWidth == 250 ? "answers-row-1" : "answers-col-1"}>
          {renderAnswer(0)}
          {renderAnswer(1)}
        </div>
        {answers.length > 2 ? (
          <div className={minWidth == 250 ? "answers-row-2" : "answers-col-2"}>
            {renderAnswer(2)}
            {renderAnswer(3)}
          </div>
        ) : null}
        <QuestionNumber questionInd={props.questionInd} />
      </div>
    </div>
  );
};

export default QuestionForm;
