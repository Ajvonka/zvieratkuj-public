import React from "react";
import { TextField } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";

export default function Input(props) {
  const { value, name, label, onChange, error = null, ...other } = props;

  return (
    <>
      <TextField
        variant="outlined"
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        error={error}
        {...other}
      />
      {error && (
        <FormHelperText
          style={{
            color: "#FF0000",
          }}
        >
          {error}
        </FormHelperText>
      )}
    </>
  );
}
