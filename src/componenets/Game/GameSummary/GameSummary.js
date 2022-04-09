import "./GameSummary.css";
import Confetti from "../Confetti.js";

const GameSummary = (props) => {
  let summaryText;
  switch (true) {
    case props.score <= 20:
      summaryText = "I'm Sure you can do better than that ;)";
      break;
    case props.score <= 60:
      summaryText = "Great job! Keep it UP!";
      break;
    case props.score <= 90:
      summaryText = "Who is the best?";
      break;
    default:
      summaryText = "10 out of 10?! Are you Einstein or what?!";
      break;
  }

  return (
    <div className="game-summary-container">
      <div className="final-score-container">Final Score: {props.score}</div>
      <div className="summary-text-container">{summaryText}</div>
      {props.score >= 30 ? (
        <Confetti></Confetti>
      ) : (
        <img src={require("./img/youGotThis.jpg")} alt="meme"></img>
      )}
    </div>
  );
};

export default GameSummary;
