import React, { Dispatch, SetStateAction } from "react";
import useStyles, {
  registerFormContainer,
  registerInput,
  registerSignUpButton,
} from "./RegisterStyle";
import { Paper, Typography } from "@mui/material";
import InputField from "../../components/InputField/InputField";
import { useFormik } from "formik";
import * as yup from "yup";
import WelcomeHeaderText from "../../components/WelcomeText/WelcomeText";
import ButtonLoginText from "../../components/Login/ButtonLoginText/ButtonLoginText";
import { SelectChangeEvent } from "@mui/material/Select";
import RegisterSelectInputs from "../../components/Register/RegisterSelectInputs/RegisterSelectInputs";
import { registerErrorConfig } from "../../utils/yupConfig";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import faker from "@faker-js/faker";
import { useDispatch } from "react-redux";
import { userAddRequest } from "../../redux/actions/usersActions/usersActions";
import { IsLoggedProps } from "../../utils/interfaceTypes";
import { handleLogin } from "../../utils/constants";

const Register: React.FC<IsLoggedProps> = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const selectTranslatedOptions = {
    adminTranslated: t("register.admin"),
    moderatorTranslated: t("register.moderator"),
    guestTranslated: t("register.guest"),
    activeTranslated: t("register.active"),
    restrictedTranslated: t("register.restricted"),
    trashedTranslated: t("register.trashed"),
  };

  const valueRole = [
    selectTranslatedOptions.adminTranslated,
    selectTranslatedOptions.moderatorTranslated,
    selectTranslatedOptions.guestTranslated,
  ];
  const valueStatus = [
    selectTranslatedOptions.activeTranslated,
    selectTranslatedOptions.restrictedTranslated,
    selectTranslatedOptions.trashedTranslated,
  ];
  const validationSchema = yup.object(registerErrorConfig(t));
  const [status, setStatus]: [string, Dispatch<SetStateAction<string>>] =
    React.useState(selectTranslatedOptions.activeTranslated);
  const [role, setRole]: [string, Dispatch<SetStateAction<string>>] =
    React.useState(selectTranslatedOptions.guestTranslated);
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const roleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      password: "",
      team: "",
      username: "",
      registeredAt: "",
      status: "",
      role: "",
    },
    onSubmit: () => {
      handleLogin(formik.values.email, formik.values.password);
      addUser();
    },
    validationSchema: validationSchema,
  });

  const userInitialValues = {
    id: uuid(),
    registeredAt: new Date().getTime(),
    email: formik.values.email,
    password: formik.values.password,
    name: formik.values.name,
    username: formik.values.username,
    role: role,
    thumbnail: faker.image.avatar(),
    team: formik.values.team,
    status: status,
  };

  const addUser = () => {
    dispatch(userAddRequest(userInitialValues));
  };

  return (
    <div className={classes.register}>
      <div className={classes.registerCont}>
        <div className={classes.registerDetailsHeading}>
          <div className={classes.registerHeadingText}>
            <WelcomeHeaderText
              headerText={t("register.heading")}
              spanText={t("register.headingSpan")}
            />
          </div>
          <Paper sx={registerFormContainer}>
            <form
              className={classes.registerDetails}
              onSubmit={formik.handleSubmit}
            >
              <div className={classes.container}>
                <InputField
                  sxProps={registerInput}
                  labelName={t("register.inputRegisterLabelName")}
                  name="name"
                  labelInsideText={t("register.RegisterNameInsideInput")}
                  id="outlined-basic"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <InputField
                  sxProps={registerInput}
                  labelName={t("register.RegisterEmailLabelName")}
                  name="email"
                  labelInsideText={t("register.RegisterEmailInsideInput")}
                  id="outlined-basic"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <InputField
                  sxProps={registerInput}
                  labelName={t("register.RegisterinputPasswordLabelName")}
                  name="password"
                  labelInsideText={t("register.RegisterPasswordInsideInput")}
                  id="outlined-password-input"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <InputField
                  sxProps={registerInput}
                  labelName={t("register.RegisterTeamLabelName")}
                  name={t("register.RegisternameTeamValue")}
                  labelInsideText={t("register.RegisterTeamInsideInput")}
                  id="outlined-basic"
                  value={formik.values.team}
                  onChange={formik.handleChange}
                  error={formik.touched.team && Boolean(formik.errors.team)}
                  helperText={formik.touched.team && formik.errors.team}
                />
                <InputField
                  sxProps={registerInput}
                  labelName={t("register.RegisterUsernameLabelName")}
                  name={t("register.RegisternameUsernameValue")}
                  labelInsideText={t("register.RegisterUsernameInsideInput")}
                  id="outlined-basic"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
                <RegisterSelectInputs
                  role={t("register.chooseYourStatus")}
                  label={"status"}
                  onChange={handleChange}
                  value={status}
                  selectValue={valueStatus}
                />
                <RegisterSelectInputs
                  role={t("register.chooseYourRole")}
                  label={"role"}
                  onChange={roleChange}
                  value={role}
                  selectValue={valueRole}
                />

                <Typography
                  onClick={() => navigate("/login")}
                  className={classes.registerLoginText}
                >
                  {t("register.loginText")}
                </Typography>
                <div className={classes.button}>
                  <ButtonLoginText
                    sxProps={registerSignUpButton}
                    btnText={t("register.btnSignUp")}
                  />
                </div>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Register;
