import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import {
  categoriesEditAndAdd,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  addNewCategory: categoriesEditAndAdd,
  addNewCategoryCont: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: 50,
    left: "40%",
  },
  linkNavigation: {
    textDecoration: "none",
  },
  addNewCategoriesForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 45,
  },
}));

export const addNewFormProps = {
  width: 350,
  background: colors.lightestGreyish,
  marginTop: 5,
  borderRadius: "10px",
zIndex: 3,
  "@media (max-width:500px)": {
    width: "110%",
    marginLeft: -4,
  },
};

export const textFieldLabelText = {
  position: "relative",
  height: 0,
  left: 0,
  marginTop: 3,
  fontWeight: 600,
  color: colors.darkGrey,

  "@media (max-width:500px)": {
    left: -25,
  },
};

export const addNewCategoryContainer = {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: 7,
  "& > :not(style)": {
    m: 1,
    width: 428,
    height: 628,
    "@media (max-width:1024px)": {
      marginLeft: -6,
    },

    "@media (max-width:769px)": {
      marginLeft: -20,
    },

    "@media (max-width:500px)": {
      width: 235,
      marginLeft: -11.5,
 
    },
  },
};

export const addNewCategoryHeading = {
  color: colors.black,
  fontWeight: 600,
  fontSize: 35,
  position: "absolute",
  top: -25,
  left: 70,

  "@media (max-width:1024px)": {
    left: 10,
    fontSize: 32,
  },

  "@media (max-width:769px)": {
    left: 5,
    top: -50,
  },

  "@media (max-width:500px)": {
    width: 300,
    left: -10,
    fontSize: 25
  },
};

export const addNewCategoryBtn = {
  position: "relative",
  right: -30,
  top: 580,
  width: 250,
  height: 40,

  "@media (max-width:1024px)": {
    right: 0,
  },
  "@media (max-width:769px)": {
    right: 50,
  },

  "@media (max-width:500px)": {
    width: 200,
    right: 20,
  },
};

export const addNewCategoriesBtnClose = {
  position: "relative",
  top: -52,
  right: -256,
  background: colors.white,
  border: "none",
  color: colors.lightGrey,
  height: 35,

  "@media (max-width:1024px)": {
    right: -225,
  },

  "@media (max-width:769px)": {
    right: -10,
    top: -20,
  },


};

export { useStyles };
