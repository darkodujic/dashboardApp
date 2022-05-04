import { makeStyles } from "@mui/styles";
import color from "../../colors";

const useStyles = makeStyles(() => ({
  visitorsChart: {
    maxWidth: "60.3%",
    height: 500,
    background: color.white,
    position: "relative",
    top: 290,
    left: 120,
    borderRadius: 10,
    overflow: "hidden",
    zIndex: 3,

    "@media (max-width: 1870px)": {
      maxWidth: 1020,
      overflowX: "scroll",
    },

    "@media (max-width: 1725px)": {
      maxWidth: 985,
    },

    "@media (max-width: 1670px)": {
      maxWidth: 955,
    },

    "@media (max-width: 1620px)": {
      maxWidth: 1225,
    },

    "@media (max-width: 1570px)": {
      maxWidth: 1175,
    },

    "@media (max-width: 1520px)": {
      maxWidth: 1135,
    },

    "@media (max-width: 1480px)": {
      maxWidth: 1085,
    },

    "@media (max-width: 1430px)": {
      maxWidth: 1040,
    },

    "@media (max-width: 1385px)": {
      maxWidth: 1000,
    },

    "@media (max-width: 1350px)": {
      maxWidth: 960,
    },
  },
  loader: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "-20%",
    right: 0,
    top: "45%",
    textAlign: "center",
    zIndex: 1,
  },
}));
export const visitorsChartXAndYaxis = {
  fill: color.darkGrey,
  fontSize: 12,
};
export const visitorsChartDot = {
  r: 8,
};
export const visitorsChartLine = {
  top: 15,
  right: -780,
  left: 20,
  bottom: 5,
};
export { useStyles };
