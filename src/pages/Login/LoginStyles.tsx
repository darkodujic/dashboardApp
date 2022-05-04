import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import {
  loginAndRegisterContainerMargin,
  loginAndRegisterForm,
} from "../../utils/reusableStyles";
const useStyles = makeStyles(() => ({
  login: {
    background: colors.grey3,
    width: "100vw",
    height: 955,
    display: "flex",
    justifyContent: "center",
  },
  loginForm: loginAndRegisterForm,
  loginCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: -50,
  },
  loginDetails: {
    textAlign: "center",
  },
  loginHeadingSecondaryText: {
    color: colors.secondGrey,
  },
  label: {
    marginBottom: 10,
    color: colors.black,
    fontWeight: 600,
    position: "absolute",
    left: 0,
    top: -20,
  },
  formDetails: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
    position: "relative",
  },
  loginNotMember: {
    color: colors.lightBlue,
    fontSize: 10,
    position: "relative",
    top: 120,
    left: 0,
    cursor: "pointer",
    fontWeight: 400,
  },
  container: loginAndRegisterContainerMargin,
}));

export const loginFormContainer = {
  minHeight: 488,
  width: 418,
  marginTop: 2,
};

export const loginInput = {
  width: 300,
  marginTop: 2,
  backgroundColor: colors.white,
  borderRadius: "10px",
};

export const loginInputText = {
  marginTop: 0,
  marginLeft: 10,
  color: colors.darkGreyish,
  fontSize: 16,
  borderRadius: "15px",
};

export const loginForgotPassword = {
  color: colors.lightBlue,
  textDecoration: "none",
  position: "absolute",
  left: 55,
  bottom: -30,
  fontWeight: 500,
  cursor: "pointer",
};
export const loginRememberMeCheckbox = {
  position: "absolute",
  bottom: -80,
  left: 55,
};

export const loginSignInButton = {
  width: 300,
  position: "absolute",
  left: 55,
  top: 415,
  background: colors.darkBlue,
  fontWeight: 400,
};
export default useStyles;
