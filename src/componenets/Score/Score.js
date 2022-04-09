import "./Score.css";

const Score = (props) => {
  return (
    <div className="score-container">
      <div className="score">score | {props.score}</div>
    </div>
  );
};

export default Score;
