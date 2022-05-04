import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import {
  loginAndRegisterCont,
  loginAndRegisterContainerMargin,
  loginAndRegisterForm,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  register: {
    background: colors.grey3,
    width: "100vw",
    height: 1250,
    display: "flex",
    justifyContent: "center",
  },
  registerLoginText: {
    color: colors.lightBlue,
    position: "relative",
    top: 25,
    left: 0,
    cursor: "pointer",
  },
  registerDetails: loginAndRegisterForm,
  registerCont: loginAndRegisterCont,
  registerDetailsHeading: {
    textAlign: "center",
    marginLeft: 20,
  },

  registerHeadingText: {
    marginLeft: -30,
    "@media (max-width:420px)": {
      marginLeft: -5,
    },
  },
  container: loginAndRegisterContainerMargin,
  button: {
    position: "relative",
    bottom: 310,
    left: -64,
  },
}));
export const registerInput = {
  width: 438,
  marginTop: 2,
  backgroundColor: colors.white,
  "@media (max-width:768px)": {
    width: 238,
  },
};
export const registerFormContainer = {
  height: 940,
  width: 628,
  marginTop: 2,
  marginLeft: 2,
  "@media (max-width:768px)": {
    marginLeft: -3,
    width: 428,
  },
};
export const registerSignUpButton = {
  width: 450,
  height: 50,
  position: "relative",
  left: 65,
  top: 365,
  background: colors.darkBlue,
  fontWeight: 400,
  "@media (max-width:768px)": {
    width: 238,
    left: 60,
  },
};

export default useStyles;
