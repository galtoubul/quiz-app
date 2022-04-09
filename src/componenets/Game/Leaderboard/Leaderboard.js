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

function createData(place, name, score, date) {
  return { place, name, score, date };
}

const rows = [
  createData(1, "Gal Toubul", 100, "09/04/2022"),
  createData(2, "Gal Toubul", 100, "09/04/2022"),
  createData(3, "Gal Toubul", 100, "09/04/2022"),
  createData(4, "Gal Toubul", 100, "09/04/2022"),
  createData(5, "Gal Toubul", 100, "09/04/2022"),
];

const BasicTable = () => {
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
          {rows.map((row) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <BasicTable />
    </div>
  );
};

export default Leaderboard;
