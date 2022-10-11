import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MaterialUIPicker from "./DatePicker";

export default function PopupDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="text"
        style={{
          marginBottom: "20px",
          backgroundColor: "#ede7f6",
          borderColor: "#673ab7",
          color: "black",
          fontSize: "15px",
          textAlign: "left",
        }}
        label="center"
        onClick={handleClickOpen}
      >
        Insert new item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Vaccination form</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter a new record.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <MaterialUIPicker />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
