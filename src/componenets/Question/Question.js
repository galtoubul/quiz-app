import "./Question.css";

const Question = (props) => {
  return (
    <div className="question-text-container">
      <div className="question-text">{props.questionText}</div>
    </div>
  );
};

export default Question;
