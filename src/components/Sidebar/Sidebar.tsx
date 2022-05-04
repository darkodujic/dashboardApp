import { Icon, Typography } from "@mui/material";
import React, { useState } from "react";
import Divider from "../../img/divider.svg";
import HomeIcon from "../../img/Home.svg";
import Document from "../../img/Document.svg";
import FolderIcon from "../../img/Folder.svg";
import Users from "../../img/User.svg";
import Avatar from "../../img/Avatar.svg";
import Logo from "../../img/logo.svg";
import ToggleIcon from "../../img/menu-toggle.svg";
import {
  sidebarAvatarFullName,
  sidebarAvatarImg,
  sidebarAvatarRole,
  useStyles,
} from "./SidebarStyles";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink/SidebarLink";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const classes = useStyles();
  const dashboardLocation: string = location.pathname;
  const [sidebar, setSidebar] = useState<boolean>(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className={sidebar ? classes.sidebar : classes.sidebarHidden}>
      <div className={classes.sidebarSideheader}>
        <Icon
          className={
            sidebar
              ? classes.sidebarMenuToggle
              : classes.sidebarMenuTogglePosition
          }
          onClick={showSidebar}
        >
          <img src={ToggleIcon} />
        </Icon>
        <SidebarHeader logo={Logo} sidebar={sidebar} />
        <Icon>
          <img
            className={sidebar ? classes.divider : classes.dividerChange}
            src={Divider}
          />
        </Icon>
      </div>
      <div className={classes.sidebarNavbar}>
        <SidebarLink
          classes={classes}
          sidebar={sidebar}
          dashboardLocation={dashboardLocation}
          translate={t("sidebar.dashboard")}
          path={"/"}
          img={HomeIcon}
        />
        <SidebarLink
          classes={classes}
          sidebar={sidebar}
          dashboardLocation={dashboardLocation}
          translate={t("sidebar.posts")}
          path={"/posts"}
          img={Document}
        />
        <SidebarLink
          classes={classes}
          sidebar={sidebar}
          dashboardLocation={dashboardLocation}
          translate={t("sidebar.categories")}
          path={"/categories"}
          img={FolderIcon}
        />

        <div className={classes.dashboardCont}>
          <Typography
            className={sidebar ? classes.systemIcon : classes.systemIconChanged}
          >
            {t("sidebar.system")}
          </Typography>
        </div>

        <SidebarLink
          classes={classes}
          sidebar={sidebar}
          dashboardLocation={dashboardLocation}
          translate={t("sidebar.users")}
          path={"/users"}
          img={Users}
        />
      </div>

      <div className={sidebar ? classes.userCont : classes.userContHidden}>
        <Icon sx={sidebarAvatarImg}>
          <img className={classes.avatarImg} src={Avatar} />
        </Icon>

        <Typography sx={sidebarAvatarFullName}>Nafisa Sh.</Typography>
        <Typography sx={sidebarAvatarRole}>{t("sidebar.manager")}</Typography>
      </div>
      <div className={sidebar ? classes.square : classes.squareHidden}></div>
    </div>
  );
};
export default Sidebar;
