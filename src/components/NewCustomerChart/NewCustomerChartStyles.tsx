import colors from "../../colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  newCustomersChart: {
    maxWidth: 371,
    height: 350,
    background: colors.darkBlue,
    position: "relative",
    top: -208,
    left: "67.6%",
    borderRadius: 10,
    overflow: "hidden",
    zIndex: 3,
    "@media (max-width: 1870px)": {
      left: 1162,
      maxWidth: 330,
    },
    "@media (max-width: 1725px)": {
      left: 1125,
      maxWidth: 320,
    },

    "@media (max-width: 1670px)": {
      left: 1092,
      maxWidth: 304,
    },
    "@media (max-width: 1620px)": {
      maxWidth: "94.3%",
      height: 440,
      overflowX: "scroll",
      left: 0,
    },
    "@media (max-width: 1570px)": {
      maxWidth: "89%",
    },

    "@media (max-width: 1520px)": {
      maxWidth: "84.5%",
    },

    "@media (max-width: 1480px)": {
      maxWidth: "78.3%",
    },

    "@media (max-width: 1430px)": {
      maxWidth: "73.5%",
    },

    "@media (max-width: 1385px)": {
      maxWidth: "69.5%",
    },

    "@media (max-width: 1350px)": {
      maxWidth: "65%",
    },

    "@media (max-width: 1160px)": {
      maxWidth: "60%",
    },
    "@media (max-width: 769px)": {
      left: -160,
      maxWidth: 300,
      height: 300,
    },
    "@media (max-width: 500px)": {
      maxWidth: "70%",
    },
  },
}));

export const newCustomersChartHeadingText = {
  color: colors.white,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 2,
  marginLeft: 3,
  marginTop: 2,
};

export const newCustomersChartMargin = {
  top: 20,
  right: 40,
  left: -60,
  bottom: 0,
};
export { useStyles };
