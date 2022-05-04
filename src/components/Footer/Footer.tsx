import { Icon, Typography } from "@mui/material";
import React from "react";
import { FooterCopyrightParagraph, useStyles } from "./FooterStyles";
import Divider from "../../img/Line.svg";
import { useTranslation } from "react-i18next";
const Footer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Icon>
        <img
          alt="dividerImg"
          className={classes.footerDividerImg}
          src={Divider}
        />
      </Icon>
      <div className={classes.footerTextCont}>
        <Typography
          sx={FooterCopyrightParagraph}
          className={classes.footerText}
        >
          {t("footer.copyright")}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
