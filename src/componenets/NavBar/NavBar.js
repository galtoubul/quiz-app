import "./NavBar.css";
import { ReactComponent as LeaderboardImage } from "./img/leaderboard.svg";
import { ReactComponent as PlayImage } from "./img/play.svg";

const NavBar = (props) => {
  return (
    <div className="nav-bar-container">
      <PlayImage className="play-img" onClick={props.onPlayClick} />
      <LeaderboardImage
        className="leaderboard-img"
        onClick={() => props.setIsGameMode(false)}
      />
    </div>
  );
};

export default NavBar;
