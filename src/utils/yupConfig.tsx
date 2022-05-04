import { TFunction } from "i18next";
import * as yup from "yup";
const numericRegex: RegExp = /(?=.*[0-9])/;
export const registerErrorConfig = (t: TFunction) => {
  const yupErrorConfig = {
    name: yup.string().required(t("register.name")),
    email: yup
      .string()
      .email(t("register.email"))
      .required(t("register.emailRequired")),
    password: yup
      .string()
      .min(8, t("register.password"))
      .matches(numericRegex, t("register.passwordMatches"))
      .required(t("register.passwordRequired")),
    team: yup.string().required(t("register.team")),
    username: yup.string().required(t("register.username")),
  };

  return yupErrorConfig;
};

export const loginErrorConfig = (t: TFunction) => {
  const loginErrorConfig = {
    email: yup
      .string()
      .email(t("login.email"))
      .required(t("login.emailRequired")),
    password: yup
      .string()
      .min(8, t("login.password"))
      .matches(numericRegex, t("login.passwordMatches"))
      .required(t("login.passwordRequired")),
  };

  return loginErrorConfig;
};
