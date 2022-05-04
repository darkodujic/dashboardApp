import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import { categoriesEditAndAdd } from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  categoryEdit: categoriesEditAndAdd,
  categoryEditHeading: {
    marginTop: 200,
  },

  categoryEditCont: {
    position: "absolute",
    left: "40%",
    top: '-10%',

    "@media (max-width: 900px)": {
    left: '30%'
    },

    "@media (max-width: 450px)": {
      left: "34%",

    },
  },

  editPost: {
    width: "100%",
  },
  editForm: {
    marginTop: 35,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const editPosts = {
  "& > :not(style)": { m: 1, width: "25ch" },
  position: "relative",
  display: "flex",
  flexDirection: "column",
  top: 0,
  alignItems: "center",
  justify: "center",
  marginTop: 5,
};

export const editCategoryHeadingTitle = {
  fontSize: 40,
  position: "relative",
  left: 190,
  top: "5%",
  fontWeight: 500,
  "@media (max-width: 1260px)": {
    left: 180,
  },

  "@media (max-width: 769px)": {
    fontSize: 34,
    left: 0,
    top: 40
  },
  "@media (max-width: 520px)": {
    left: 40,
    width: "80%",
    fontSize: 28,
  },
};

export const editPostInput = {
  width: "80%!",
  margin: 1,
};

export const editPostInputContainer = {
  background: colors.white,
  height: 400,
  width: 400,
  position: "absolute",
  top: 350,
  left: "45%",
zIndex: 3,
  "@media (max-width: 769px)": {
    marginLeft: -3,
    left: 20,
    width: 300,
    height: 400,
  },

  "@media (max-width: 500px)": {
width: 250,
left: 10
  },

};

export const editPostUpdateButton = {
  width: 300,
  position: "absolute",
  left: 55,
  top: 275,
  background: colors.darkBlue,
  fontWeight: 400,
};

export const editPostInputForm = {
  width: "0",
};

export const categoriesNameText = {
  width: "80%",
  marginBottom: 2,
  background: colors.lightestGreyish,
  borderRadius: "10px",

  "@media (max-width: 769px)": {
    width: "95%",
  },
};

export const categoriesNameDescription = {
  width: "80%",
  background: colors.lightestGreyish,
  marginTop: 1,
  borderRadius: "10px",

  "@media (max-width: 769px)": {
    width: "95%",
  },
};

export const categoriesEditBtn = {
  width: 220,
  position: "absolute",
  left: 90,
  top: 295,
  background: colors.darkBlue,
  fontWeight: 400,

  "@media (max-width: 769px)": {
    left: "18%",
  },

  "@media (max-width: 500px)": {
    left: "13%",
    width: 190,
  },
};

export { useStyles };
