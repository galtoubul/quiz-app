import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 225,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
};

const theme = createTheme({
  palette: {
    neutral: {
      main: "#42AAA3",
      contrastText: "#fff",
    },
  },
});

export default function LeaderBoardButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="neutral"
          onClick={handleOpen}
          endIcon={<LeaderboardIcon sx={{ color: "#ffffff" }} />}
        >
          submit your score
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} textAlign="center">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please enter your name
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Your name"
              variant="outlined"
            />
            <Button
              sx={{ width: 40 }}
              variant="contained"
              onClick={props.addRowToLeaderBoard}
              color="neutral"
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
