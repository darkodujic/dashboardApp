import { TextField } from "@mui/material";
import React from "react";
import { inputLabelText } from "../../../pages/Categories/CategoriesStyles";
import { loginInputText } from "../../../pages/Login/LoginStyles";
import { InputTypeProps } from "../../../utils/interfaceTypes";
import useStyles from "./InputFieldStyles";

const InputField: React.FC<InputTypeProps> = ({
  sxProps,
  labelName,
  type,
  labelInsideText,
  id,
  value,
  onChange,
  name,
  error,
  helperText,
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.formDetails}>
        <label className={classes.label}>{labelName}</label>
        <TextField
          sx={sxProps}
          required
          id={id}
          name={name}
          label={labelInsideText}
          variant="filled"
          type={type}
          value={value}
          onChange={onChange}
          error={error}
          helperText={helperText}
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: loginInputText,
          }}
        />
      </div>
    </div>
  );
};

export default InputField;
