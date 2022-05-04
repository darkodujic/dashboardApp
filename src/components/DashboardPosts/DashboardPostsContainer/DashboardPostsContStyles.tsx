import { makeStyles } from "@mui/styles";
import color from "../../../colors";
const useStyles = makeStyles(() => ({
  dashboardPostsContainer: {
    position: "relative",
    top: -30,
    left: -75,
  },
  dashboardPostDetails: {
    position: "relative",
    display: "flex",
    left: 0,
  },
  dashboardPostsWrapper: {
    height: 450,
    width: "100.5%",
    overflowY: "hidden",
    marginTop: -20,
    marginLeft: 5,

    "@media (max-width: 1870px)": {
      width: "60%",
    },
    "@media (max-width: 1725px)": {
      width: "106.5%",
    },
    "@media (max-width: 1620px)": {
      overflowX: "scroll",
      position: "relative",
      height: 1500,
      left: 25,
      width: "99%",
    },
    "@media (max-width: 1161px)": {
      overflowX: "auto",
      left: 110,
      padding: 0,
      margin: 0,
      position: "relative",
      width: "47%",
      zIndex: 2,
    },
    "@media (max-width: 769px)": {
      width: 300,
    },
    "@media (max-width: 500px)": {
      width: "16%",
    },
  },
  dashboardPostHeading: {
    display: "flex",
    background: color.grey,
    width: 1130,
    height: 58,
    position: "relative",
    left: 200,
    top: 0,
    alignItems: "center",
    "@media (max-width: 1620px)": {
      top: 570,
    },
    "@media (max-width: 1161px)": {
      display: "none",
    },
  },
  dashboardPostStatusCont: {
    color: color.orange,
    marginLeft: 38,
    width: 95,
    height: 32,
    background: color.lightestOrange,
    textAlign: "center",
    borderRadius: 10,
    marginTop: -10,
  },
  dashboardPostStatusContActive: {
    marginLeft: 38,
    width: 95,
    height: 32,
    background: color.lightestBlue,
    color: color.blue,
    textAlign: "center",
    borderRadius: 10,
    marginTop: -10,
  },
  dashboardPostStatusTrashed: {
    background: color.lightestRed,
    color: color.red,
    marginLeft: 38,
    width: 95,
    height: 32,
    textAlign: "center",
    borderRadius: 10,
    marginTop: -10,
  },
  dashboardPostHeadingThumbnail: {
    marginLeft: 15,
    "@media (max-width: 1620px)": {
      marginLeft: 27,
    },
  },
  dashboardPostHeadingTitle: {
    marginLeft: 20,

    "@media (max-width: 1870px)": {
      marginLeft: 12,
    },

    "@media (max-width: 1725px)": {
      marginLeft: 27,
    },

    "@media (max-width: 1620px)": {
      marginLeft: 20,
    },
  },
  dashboardPostHeadingAuthor: {
    marginLeft: 504,
    "@media (max-width: 1870px)": {
      marginLeft: 420,
    },
    "@media (max-width: 1725px)": {
      marginLeft: 295,
    },
    "@media (max-width: 1620px)": {
      marginLeft: 520,
    },
    "@media (max-width: 1490px)": {
      marginLeft: 440,
    },

    "@media (max-width: 1410px)": {
      marginLeft: 330,
    },

    "@media (max-width: 1300px)": {
      marginLeft: 217,
    },
  },
  dashboardPostHeadingStatus: {
    marginLeft: 150,
    "@media (max-width: 1870px)": {
      marginLeft: 150,
    },
    "@media (max-width: 1725px)": {
      marginLeft: 150,
    },
    "@media (max-width: 1620px)": {
      marginLeft: 150,
    },
    "@media (max-width: 1490px)": {
      marginLeft: 150,
    },
  },
  dashboardPostHeadingDate: {
    marginLeft: 70,
    "@media (max-width: 1870px)": {
      marginLeft: 70,
    },
    "@media (max-width: 1725px)": {
      marginLeft: 65,
    },
    "@media (max-width: 1620px)": {
      marginLeft: 70,
    },
  },
  dashboardPostHeadingAction: {
    marginLeft: 63,
    "@media (max-width: 1870px)": {
      marginLeft: 56,
    },

    "@media (max-width: 1725px)": {
      marginLeft: 65,
    },

    "@media (max-width: 1620px)": {
      marginLeft: 56,
    },
  },
}));

export const dashboardPostHeadingText = {
  color: color.secondGrey,
};
export { useStyles };
