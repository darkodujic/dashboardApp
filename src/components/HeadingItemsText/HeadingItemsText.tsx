import { Typography } from "@mui/material";
import React from "react";
import { HeadingItemsTextProps } from "../../utils/interfaceTypes";

const HeadingItemsText: React.FC<HeadingItemsTextProps> = ({
  sxClass,
  text,
}) => {
  return <Typography sx={sxClass}>{text}</Typography>;
};

export default HeadingItemsText;
