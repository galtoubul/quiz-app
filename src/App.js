import "./App.css";
import QuestionForm from "./componenets/Question/QuestionForm.js";

const App = (props) => {
  return (
    <div className="main-container">
      <div className="nav-bar"></div>
      <div className="main-screen">
        <div className="score-container"></div>
        <div className="game-container">
          <QuestionForm />
          {/* <div className="question-container">
            <div className="question-text"></div>
            <div className="answers-row-1"></div>
            <div className="answers-row-2"></div>
            <div className="question-number-container"></div>
          </div> */}
          <div className="sidebar-container"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
