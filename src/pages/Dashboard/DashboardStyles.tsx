import { makeStyles } from "@mui/styles";
import colors from "../../colors";

const useStyles = makeStyles(() => ({
  dashboard: {
    position: "relative",
    background: colors.lightGrey,
    height: 1380,
    overflow: "hidden",

    "@media (max-width: 1620px)": {
      height: 2335,
    },
    "@media (max-width: 1161px)": {
      height: 3035,
    },
    "@media (max-width: 769px)": {
      height: 2805,
    },
  },
  infoCard: {
    position: "absolute",
    left: 200,
    top: 200,
    background: colors.black,
    height: "15%",
    width: "100%",
  },
  newCustomers: {
    maxWidth: 368,
    height: 400,
    position: "relative",
    top: -200,
    left: 1000,
    background: colors.red,
  },
  dashboardPosts: {
    position: "relative",
    gridColumn: "1 / 5",
    gridRow: "7 / 9",
    width: "95%",
    top: 15,

    "@media (max-width: 1620px)": {
      gridRow: "8 / 11",
      top: 30,
    },
    "@media (max-width: 1160px)": {
      gridRow: "10 / 15",
      top: 80,
    },

    "@media (max-width: 769px)": {
      gridRow: "8 / 15",
      top: 80,
      right: 150,
    },
    "@media (max-width: 500px)": {
      top: 80,
      right: 215,
    },
  },
  dashboardReact: {
    background: colors.black,
    height: 500,
    top: 280,
    maxWidth: "59.7%",
    position: "relative",
  },
  dashboardFooter: {
    position: "relative",
    width: "130vw",
    height: 61,
    right: 205,
    top: 1315,
    background: colors.lightGrey,
    display: "flex",
    alignItems: "center",
    zIndex: 2,
    "@media (max-width: 1620px)": {
      top: 2190,
    },
    "@media (max-width: 1160px)": {
      top: 2865,
      right: 0,
    },
    "@media (max-width: 769px)": {
      width: "140vw",
      top: 2670,
      right: 20,
    },
    "@media (max-width: 550px)": {
      width: "170vw",
      left: 20,
    },
  },
  dashboardInfoCards: {
    position: "relative",
    gridColumn: "1 / 4",
    gridRow: "1 / 4",
    top: -10,
  },
  dashboardReactChart: {
    position: "relative",
    gridColumn: "1 / 5",
    gridRow: "1 / 3",
    top: 80,
    width: "95%",
    "@media (max-width: 1620px)": {
      gridRow: "3 / 7",
      maxWidth: "80%",
      top: 0,
    },
    "@media (max-width: 1160px)": {
      gridRow: "5 / 8",
      gridColumn: "1 / 3",
      top: 100,
      width: "66%",
    },
    "@media (max-width:769px)": {
      gridRow: "5 / 8",
      gridColumn: "1 / 2",
      top: 70,
      left: -162,
      width: "60%",
    },

    "@media (max-width:500px)": {
      left: -225,
    },
  },
  dashboardTopCategories: {
    position: "relative",
    gridColumn: "1 / 5",
    gridRow: "6 / 7",
    width: "95%",
    bottom: 7,
    zIndex: 2,
    "@media (max-width: 1620px)": {
      gridRow: "8 / 15",
      gridColumn: "1 / 3",
      top: 100,
      left: 40,
    },
    "@media (max-width: 1160px)": {
      gridRow: "11 / 18",
    },

    "@media (max-width: 769px)": {
      gridRow: "10 / 17",
      gridColumn: "1 / 2",
      top: 60,
    },

    "@media (max-width: 500px)": {
      left: -6,
      zIndex: 4,
    },
  },
  dashboardAllSections: {
    height: "100%",
    width: "100%",
    position: "relative",
    left: 215,
    top: -70,
    display: "grid",
    gridTemplateColumns: "repeat(15, 500px)",
    gridTemplateRows: "repeat(15, 150px)",
  },
  dashboardNewCustomers: {
    position: "relative",
    gridColumn: "1 / 5",
    gridRow: "4 / 7",
    top: 128,
    width: "95%",
    "@media (max-width: 1620px)": {
      top: 460,
      gridRow: "7 / 10",
      gridColumn: "2 / 4",
      width: "90%",
    },
    "@media (max-width: 1160px)": {
      gridRow: "12 / 13",
      top: 100,
      gridColumn: "1 / 3",
      left: 120,
      width: "110%",
    },

    "@media (max-width: 769px)": {
      gridRow: "12 / 14",
      gridColumn: "1 / 2",
      top: 40,
    },
    "@media (max-width: 500px)": {
      left: 55,
      width: "87%",
    },
  },
}));

export { useStyles };
