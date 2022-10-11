import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormHelperText } from "@material-ui/core";

import MomentUtils from "@date-io/moment";
import moment from "moment";

export default function DatePicker(props) {
  const { name, label, value, onChange, error = null } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM-DD-yyyy"
        name={name}
        value={value}
        onChange={(date) =>
          onChange(
            convertToDefEventPara(name, moment(date).format("MM-DD-yyyy"))
          )
        }
        error={error}
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
    </MuiPickersUtilsProvider>
  );
}
