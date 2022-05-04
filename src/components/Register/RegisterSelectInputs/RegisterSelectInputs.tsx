import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { registerSelectInputCont } from "./RegisterSelectInputsStyles";
import { SelectCompProps } from "../../../utils/interfaceTypes";

const SelectComp: React.FC<SelectCompProps> = ({
  selectValue,
  role,
  label,
  onChange,
  value,
}) => {
  return (
    <div>
      <Box sx={registerSelectInputCont}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{role}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={onChange}
          >
            {selectValue.map((el: string) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectComp;
