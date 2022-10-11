import React, { useState } from "react";
import "../../application/App.css";
import "../../styles/Vetcare/Vetcare.css";
import VaccinationForm from "../components/VaccinationForm";
import VetCarePic from "../images/Men&pet.jpg";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../components/useTable";
import * as vaccinationService from "../services/vaccinationService";
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../components/Popup";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import "../../application/App.css";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import { removeSelectedPet } from "../redux/actions/petActions";
import { addSelectedPet } from "../redux/actions/petActions";
import { editSelectedPet } from "../redux/actions/petActions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "80%",
    flexDirection: "column",
    margin: theme.spacing(5),
    padding: theme.spacing(3),

    "& thead th": {
      fontSize: "0.8vw",
      width: "100%",
      fontWeight: "600",
      color: "#000000",
      backgroundColor: "#9EBAC4",
    },
    "& table": {
      fontSize: "1vw",
      tableLayout: "fixed",
      width: "100%",
    },
  },

  toolbar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  searchInput: {
    minWidth: "50%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  cellLink: {
    color: "#05acac",
  },
}));

const headCells = [
  { id: "name", label: "Name" },
  { id: "dateOfBirth", label: "Date of birth" },
  { id: "gender", label: "Gender" },
  { id: "origin", label: "Origin" },
  { id: "pils", label: "Pils" },
  { id: "deseasesId", label: "Deseases" },
  { id: "canineDistemper", label: "Canine distemper" },
  { id: "hepa", label: "Hepatitis" },
  { id: "parvo", label: "Parvovirose" },
  { id: "lepto", label: "Leptospirosis" },
  { id: "rabies", label: "Rabies" },
  { id: "deworming", label: "Deworming" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function VetCare() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(vaccinationService.getAllPets);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const handleClose = () => {
    setOpenPopup(false);
  };

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) dispatch(addSelectedPet(employee));
    else dispatch(editSelectedPet(employee));
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(vaccinationService.getAllPets());
  };

  const remove = (employee) => {
    dispatch(removeSelectedPet(employee));
    setRecords(vaccinationService.getAllPets());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const dispatch = useDispatch();

  const confirmToDelete = (petId, setOpen, onClose) => {
    confirmAlert({
      title: "Confirm delete",
      message: "Are you sure you want to delete this item?",
      open: { setOpen },
      onClose: { handleClose },
      buttons: [
        {
          label: "Delete",
          onClick: () => remove(petId),
        },
        {
          label: "Cancel",
          onClick: () => handleClose(),
        },
      ],
    });
  };

  return (
    <>
      <div className="vetcare-section">
        <section className="menDog-section">
          <h1
            style={{
              fontSize: "40px",
              color: "#34495e",
            }}
          >
            ...make your pet's care easier.
          </h1>
          <img id="dogMan" src={VetCarePic} alt="Dog & Men"></img>
        </section>
        <section className="vet-table-section">
          <Paper className={classes.root}>
            <Toolbar className={classes.toolbar}>
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
                    <TableCell>
                      <a
                        className={classes.cellLink}
                        href={`/VetCare/Dashboard/${item.id}`}
                      >
                        {item.name}
                      </a>
                    </TableCell>
                    <TableCell>{item.dateOfBirth}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.origin}</TableCell>
                    <TableCell>{item.pils}</TableCell>
                    <TableCell>{item.deseasesId}</TableCell>
                    <TableCell>{item.canineDistemper}</TableCell>
                    <TableCell>{item.hepa}</TableCell>
                    <TableCell>{item.parvo}</TableCell>
                    <TableCell>{item.lepto}</TableCell>
                    <TableCell>{item.rabies}</TableCell>
                    <TableCell>{item.deworming}</TableCell>
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
                          onClick={() => {
                            confirmToDelete(item.id);
                          }}
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
          <Popup
            title="Pet Form"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            setMaxWidth="md"
          >
            <VaccinationForm
              recordForEdit={recordForEdit}
              addOrEdit={addOrEdit}
            />
          </Popup>
        </section>
      </div>
    </>
  );
}
