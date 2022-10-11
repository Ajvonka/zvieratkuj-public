import React, { useState } from "react";
import "../../application/App.css";
import "../../styles/Costs/Costs.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import ChartJsTestVersion from "../components/ChartJsTestVersion";
import Investments from "../images/investments.png";
import CostsForm from "../components/CostsForm";
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
import * as costsService from "../services/costsService";
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../components/Popup";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import { removeSelectedPayment } from "../redux/actions/costAction";
import { addSelectedPayment } from "../redux/actions/costAction";
import { editSelectedPayment } from "../redux/actions/costAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useSelector } from "react-redux";

import "@formatjs/intl-datetimeformat/polyfill";

const useStyles = makeStyles((theme) => ({
  table: {
    "& thead th": {
      fontWeight: "600",
      color: "#000000",
      backgroundColor: "#e8d4bc",
    },
    display: "flex",
    flexDirection: "column",
    width: "90%",

    margin: theme.spacing(5),
    padding: theme.spacing(3),
    backgroundColor: "#f8f8f8",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  searchInput: {
    minWidth: "60%",
  },
  newButton: {
    position: "absolute",
    right: "1px",
  },
  cellLink: {
    color: "#05acac",
  },
  paper: {
    width: "80%",
    height: "200px",
  },
}));

const headCells = [
  { id: "food", label: "Food" },
  { id: "veterinary", label: "Veterinary" },
  { id: "others", label: "Others" },
  { id: "period", label: "Period" },

  { id: "actions", label: "Actions", disableSorting: true },
];

export default function Costs() {
  const classes = useStyles();
  const costs = useSelector((state) => state.cost);

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(costsService.getAllPayments());
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
            x.category.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) dispatch(addSelectedPayment(employee));
    else dispatch(editSelectedPayment(employee));
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(costsService.getAllPayments());
  };

  const remove = (employee) => {
    dispatch(removeSelectedPayment(employee));
    setRecords(costsService.getAllPayments());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const dispatch = useDispatch();

  const confirmToDelete = (costId, setOpen, onClose) => {
    confirmAlert({
      title: "Confirm delete",
      message: "Are you sure you want to delete this item?",
      open: { setOpen },
      onClose: { handleClose },
      buttons: [
        {
          label: "Delete",
          onClick: () => remove(costId),
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
      <div className="costs-section">
        <section className="investmentsPic-section">
          <h1
            style={{
              fontSize: "40px",
              color: "#34495e",
            }}
          >
            ...keep calm and pay the bills.
          </h1>
          <img id="manCosts" src={Investments} alt="costs"></img>
        </section>
        <div className="cost-table-chart-section">
          <section className="costs-table-section">
            <Paper className={classes.table}>
              <Toolbar className={classes.toolbar}>
                <Controls.Input
                  label="Search payment"
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
                  text="Add new payment"
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
                      <TableCell>{item.food}</TableCell>
                      <TableCell>{item.veterinary}</TableCell>
                      <TableCell>{item.others}</TableCell>
                      <TableCell>{item.period}</TableCell>
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
              title="Costs Form"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setMaxWidth="sm"
            >
              <CostsForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
            </Popup>
          </section>
          <section className="costsChart-section">
            <ChartJsTestVersion data={costs} />
          </section>
        </div>
      </div>
    </>
  );
}
