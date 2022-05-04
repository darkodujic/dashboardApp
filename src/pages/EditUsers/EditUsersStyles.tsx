import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import { categoriesEditAndAdd } from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  editUsers: categoriesEditAndAdd,
  editUsersCont: {
    position: "absolute",
    left: "40%",
    top: -120,
   display: 'flex',
   alignItems: "center",
   justifyContent: "center",

    
    "@media (max-width: 1000px)": {
      left: "34%",
    },

    "@media (max-width: 860px)": {
  left: '29%'
     },


    "@media (max-width: 769px)": {
      left: "21%",
    },

    "@media (max-width: 590px)": {
      width: "160%",
      left: "8%",
    },
  },
  usersEditHeading: {
    position: "relative",
    top: 230,
    left: 188,


    "@media (max-width: 1000px)": {
     top: 240,
     left: 180
    },

    "@media (max-width: 769px)": {
    left: 140,
    top: 300
    },

    "@media (max-width: 590px)": {
      left: -140,
      top: 300
      },

      "@media (max-width: 500px)": {
    left: -110
        },

      "@media (max-width: 420px)": {
        left: -85,

        },
  },
  editPost: {
    width: "100%",
  },
  editForm: {
    marginTop: 60,
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

export const editUsersHeadingTitle = {
  fontSize: 40,

  fontWeight: 500,
  width: "150%",

  "@media (max-width: 590px)": {
 fontSize: 28,
    },
    "@media (max-width: 420px)": {
    fontSize: 25

      },
};

export const editPostInput = {
  width: "80%!",
  margin: 1,
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

export const usersNameText = {
  width: "80%",
  marginBottom: 2,
  background: colors.lightestGreyish,
  borderRadius: "10px",
  zIndex: 3
};

export const categoriesNameDescription = {
  width: "80%",
};

export const usersEditBtn = {
  width: 300,
  position: "absolute",
  left: 50,
  top: 400,
  background: colors.darkBlue,
  fontWeight: 400,

  "@media (max-width: 590px)": {
    width: 150,
    position: "relative",
    left: "0%",
    top: 50,
  },
};

export const editUserFormContainer = {
  minWidth: "80%",
};

export const editUserRoleForm = {
  minWidth: "80%",
  marginTop: 2,
};

export const editUserInputContainer = {
  background: colors.white,
  height: 480,
  width: 400,
  position: "absolute",
  top: 350,
  left: "45%",

  "@media (max-width: 769px)": {
    top: 400,
    left: "20%",
  },

  "@media (max-width: 590px)": {
    left: "16%",
    width: "38%",
  },
};
export { useStyles };
