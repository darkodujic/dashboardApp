import React from "react";
import useStyles, {
  loginForgotPassword,
  loginFormContainer,
  loginInput,
  loginRememberMeCheckbox,
  loginSignInButton,
} from "../Login/LoginStyles";
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import WelcomeHeadingText from "../../components/WelcomeText/WelcomeText";
import ButtonLoginText from "../../components/Login/ButtonLoginText/ButtonLoginText";
import InputField from "../../components/InputField/InputField";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavigateFunction, useNavigate } from "react-router";
import { loginErrorConfig } from "../../utils/yupConfig";
import { useTranslation } from "react-i18next";
import { IsLoggedProps } from "../../utils/interfaceTypes";
import { handleLogin } from "../../utils/constants";
const Login: React.FC<IsLoggedProps> = () => {
  const classes = useStyles();
  const navigate: NavigateFunction = useNavigate();
  const { t } = useTranslation();
  const validationSchema = yup.object(loginErrorConfig(t));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      counter: 1,
    },
    onSubmit: () => {
      handleLogin(formik.values.email, formik.values.password);
    },
    validationSchema: validationSchema,
  });
  return (
    <div className={classes.login}>
      <div className={classes.loginCont}>
        <div className={classes.loginDetails}>
          <WelcomeHeadingText
            headerText={t("login.heading")}
            spanText={t("login.headingSpan")}
          />
          <Paper sx={loginFormContainer}>
            <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
              <div className={classes.container}>
                <InputField
                  sxProps={loginInput}
                  labelName={t("login.inputEmailLabelName")}
                  name={t("login.nameEmailValue")}
                  labelInsideText={t("login.EmailInsideInput")}
                  id="outlined-basic"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <InputField
                  sxProps={loginInput}
                  labelName={t("login.inputPasswordLabelName")}
                  name={t("login.namePasswordValue")}
                  labelInsideText={t("login.PasswordInsideInput")}
                  id="outlined-password-input"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Link sx={loginForgotPassword}>
                  {t("login.forgotPassword")}
                </Link>

                <FormControlLabel
                  sx={loginRememberMeCheckbox}
                  value="end"
                  control={<Checkbox />}
                  label={"Remember me"}
                  labelPlacement="end"
                />
                <Typography
                  onClick={() => navigate("/register")}
                  className={classes.loginNotMember}
                >
                  {t("login.notMember")}
                </Typography>

                <ButtonLoginText
                  sxProps={loginSignInButton}
                  btnText={t("login.btnSignIn")}
                />
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};
export default Login;
