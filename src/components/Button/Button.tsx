import { Button } from "@mui/material";
import React from "react";
import { error404MainButton } from "../../pages/404/Error404Styles";
import { ErrorButtonProps } from "../../utils/interfaceTypes";

const Error404Button: React.FC<ErrorButtonProps> = ({
  locationFunc,
  buttonText,
}) => {
  return (
    <Button
      sx={error404MainButton}
      onClick={locationFunc}
      color="primary"
      variant="contained"
    >
      {buttonText}
    </Button>
  );
};

export default Error404Button;
