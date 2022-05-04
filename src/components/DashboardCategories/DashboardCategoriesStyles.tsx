import { makeStyles } from "@mui/styles";
import color from "../../colors";
import {
  dashboardCategoriesSecondNumberBlue,
  dashboardCategoriesSecondNumberGreen,
  dashboardCategoriesSecondNumberOrange,
  dashboardCategoriesSecondNumberPurple,
  dashboardCategoriesSecondNumberRed,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  dashboardCategory: {
    position: "relative",
    left: "67.1%",

    "@media (max-width: 1870px)": {
      left: 1160,
    },
    "@media (max-width: 1725px)": {
      left: 1120,
    },
    "@media (max-width: 1620px)": {
      left: "11%",
    },
    "@media (max-width: 769px)": {
      left: "-23%",
      overflowY: "auto",
    },
    "@media (max-width: 500px)": {
      left: -130,
    },
  },
  dashboardCategoryContainer: {
    height: 625,
    width: 372,
    background: color.white,
    borderRadius: 10,
    zIndeX: 500,
    marginLeft: 12,
    "@media (max-width: 1870px)": {
      width: 330,
      marginLeft: 5,
    },
    "@media (max-width: 1725px)": {
      width: 320,
      marginLeft: 8,
    },
    "@media (max-width: 1620px)": {
      overflow: "auto",
      height: 440,
    },

    "@media (max-width: 1670px)": {
      marginLeft: -24,
      width: 302,
    },

    "@media (max-width: 1160px)": {
      marginLeft: 150,
      height: 515,
      marginTop: 400,
    },
    "@media (max-width: 769px)": {
      marginLeft: 30,
      height: 405,
      overflow: "scroll",
      width: 305,
    },
  },
  dashboardCategoryHeading: {
    position: "relative",
    top: 15,
    left: 20,
  },
  dashboardCategories: {
    marginTop: -18,

    "@media (max-width: 1620px)": {
      width: 150,
    },

    "@media (max-width: 1161px)": {
      width: 100,
    },
  },
  dashboardCategoriesContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    top: 53,
    left: 20,
  },
  dashboardCategoriesDivider: {
    position: "relative",
    width: "88%",
    height: 1,
    background: color.lightGrey,
    top: 25,
    left: 20,

    "@media (max-width: 1620px)": {
      width: 380,
    },

    "@media (max-width: 1161px)": {
      width: 360,
    },
  },
  dashboardCategoriesNumbers: {
    position: "relative",
    right: -320,
    top: 20,

    "@media (max-width: 1870px)": {
      right: -270,
    },

    "@media (max-width: 1725px)": {
      right: -250,
    },

    "@media (max-width: 1620px)": {
      right: -340,
    },

    "@media (max-width: 1161px)": {
      right: -350,
    },
  },
  dashboardCategoriesSecondNumberBlue: dashboardCategoriesSecondNumberBlue,
  dashboardCategoriesSecondNumberPurple: dashboardCategoriesSecondNumberPurple,
  dashboardCategoriesSecondNumberRed: dashboardCategoriesSecondNumberRed,
  dashboardCategoriesSecondNumberGreen: dashboardCategoriesSecondNumberGreen,
  dashboardCategoriesSecondNumberOrange: dashboardCategoriesSecondNumberOrange,
}));
export const dashboardCategoriesElementHeadingText = {
  fontSize: 13,
  lineHeight: 1.4,
  fontWeight: 600,
  color: color.black,
  width: "200%",
  "@media (max-width: 1161px)": {
    width: "200%",
  },
};
export const dashboardCategoryMainHeadingText = {
  fontSize: 17,
  lineHeight: 1.9,
  fontWeight: 600,
  color: color.black,
};
export const dashboardCategorySubHeadingText = {
  fontWeight: 400,
  fontSize: 13,
  lineHeight: 1.4,
  color: color.darkGrey,

  "@media (max-width: 1161px)": {
    width: "120%",
  },
};
export const dashboardCategoriesSecondNumberText = {
  fontSize: 11,
  fontWeight: 500,
  lineHeight: 12,
  position: "absolute",
  top: -35,
};
export const dashboardCategoriesFirstNumberText = {
  color: color.black,
  fontSize: 13,
  marginBottom: 0.5,
  lineHeight: 1.4,
  fontWeight: 600,
};
export { useStyles };
