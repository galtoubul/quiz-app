import "./NavBar.css";
import { ReactComponent as LeaderboardImage } from "./img/leaderboard.svg";
import { ReactComponent as PlayImage } from "./img/play.svg";

function func() {
  console.log("hi");
}

const NavBar = (props) => {
  return (
    <div className="nav-bar-container">
      <PlayImage className="play-img" onClick={props.onClick} />
      <LeaderboardImage className="leaderboard-img" onClick={func} />
    </div>
  );
};

export default NavBar;
