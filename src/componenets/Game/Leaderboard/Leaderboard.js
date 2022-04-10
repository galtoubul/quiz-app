import "./Leaderboard.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   firstRow: {
//     backgroundColor: "lightblue",
//   },
// });

const BasicTable = (props) => {
  // const classes = useStyles();
  return (
    <TableContainer sx={{ maxWidth: 450 }} component={Paper}>
      <Table
        sx={{ maxWidth: 450 }}
        aria-label="simple table"
        options={{
          rowStyle: {
            fontSize: 44,
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell className="first-row">#</TableCell>
            <TableCell className="first-row" align="right">
              Name
            </TableCell>
            <TableCell className="first-row" align="right">
              Score
            </TableCell>
            <TableCell className="first-row" align="right">
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.leaderboardRows.length
            ? props.leaderboardRows.map((row) => (
                <TableRow
                  key={row.place}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.place}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Leaderboard = (props) => {
  return (
    <div className="leaderboard-container">
      <BasicTable leaderboardRows={props.leaderboardRows} />
    </div>
  );
};

export default Leaderboard;
