import React, { useState } from "react";
import VaccinationForm from "./VaccinationForm";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../../components/useTable";
import * as vaccinationService from "../../services/vaccinationService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import "../../../application/App.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/HeaderOriginal";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  table: {
    display: "block",
    minWidth: 800,
    width: "auto",
    margin: theme.spacing(5),
    marginLeft: "500px",
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  headerLogo: {
    cursor: "pointer",
    width: "50px",
    marginRight: "20px",
  },
}));

const headCells = [
  { id: "name", label: "Name" },
  { id: "gender", label: "Gender" },
  { id: "psinka", label: "Psinka" },
  { id: "hepa", label: "Hepatitis" },
  { id: "parvo", label: "Parvovirose" },
  { id: "lepto", label: "Leptospirosis" },
  { id: "rabies", label: "Rabies" },
  { id: "actions", label: "Actions", disableSorting: true },
];

/*export default function Vaccination() {*/
function Vaccination() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(vaccinationService.getAllPets);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) vaccinationService.insertPet(employee);
    else vaccinationService.updatePet(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(vaccinationService.getAllPets());
  };

  /*
  TODO: Add dialog to inform about delete action
  */
  const remove = (employee) => {
    vaccinationService.deletePet(employee);
    setRecords(vaccinationService.getAllPets());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <>
      <Header />
      <Paper className={classes.table}>
        <Toolbar>
          <Controls.Input
            label="Search Pets"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.psinka}</TableCell>
                <TableCell>{item.hepa}</TableCell>
                <TableCell>{item.parvo}</TableCell>
                <TableCell>{item.lepto}</TableCell>
                <TableCell>{item.rabies}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <Controls.ActionButton
                      color="primary"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Controls.ActionButton
                      color="secondary"
                      onClick={() => remove(item)}
                    >
                      <CloseIcon fontSize="small" />
                    </Controls.ActionButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup title="Pet Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <VaccinationForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <div className="side-navigation">
        <SideNavigation />
      </div>
      <Footer />
    </>
  );
}

export default Vaccination;
