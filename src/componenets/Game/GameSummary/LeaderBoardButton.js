import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#42AAA3",
      contrastText: "#fff",
    },
  },
});

const LeaderBoardButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="neutral"
        endIcon={<LeaderboardIcon sx={{color: "#ffffff" }} />}
      >
        submit your score
      </Button>
    </ThemeProvider>
  );
};
export default LeaderBoardButton;
