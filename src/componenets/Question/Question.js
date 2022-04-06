import "./Question.css";

const Question = (props) => {
  const questionTxt =
    "The creeper in Mincraft was the result of a bug while implementing which creature?";
  return (
    <div className="question-text-container">
      <div className="question-text">{questionTxt}</div>
    </div>
  );
};

export default Question;
