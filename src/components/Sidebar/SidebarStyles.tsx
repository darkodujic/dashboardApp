import { makeStyles } from "@mui/styles";
import color from "../../colors";
import { createTheme } from "@mui/material";

export const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
});
const useStyles = makeStyles(() => ({
  sidebar: {
    background: color.blue,
    height: "100%",
    width: 303,
    top: 0,
    left: 0,
    position: "fixed",
    transition: "all .5s ease-in-out",
    zIndex: 3,
    "@media (max-width: 1580px)": {
      height: "100%",
      top: 0,
      left: 0,
      position: "fixed",
    },
    "@media (max-width:1161px)": {
      background: color.blue,
      left: 0,
      top: 0,
      transition: "all .5s ease-in-out",
      zIndex: 3,
    },
    "@media (max-width:769px)": {
      background: color.blue,
      width: 103,
      left: 0,
      top: 0,
      transition: "all .5s ease-in-out",
      zIndex: 3,
    },
  },
  sidebarHidden: {
    background: color.blue,
    height: "100%",
    width: 103,
    top: 0,
    left: 0,
    position: "fixed",
    transition: "all .5s ease-in-out",
    zIndex: 3,

    "@media (max-width: 1580px)": {
      height: "100%",
      top: 0,
      left: 0,
      position: "fixed",
    },
    "@media (max-width:1161px)": {
      background: color.blue,
      left: 0,
      top: 0,
      transition: "all .5s ease-in-out",
      zIndex: 3,
    },
    "@media (max-width:769px)": {
      background: color.blue,

      width: 103,
      left: 0,
      top: 0,

      transition: "all .5s ease-in-out",
      zIndex: 3,
    },
  },
  sidebarSideheader: {
    position: "relative",
    left: 0,
    right: 0,
    top: 16,
    bottom: 92,
    height: 92,
    width: 317,
    transition: "all .5s ease-in-out",

    "@media (max-width:769px)": {
      width: 0,
    },
  },
  logo: {
    left: 20,
    top: 21,
    position: "absolute",
    cursor: "pointer",
    "@media (max-width:769px)": {
      display: "none",
    },
  },

  logoHidden: {
    display: "none",
  },
  sidebarMenuToggle: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 249,
    top: 36,
    cursor: "pointer",
    "@media (max-width:769px)": {
      position: "absolute",
      width: 24,
      height: 24,
      left: 40,
      top: 34,
      cursor: "pointer",
    },
  },
  sidebarMenuTogglePosition: {
    position: "absolute",
    width: 24,
    height: 24,
    left: 40,
    top: 34,
    cursor: "pointer",
  },
  divider: {
    top: 100,
    left: 20,
    position: "absolute",
    "@media (max-width:769px)": {
      width: 213,
      left: 0,
      position: "absolute",
    },
  },
  dividerChange: {
    top: 100,
    width: 213,
    left: 0,
    position: "absolute",
  },
  sidebarNavbar: {
    position: "relative",
    left: -10,
    right: 0,
    top: 35,
    bottom: 43,
    width: 253,
    height: 540,
    "@media (max-width:769px)": {
      width: "auto",
    },
  },
  homeIcon: {
    position: "absolute",
    left: 10,
    right: 10,
    top: 8,
    bottom: 8,

    "@media (max-width:769px)": {
      position: "absolute",
      left: 16,
      right: 10,
      top: 8,
      bottom: 8,
    },
  },
  homeIconHidden: {
    position: "absolute",
    left: 28,
    right: 10,
    top: 8,
    bottom: 8,
  },

  dashboardCont: {
    display: "flex",
    justifyItems: "center",
    position: "relative",
    width: 253,
    height: 51,
    marginLeft: 20,
    marginTop: 20,
    zIndex: 2,
  },
  typoNav: {
    position: "relative",
    top: 7,
    left: 4,
    color: color.white,
    textDecoration: "none",
    "@media (max-width:769px)": {
      display: "none",
    },
  },
  typoNavHidden: {
    display: "none",
  },
  systemIcon: {
    width: 54,
    height: 15,
    letterSpacing: 1,
    lineHeight: 15,
    color: color.white,
    position: "absolute",
    left: 20,
    top: 10,
    opacity: 0.5,
    "@media (max-width:769px)": {
      left: 0,
      width: 54,
      height: 15,
      letterSpacing: 1,
      lineHeight: 15,
      color: color.white,
      top: 13,
      position: "absolute",
      opacity: 0.5,
    },
  },
  systemIconChanged: {
    left: 10,
    width: 54,
    height: 15,
    letterSpacing: 1,
    lineHeight: 15,
    color: color.white,
    top: 13,
    position: "absolute",
    opacity: 0.5,
  },
  userCont: {
    position: "relative",
    left: 10,
    right: 8,
    bottom: 10,
    top: 250,

    "@media (max-width:769px)": {
      display: "none",
    },
  },

  avatar: {
    position: "absolute",
    left: 26,
    bottom: 43,
  },

  avatarHidden: {
    display: "none",
  },
  avatarImg: {
    position: "absolute",
    left: 7,
    right: 7,
    top: 8,
    bottom: 7,
    width: "80%",
  },
  square: {
    position: "relative",
    width: 253,
    height: 81,
    borderRadius: "10px",
    left: 22,
    bottom: -140,
    background: color.white,
    opacity: 0.1,

    "@media (max-width:769px)": {
      display: "none",
    },
  },
  squareHidden: {
    display: "none",
  },

  active: {
    opacity: 1,
    position: "relative",
    top: 8,
    left: 25,
    color: color.white,
  },
  userContHidden: {
    display: "none",
  },
  navIcon: {
    cursor: "pointer",
    marginLeft: 15,
  },
  editLinks: {
    textDecoration: "none",
    display: "flex",
    opacity: 1,
    color: color.white,
  },

  borderRight: {
    background: color.white,
    height: 22,
    width: 3,
    position: "absolute",
    right: -38,
    marginTop: 8,

    "@media (max-width:769px)": {
      display: "none",
    },
  },
  borderHidden: {
    display: "none",
  },
  newEditLinks: {
    opacity: 0.6,
    color: color.white,
    textDecoration: "none",
    display: "flex",
  },
}));

export const sidebarAvatarImg = {
  height: 56,
  width: "20%",
  position: "absolute",
  bottom: 43,
  left: 26,
};

export const sidebarAvatarFullName = {
  position: "relative",
  width: "100%",
  height: 34,
  left: 96,
  bottom: 38,
  color: color.white,
  fontWeight: 600,
  letterSpacing: 0.8,
};

export const sidebarAvatarRole = {
  position: "relative",
  height: 15,
  left: 96,
  bottom: 51,
  color: color.white,
  opacity: 0.5,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 1.4,
  width: "100%",
};
const sidebarDashboardStylesText = {
  position: "absolute",
  width: 70,
  height: 29,
  left: 85,
  top: -145,
  color: color.white,
  fontSize: 14,
  lineHeight: 29,
  opacity: 0.9,
  fontWeight: 500,
  letterSpacing: 0.86,

  "@media (max-width:769px)": {
    display: "none",
  },
};

const sidebarHideHeading = {
  display: "none",
};

const sidebarElegantStylesText = {
  position: "absolute",
  width: 81,
  height: 29,
  left: 85,
  top: -283,
  color: color.white,
  lineHeight: 29,
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 22,
  letterSpacing: 2,

  "@media (max-width:769px)": {
    display: "none",
  },
};

export {
  useStyles,
  sidebarDashboardStylesText,
  sidebarElegantStylesText,
  sidebarHideHeading,
};
