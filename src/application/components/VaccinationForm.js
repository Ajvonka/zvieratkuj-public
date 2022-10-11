import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import { useForm, Form } from "./useForm";
import { useSelector } from "react-redux";
import * as vaccinationService from "../services/vaccinationService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

const initialFValues = {
  id: 0,
  name: "",
  dateOfBirth: null,
  canineDistemper: null,
  hepa: null,
  parvo: null,
  lepto: null,
  rabies: null,
  deworming: null,
  gender: "male",
  origin: "OZ Priateľ Pes",
  deseasesId: "None",
  pils: "",
  isPermanent: false,
};

export default function VaccinationForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const data = useSelector((state) => state.pet);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";

    //TODO:
    /*if (data.map((item) => item.name).includes(fieldValues.name)) {
      temp.name = "This record already exists!";
    }*/

    if ("dateOfBirth" in fieldValues)
      temp.dateOfBirth =
        fieldValues.dateOfBirth !== null ? "" : "This field is required.";

    if ("origin" in fieldValues)
      temp.origin =
        fieldValues.origin.length !== 0 ? "" : "This field is required.";

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
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.DatePicker
            name="dateOfBirth"
            label="Date of birth"
            value={values.dateOfBirth}
            onChange={handleInputChange}
            error={errors.dateOfBirth}
          />
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="origin"
            label="Origin"
            value={values.origin}
            onChange={handleInputChange}
            options={vaccinationService.getOriginCollection()}
            error={errors.origin}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Pet"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="deseasesId"
            label="Deseases"
            value={values.deseasesId}
            onChange={handleInputChange}
            options={vaccinationService.getDiseasesCollection()}
          />
          <Controls.Input
            name="pils"
            label="Pils"
            value={values.pils}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Controls.DatePicker
            label="Canine distemper"
            name="canineDistemper"
            value={values.canineDistemper}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            label="Hepatitis"
            name="hepa"
            value={values.hepa}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            label="Parvovirose"
            name="parvo"
            value={values.parvo}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            label="Leptospirosis"
            name="lepto"
            value={values.lepto}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            label="Rabies"
            name="rabies"
            value={values.rabies}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            label="Deworming"
            name="deworming"
            value={values.deworming}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
