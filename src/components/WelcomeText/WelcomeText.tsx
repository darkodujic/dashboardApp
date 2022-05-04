import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../../pages/Login/LoginStyles";
import {
  loginWelcomeHeadingMainText,
  loginWelcomeHeadingSpanText,
} from "./WelcomeTextStyles";
import { RegisterHeadingProps } from "../../utils/interfaceTypes";

const WelcomeText: React.FC<RegisterHeadingProps> = ({
  headerText,
  spanText,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Typography sx={loginWelcomeHeadingMainText} variant="h5">
        {headerText}
      </Typography>
      <Typography
        className={classes.loginHeadingSecondaryText}
        sx={loginWelcomeHeadingSpanText}
        variant="h6"
      >
        {spanText}
      </Typography>
    </div>
  );
};

export default WelcomeText;
