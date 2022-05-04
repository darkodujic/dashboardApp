import { Icon, Typography } from "@mui/material";
import { ClassNameMap } from "@mui/styles";
import { TFunction } from "i18next";
import { NavLink } from "react-router-dom";
import { SidebarLinkProps } from "../../../utils/interfaceTypes";

const SidebarLink: React.FC<SidebarLinkProps> = ({
  classes,
  sidebar,
  dashboardLocation,
  translate,
  path,
  img,
}) => {
  return (
    <div className={classes.dashboardCont}>
      {sidebar ? (
        <div
          className={
            dashboardLocation === path
              ? classes.borderRight
              : classes.borderHidden
          }
        ></div>
      ) : null}
      <NavLink
        className={(sideData) =>
          sideData.isActive ? classes.editLinks : classes.newEditLinks
        }
        to={path}
      >
        <Icon className={classes.navIcon}>
          <img
            className={sidebar ? classes.homeIcon : classes.homeIconHidden}
            src={img}
          />
        </Icon>
        <Typography
          className={sidebar ? classes.typoNav : classes.typoNavHidden}
        >
          {translate}
        </Typography>
      </NavLink>
    </div>
  );
};

export default SidebarLink;
