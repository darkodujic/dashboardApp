import { useStyles } from "./Error404Styles";
import React from "react";
import pageNotFound from "../../img/notFound.svg";
import "./Error404.css";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../components/Button/Button";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Error: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const changeLocation = () => {
    navigate("/");
  };
  const { t } = useTranslation();
  return (
    <div className={classes.error}>
      <div className={classes.errorCont}>
        <div className={classes.errorImg}>
          <img src={pageNotFound} id="imgError" />
        </div>

        <Typography variant="h4" component="h4">
          {t("error404.heading")}
        </Typography>
        <span className={classes.errorHeadingText}>{t("error404.headingSpan")}</span>
        <ButtonText
          locationFunc={changeLocation}
          buttonText={t("error404.buttonText")}
        />
      </div>
    </div>
  );
};

export default Error;
