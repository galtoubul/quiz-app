import "./QuestionForm.css";
import Question from "./Question.js";
import Answer from "./Answer.js";
import axios from "axios";
import React from "react";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("hi");
    axios
      .get("https://opentdb.com/api.php?amount=1")
      .then((response) => {
        console.log(response.data.results[0]["question"]);
        this.setState({ question: response.data.results[0]["question"] });
        console.log(this.state.question[0]);
      })
      .catch((error) => console.log(error));
  }

  renderAnswer(i, props) {
    console.log(i);
    return <Answer onClick={this.handleClick} />;
  }

  render() {
    return (
      <div className="question-container">
        <div className="question-box">
          <Question questionText={this.state.question} />

          <div className="answers-row-1">
            {this.renderAnswer(0)}
            {this.renderAnswer(1)}
          </div>
          <div className="answers-row-2">
            {this.renderAnswer(2)}
            {this.renderAnswer(3)}
          </div>
          <div className="question-number-container"></div>
        </div>
      </div>
    );
  }
}

export default QuestionForm;
