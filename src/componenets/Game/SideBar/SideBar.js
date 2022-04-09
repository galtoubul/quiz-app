import "./SideBar.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <CountdownCircleTimer
        className="timer"
        size={105}
        isPlaying
        duration={15}
        colors={["#42AAA3", "#ef5a7a", "#ef5a7a"]}
        colorsTime={[7, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default SideBar;
