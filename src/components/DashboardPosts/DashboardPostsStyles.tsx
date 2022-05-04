import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import color from "../../colors";
import { ITEM_HEIGHT } from "../../utils/constants";
import { moreHorizIcon } from "../../utils/reusableStyles";
const useStyles = makeStyles(() => ({
  dashboardPost: {
    display: "flex",
    position: "relative",
    left: 115,
    alignItems: "center",
    top: 0,
    background: color.white,
    width: "60.2%",
    height: 83,
    overflow: "hidden",
    "@media (max-width: 1870px)": {
      width: 1030,
    },
    "@media (max-width: 1725px)": {
      width: 985,
    },

    "@media (max-width: 1670px)": {
      width: 958,
    },
    "@media (max-width: 1620px)": {
      top: 570,
      width: 1150,
      left: 100,
    },

    "@media (max-width: 1490px)": {
      width: 1100,
    },

    "@media (max-width: 1450px)": {
      width: 1070,
    },
    "@media (max-width: 1410px)": {
      width: 1000,
    },

    "@media (max-width: 1350px)": {
      width: 960,
    },
    "@media (max-width: 1300px)": {
      width: 870,
    },
    "@media (max-width: 1161px)": {
      top: 1110,
      left: 8,
      width: 1100,
      maxHeight: 75,
    },
    "@media (max-width: 1064px)": {
      width: 1150,
      maxHeight: 75,
    },

    "@media (max-width: 1018px)": {
      width: 1250,
      maxHeight: 75,
    },

    "@media (max-width: 930px)": {
      width: 1340,
      maxHeight: 75,
    },

    "@media (max-width: 845px)": {
      width: 1440,
    },

    "@media (max-width: 759px)": {
      left: -110,
      width: 1130,
    },
  },
  dashboardPostThumbnailImgCont: {
    width: "7%",
    maxHeight: 53,
    marginLeft: 20,
    marginTop: -10,

    "@media (max-width: 1725px)": {
      width: "9%",
    },
    "@media (max-width: 1620px)": {
      width: "7%",
    },
    "@media (max-width: 1410px)": {
      width: "8%",
    },

    "@media (max-width: 1300px)": {
      width: "9%",
    },
    "@media (max-width: 1020px)": {
      width: "6.5%",
    },
    "@media (max-width: 845px)": {
      width: "5.7%",
    },
    "@media (max-width: 769px)": {
      marginLeft: 130,
      width: "7.4%",
    },
  },
  divider: {
    height: 1,
    width: "100%",
    background: colors.someGrey,
    position: "absolute",
    left: 0,
    marginTop: 65,

    "@media (max-width: 1156px)": {
      width: 1100,
    },
    "@media (max-width: 760px)": {
      width: 1500,
    },
  },
  dashboardThumbnailPostImg: {
    height: "100%",
    width: "100%",
    borderRadius: "10%",
  },
  dashboardPostTitleCont: {
    marginLeft: 20,
    width: 310,
    marginTop: -10,
  },
  dashboardPostAuthorCont: {
    marginLeft: 224,
    marginTop: -10,
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    width: 160,
    "@media (max-width: 1870px)": {
      marginLeft: 140,
    },
    "@media (max-width: 1725px)": {
      marginLeft: 15,
    },
    "@media (max-width: 1620px)": {
      marginLeft: 240,
    },

    "@media (max-width: 1490px)": {
      marginLeft: 160,
    },

    "@media (max-width: 1410px)": {
      marginLeft: 50,
    },

    "@media (max-width: 1300px)": {
      marginLeft: -60,
    },

    "@media (max-width: 1160px)": {
      marginLeft: 60,
    },

    "@media (max-width: 760px)": {
      marginLeft: 130,
    },
  },
  dashboardPostAuthorImgCont: {
    height: 40,
    width: "25%",
  },
  dashboardPostContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    cursor: "pointer",
    width: "100%",
    transition: "all .1s ease-in-out",
  },

  dashboardPostContainerActive: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    background: color.lightViolet,
    width: "100%",
    cursor: "pointer",
    height: 83,
    marginTop: -18,

    "@media (max-width: 1460px)": {
      marginTop: 5,
      height: 64,
      background: colors.white,
      width: "auto",
    },
  },
  dashboardPostAuthorImg: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
  },
  dashboardPostDate: {
    marginLeft: 20,
    marginTop: -10,
  },
  dashboardPostDotIcon: {
    width: 12,
    height: 3,
  },
  dashboardPostAction: {
    marginLeft: 25,
    marginTop: -10,

    "@media (max-width: 1870px)": {
      marginLeft: 23,
    },
  },
  dashboardEditPostLinkButton: {
    textDecoration: "none",
    color: "inherit",
  },
}));
export const dashboardPostTitleText = {
  fontSize: 13,
  lineHeight: 17,
  fontWeight: 500,
};

export const dashboardPostAuthorNameText = {
  fontSize: 14,
  color: colors.lightGrey2,
  marginLeft: 2,
  fontWeight: 500,
};

export const dashboardPostStatusText = {
  marginTop: 0.5,
};
export const dashboardPostsMenu = {
  maxHeight: ITEM_HEIGHT * 4.5,
  width: "20ch",
};

export const dotsHorizontalIcon = moreHorizIcon;

export const dashboardPostDateText = {
  color: color.secondGrey,
  fontSize: 15,
};
export { useStyles };
