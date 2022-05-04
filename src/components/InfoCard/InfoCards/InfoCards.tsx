import { Icon, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { InfoCardsDashboardProps } from "../../../utils/interfaceTypes";
import {
  dashboardInfoCardText,
  dashboardInfoTotalNumber,
  useStyles,
} from "./InfoCardsStyles";
const InfoCards: React.FC<InfoCardsDashboardProps> = ({
  dashboardInfoCardsMainIcon,
  dashboardInfoCardsTotalVisits,
  dashboardInfoCardsTotalText,
  dashboardInfoCardsGrowthIcon,
  dashboardInfoCardsGrowthPercentage,
  dashboardInfoCardsProps,
  classNameInfo,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classNameInfo}>
      <div className={classes.infoCardsIconContainer}>
        <div className={classes.infoCardsDetailsInside}>
          <div className={classes.infoCardsFullIcon}>
            <img
              className={classes.infoCardsIconImg}
              src={dashboardInfoCardsMainIcon}
            ></img>
          </div>
          <div className={classes.infoCardsNumberDetails}>
            <Typography sx={dashboardInfoTotalNumber}>
              {dashboardInfoCardsTotalVisits}
            </Typography>
            <Typography sx={dashboardInfoCardText}>
              {dashboardInfoCardsTotalText}
            </Typography>
            <div className={classes.infoCardsBottomNumbers}>
              <Icon className={classes.infoCardsGrowthIconCont}>
                <img
                  className={classes.infoCardsIconImg}
                  src={dashboardInfoCardsGrowthIcon}
                ></img>
              </Icon>
              <Typography sx={dashboardInfoCardsProps}>
                {dashboardInfoCardsGrowthPercentage}
              </Typography>
              <Typography
                className={classes.dashboardInfoCardsLastMonth}
                sx={dashboardInfoCardText}
              >
                {t("dashboard.lastMonth")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
