import { Typography } from "@mui/material";
import React from "react";
import { DashboardPostsHeadingTextProps } from "../../../../utils/interfaceTypes";
import { dashboardPostHeadingText } from "../DashboardPostsContStyles";

const DashboardPostsHeadingText: React.FC<DashboardPostsHeadingTextProps> = ({
  text,
}) => {
  return <Typography sx={dashboardPostHeadingText}>{text}</Typography>;
};
export default DashboardPostsHeadingText;
