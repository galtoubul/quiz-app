import "./GameSummary.css";
const GameSummary = (props) => {
  return (
    <div className="game-summary-container">
      <div className="game-summary">Final Score: {props.score}</div>
    </div>
  );
};

export default GameSummary;
