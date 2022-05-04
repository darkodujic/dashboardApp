import { Typography } from "@mui/material";
import React from "react";
import { CategoriesTextProps } from "../../utils/interfaceTypes";

const CategoriesText: React.FC<CategoriesTextProps> = ({ sxProps, text }) => {
  return <Typography sx={sxProps}>{text}</Typography>;
};

export default CategoriesText;
