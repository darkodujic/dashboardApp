import { makeStyles } from "@mui/styles";
import color from "../../../colors";

const useStyles = makeStyles(() => ({
  infoCardsIconContainer: {
    width: 368,
    height: "110%",
    borderRadius: 10,
    background: color.white,
    marginTop: 0,
    margin: 10,
    "@media (max-width: 1870px)": {
      width: 327,
    },
    "@media (max-width: 1725px)": {
      width: 315,
      height: 187,
    },
    "@media (max-width: 1670px)": {
      width: 303,
    },
    "@media (max-width: 769px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  dashboardInfoCardsLastMonth: {
    "@media (max-width: 1725px)": {
      fontSize: 14,
      marginTop: 0.3,
    },
    "@media (max-width: 1620px)": {
      fontSize: 14,
      marginTop: 0.3,
    },
  },
  infoCardsFullIcon: {
    height: 80,
    width: 80,
    marginRight: 13,
    marginLeft: 8,
    marginTop: 55,
    "@media (max-width: 1725px)": {
      height: 75,
      width: 75,
    },

    "@media (max-width: 769px)": {
      marginTop: 35,
    },

    "@media (max-width: 500px)": {
      marginLeft: -10,
    },
  },
  infoCardsIconImg: {
    height: "100%",
    width: "100%",
  },
  infoCardsDetailsInside: {
    margin: 15,
    display: "flex",
  },
  infoCardsNumberDetails: {
    display: "flex",
    flexDirection: "column",
    marginTop: 52,
    position: "relative",
    top: 10,
    "@media (max-width: 1725px)": {
      top: 13,
    },
    "@media (max-width: 769px)": {
      top: -5,
    },
    "@media (max-width: 500px)": {
      left: -6,
    },
  },
  infoCardsBottomNumbers: {
    display: "flex",

    "@media (max-width: 500px)": {
      marginLeft: -15,
    },
  },
  infoCardsGrowthIconCont: {
    marginRight: 10,
  },
}));

export const dashboardInfoTotalNumber = {
  fontSize: 21,
  lineHeight: 2,
  fontWeight: 600,

  "@media (max-width: 1725px)": {
    fontSize: 16,
  },
};

export const dashboardInfoCardText = {
  fontWeight: 500,
  fontSize: 16,
  lineHeight: 1.7,
  color: color.darkGrey,
};

export { useStyles };
