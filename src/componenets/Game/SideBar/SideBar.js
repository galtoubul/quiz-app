import "./SideBar.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const SideBar = (props) => {
  const handleTimerComplete = () => {
    props.setQuestionInd((prevScore) => prevScore + 1);
    props.setTimerKey((prevTimerKey) => prevTimerKey + 1); // restart timer
  };

  return (
    <div className="sidebar-container">
      {/* <CountdownCircleTimer
        className="timer"
        key={props.timerKey}
        size={105}
        isPlaying
        duration={15}
        onComplete={handleTimerComplete}
        colors={["#42AAA3", "#ef5a7a", "#ef5a7a"]}
        colorsTime={[7, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer> */}
    </div>
  );
};

export default SideBar;
