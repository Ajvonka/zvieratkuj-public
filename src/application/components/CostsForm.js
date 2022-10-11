import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Controls from "./controls/Controls";
import { useForm, Form } from "./useForm";
import { useSelector } from "react-redux";

const initialFValues = {
  id: 0,
  food: "",
  veterinary: "",
  others: "",
  period: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: "#D0EBF1",
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
      backgroundColor: "#B23C73",
    },
  },
}));

export default function CostsForm(props) {
  const classes = useStyles();
  const { addOrEdit, recordForEdit } = props;
  const data = useSelector((state) => state.cost);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("period" in fieldValues) {
      if (
        fieldValues.period !== null &&
        !data.map((item) => item.period).includes(fieldValues.period)
      ) {
        temp.period = "";
      }

      if (fieldValues.period == null) {
        temp.period = "This field is required.";
      }

      //TODO: Fix edit function for existing date
      /*if (data.map((item) => item.period).includes(fieldValues.period)) {
        temp.period = "This record already exists!";
      }*/
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={8}>
          <div>
            <Controls.DatePicker
              name="period"
              label="Period"
              value={values.period}
              onChange={handleInputChange}
              error={errors.period}
            />
          </div>
          <Controls.Input
            name="food"
            label="Food"
            value={values.food}
            onChange={handleInputChange}
            error={errors.food}
          />
          <Controls.Input
            name="veterinary"
            label="Veterinary"
            value={values.veterinary}
            onChange={handleInputChange}
            error={errors.veterinary}
          />
          <Controls.Input
            name="others"
            label="Others"
            value={values.others}
            onChange={handleInputChange}
            error={errors.others}
          />
          <Controls.Button type="submit" text="Submit" />
          <Controls.Button text="Reset" color="default" onClick={resetForm} />
        </Grid>
      </Grid>
    </Form>
  );
}
