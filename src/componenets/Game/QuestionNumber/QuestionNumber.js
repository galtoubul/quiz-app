import "./QuestionNumber.css";

const QuestionNumber = (props) => {
  return (
    <div className="question-number-container">
      <div className="question-number">Question | {props.questionInd}</div>
    </div>
  );
};

export default QuestionNumber;
