import React from "react";
import {
  dashboardHeading,
  dashboardTotalAuthorsText,
  dashboardTotalSubscriptionsText,
  dashboardTotalText,
  useStyles,
} from "./InfoCardStyles";
import InfoCards from "./InfoCards/InfoCards";
import InfoChartIcon from "../../img/InfoChartIcon.svg";
import IconTrendingUp from "../../img/icon-trending-up.svg";
import InfoDocumentIcon from "../../img/infoDocumentIcon.svg";
import InfoMailIcon from "../../img/infoMailIcon.svg";
import IconTrendingDown from "../../img/icon-trending-down.svg";
import InfoLeafIcon from "../../img/infoLeafIcon.svg";
import IconTrendingUpMiddle from "../../img/icon-trending-up-middle.svg";
import { useTranslation } from "react-i18next";
import GlobalTitleText from "../GlobalTitleText/GlobalTitleText";
const InfoCard: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <GlobalTitleText
        sxProps={dashboardHeading}
        text={t("dashboard.dashboardHeading")}
      />
      <div className={classes.details}>
        <InfoCards
          classNameInfo={classes.infoCard1}
          dashboardInfoCardsMainIcon={InfoChartIcon}
          dashboardInfoCardsTotalVisits="1478 286"
          dashboardInfoCardsTotalText={t("dashboard.totalVisits")}
          dashboardInfoCardsGrowthIcon={IconTrendingUp}
          dashboardInfoCardsGrowthPercentage="4.07%"
          dashboardInfoCardsProps={dashboardTotalText}
        />
        <InfoCards
          classNameInfo={classes.infoCard2}
          dashboardInfoCardsMainIcon={InfoDocumentIcon}
          dashboardInfoCardsTotalVisits="478 520"
          dashboardInfoCardsTotalText={t("dashboard.totalArticles")}
          dashboardInfoCardsGrowthIcon={IconTrendingUp}
          dashboardInfoCardsGrowthPercentage="0.24%"
          dashboardInfoCardsProps={dashboardTotalText}
        />
        <InfoCards
          classNameInfo={classes.infoCard3}
          dashboardInfoCardsMainIcon={InfoMailIcon}
          dashboardInfoCardsTotalVisits="154 872"
          dashboardInfoCardsTotalText={t("dashboard.totalSubscriptions")}
          dashboardInfoCardsGrowthIcon={IconTrendingDown}
          dashboardInfoCardsGrowthPercentage="1.64%"
          dashboardInfoCardsProps={dashboardTotalSubscriptionsText}
        />
        <InfoCards
          classNameInfo={classes.infoCard4}
          dashboardInfoCardsMainIcon={InfoLeafIcon}
          dashboardInfoCardsTotalVisits="167"
          dashboardInfoCardsTotalText={t("dashboard.totalAuthors")}
          dashboardInfoCardsGrowthIcon={IconTrendingUpMiddle}
          dashboardInfoCardsGrowthPercentage="0.00%"
          dashboardInfoCardsProps={dashboardTotalAuthorsText}
        />
      </div>
    </div>
  );
};

export default InfoCard;
