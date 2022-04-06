import "./QuestionForm.css";
import Question from "./Question.js";

const QuestionForm = (props) => {
  return (
    <div className="question-container">
      <Question />
      <div className="answers-row-1"></div>
      <div className="answers-row-2"></div>
      <div className="question-number-container"></div>
    </div>
  );
};

export default QuestionForm;
