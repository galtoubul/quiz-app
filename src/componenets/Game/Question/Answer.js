import "./Answer.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#42AAA3",
      contrastText: "#fff",
    },
    primary: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

const Answer = (props) => {
  return (
    <div className="answer-container">
      <ThemeProvider theme={theme}>
        <Button
          sx={{
            minWidth: props.minWidth,
            minHeight: props.minHeight,
            border: 1,
            borderColor: "primary.main",
            fontSize: 15,
          }}
          fullWidth
          color="neutral"
          variant="contained"
          onClick={props.onClick}
        >
          {props.answerText}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Answer;
