import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  useStyles,
  sidebarDashboardStylesText,
  sidebarElegantStylesText,
  sidebarHideHeading,
} from "./SidebarStyles";
import "./Sidebar";
import { SideHeaderProps } from "../../utils/interfaceTypes";

const SidebarHeader: React.FC<SideHeaderProps> = ({ logo, sidebar }) => {
  const classes = useStyles();
  return (
    <div>
      <NavLink to={"/"}>
        <div className={sidebar ? classes.logo : classes.logoHidden}>
          <img src={logo} />
        </div>

        {sidebar ? (
          <Typography sx={sidebarElegantStylesText}>Elegant</Typography>
        ) : (
          <Typography sx={sidebarHideHeading}></Typography>
        )}

        {sidebar ? (
          <Typography sx={sidebarDashboardStylesText}>Dashboard</Typography>
        ) : (
          <Typography sx={sidebarHideHeading}></Typography>
        )}
      </NavLink>
    </div>
  );
};

export default SidebarHeader;
