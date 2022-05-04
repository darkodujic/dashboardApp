import { Button } from "@mui/material";
import React from "react";
import { ButtonProps } from "../../../utils/interfaceTypes";

const LoginButton: React.FC<ButtonProps> = ({ btnText, sxProps, onClick }) => {
  return (
    <div>
      <Button onClick={onClick} type="submit" sx={sxProps} variant="contained">
        {btnText}
      </Button>
    </div>
  );
};

export default LoginButton;
