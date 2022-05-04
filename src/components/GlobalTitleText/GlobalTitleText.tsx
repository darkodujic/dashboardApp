import { SxProps, Theme, Typography } from "@mui/material";
import React from "react";

interface TitleTextProps {
  sxProps: SxProps<Theme> | undefined;
  text: string;
}
const TitleText: React.FC<TitleTextProps> = ({ sxProps, text }) => {
  return (
    <Typography sx={sxProps} variant="h4" component="h2">
      {text}
    </Typography>
  );
};

export default TitleText;
