import {Typography } from "@mui/material";

import React from "react";
import { DashboardCategoryTextProps } from "../../../../utils/interfaceTypes";

const DashboardCategoryText: React.FC<DashboardCategoryTextProps> = ({
  text,
  sxProps,
}) => {
  return <Typography sx={sxProps}>{text}</Typography>;
};

export default DashboardCategoryText;
