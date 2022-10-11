import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import Input from "../../components/controls/Input";
import { InputAdornment } from "@material-ui/core";
import "../../../application/App.css";

function createData(name, psinka, hepa, parvo, lepto, besnota) {
  return { name, psinka, hepa, parvo, lepto, besnota };
}

const rows = [
  createData(
    "Hektor",
    "1.9.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData("Lio", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020"),
  createData(
    "Danio",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Chinchila",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Pippa",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Lulu May",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData("Ema", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020"),
  createData(
    "Nathaniel",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData("Lio", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020"),
  createData(
    "Danio",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Chinchila",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Pippa",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Lulu May",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData("Ema", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020"),
  createData(
    "Nathaniel",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Attinka",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Ellie",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Lola",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Lusy",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData(
    "Marvel",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData("Ori", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020"),
  createData(
    "Enye",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
  createData("Teo", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020", "1.5.2020"),

  createData(
    "Beny",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020",
    "1.5.2020"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Meno",
  },
  { id: "psinka", numeric: true, disablePadding: false, label: "Psinka" },
  { id: "hepa", numeric: true, disablePadding: false, label: "Hepatitída" },
  { id: "parvo", numeric: true, disablePadding: false, label: "Parvoviróza" },
  { id: "lepto", numeric: true, disablePadding: false, label: "Leptospiróza" },
  { id: "besnota", numeric: true, disablePadding: false, label: "Besnota" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.head}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all names" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  searchInput: {
    width: "55%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, filterFunction } = props;
  const [value, setValue] = React.useState("");

  const handleSearch = (event) => {
    filterFunction(event);
  };

  const handleChangeValue = (e) => {
    let target = e.target;
    setValue(target.value);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Vaccination
        </Typography>
      )}
      <Input
        label="Search"
        value={value}
        className={classes.searchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          handleChangeValue(e);
          handleSearch(e);
        }}
      />
      {numSelected > 0 ? (
        <>
          <Tooltip title="Edit">
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  filterFunction: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
  },
  table: {
    minWidth: 800,
  },
  head: {
    width: "100%",
    display: "block",
  },
  body: {
    display: "block",
    height: "280px",
    overflowY: "auto",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("psinka");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filterFunction, setFilterFunction] = React.useState({
    fn: (rows) => {
      return rows;
    },
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFunction({
      fn: (rows) => {
        if (target.value === "") return rows;
        else return rows.filter((x) => x.name.includes(target.value));
      },
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          filterFunction={handleSearch}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className={classes.body}>
              {stableSort(
                filterFunction.fn(rows),
                getComparator(order, orderBy)
              )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.psinka}</TableCell>
                      <TableCell align="right">{row.hepa}</TableCell>
                      <TableCell align="right">{row.parvo}</TableCell>
                      <TableCell align="right">{row.lepto}</TableCell>
                      <TableCell align="right">{row.besnota}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
