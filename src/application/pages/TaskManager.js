import React, { useState } from "react";
import "../../application/App.css";
import "../../styles/TaskManager/TaskManager.css";
import TaskForm from "../components/TaskForm";
import TaskDog from "../images/task-dog.jpg";
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
import * as taskService from "../services/taskService";
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../components/Popup";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import "../../application/App.css";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import { removeSelectedTask } from "../redux/actions/taskAction";
import { addSelectedTask } from "../redux/actions/taskAction";
import { editSelectedTask } from "../redux/actions/taskAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    margin: theme.spacing(5),
    padding: theme.spacing(3),

    "& thead th": {
      fontSize: "0.8vw",
      width: "100%",
      fontWeight: "600",
      color: "#000000",
      backgroundColor: "#EDD9A0",
    },
    "& table": {
      fontSize: "1vw",
      tableLayout: "fixed",
      width: "100%",
    },
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
}));

const headCells = [
  { id: "task", label: "Task" },
  { id: "todo", label: "TODO" },
  { id: "actions", label: "Actions", disableSorting: true },
];

function TaskManager() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(taskService.getAllTasks());
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
            x.task.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) dispatch(addSelectedTask(employee));
    else dispatch(editSelectedTask(employee));
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(taskService.getAllTasks());
  };

  const remove = (employee) => {
    dispatch(removeSelectedTask(employee));
    setRecords(taskService.getAllTasks());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const dispatch = useDispatch();

  const confirmToDelete = (taskId, setOpen, onClose) => {
    confirmAlert({
      title: "Confirm delete",
      message: "Are you sure you want to delete this item?",
      open: { setOpen },
      onClose: { handleClose },
      buttons: [
        {
          label: "Delete",
          onClick: () => remove(taskId),
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
      <div className="task-section">
        <section className="taskDog-section">
          <h1
            style={{
              fontSize: "40px",
              color: "#34495e",
            }}
          >
            ...I can remind you your tasks.
          </h1>
          <img id="taskDog" src={TaskDog} alt="TODO"></img>
        </section>
        <section className="table-section">
          <Paper className={classes.root}>
            <Toolbar className={classes.toolbar}>
              <Controls.Input
                label="Search task"
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
                text="Add new task"
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
                    <TableCell>{item.task}</TableCell>
                    <TableCell>{item.todo}</TableCell>

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
            title="Task Form"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <TaskForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
          </Popup>
        </section>
      </div>
    </>
  );
}

export default TaskManager;
