import { TextField } from "@mui/material";
import React from "react";
import { inputLabelText } from "../../../pages/Categories/CategoriesStyles";
import { AddCategoriesInputProps } from "../../../utils/interfaceTypes";

const AddCategoriesInputs: React.FC<AddCategoriesInputProps> = ({
  sxProps,
  label,
  value,
  onChange,
  minRows,
}) => {
  return (
    <>
      <TextField
        variant="standard"
        required
        sx={sxProps}
        id="outlined-multiline-flexible"
        label={label}
        multiline
        minRows={minRows}
        value={value}
        onChange={onChange}
        InputProps={{
          disableUnderline: true,
        }}
        InputLabelProps={{
          style: inputLabelText,
        }}
      />
    </>
  );
};

export default AddCategoriesInputs;
