import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Table.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, psinka, hepatitida, parvo, leptospiroza, besnota) {
  return { name, psinka, hepatitida, parvo, leptospiroza, besnota };
}

const rows = [
  createData(
    "Matysko",
    "14.2.2020",
    "15.1.2020",
    "16.2.2020",
    "20.3.2020",
    "1.5.2020"
  ),
  createData(
    "Atmel",
    "14.2.2020",
    "15.6.2020",
    "13.7.2020",
    "19.8.2020",
    "1.9.2020"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Meno</StyledTableCell>
            <StyledTableCell align="center">Psinka</StyledTableCell>
            <StyledTableCell align="center">Hepatitida</StyledTableCell>
            <StyledTableCell align="center">Parvo</StyledTableCell>
            <StyledTableCell align="center">Leptospiroza</StyledTableCell>
            <StyledTableCell align="center">Besnota</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.psinka}</StyledTableCell>
              <StyledTableCell align="center">{row.hepatitida}</StyledTableCell>
              <StyledTableCell align="center">{row.parvo}</StyledTableCell>
              <StyledTableCell align="center">
                {row.leptospiroza}
              </StyledTableCell>
              <StyledTableCell align="center">{row.besnota}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
