import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import {
  elementLinkActive,
  menuItemContainer,
  menuStyle,
  moreHorizIcon,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  postsContainerElements: {
    display: "flex",
    alignItems: "center",
    padding: "4px 0",
    marginTop: -4,
  },
  divider: {
    height: 1,
    width: "450%",
    background: colors.someGrey,
    position: "absolute",
    left: 0,
    marginTop: 78,

    "@media (max-width:1460px)": {
      width: 2100,
    },

    "@media (max-width:1100px)": {
      width: 2100,
    },

    "@media (max-width:769px)": {
      width: 2150,
    },
  },

  postsThumbnailCont: {
    marginLeft: 20,
    width: 40,
  },

  postsNewLink: {
    display: "flex",
    alignItems: "center",
    minHeight: 85,
    textDecoration: "none",
    cursor: "pointer",
    marginTop: -2,
    transition: "all .1s ease-in-out",
  },
  postsNewLinkActive: elementLinkActive,
  postsAvatarImg: {
    height: 40,
    width: "30%",
    borderRadius: "50%",
  },
  postsThumbnailImg: {
    height: 55,
    borderRadius: 5,
    marginTop: -2,
  },
  postsTitle: {
    marginLeft: 60,
    width: 280,
    marginTop: -2,
  },
  postsAuthorCont: {
    display: "flex",
    alignItems: "center",
    width: 140,
    marginTop: -2,
    position: "absolute",
    left: "44%",

    "@media (max-width: 1715px)": {
      left: "34%",
    },

    "@media (max-width: 1585px)": {
      left: "31%",
    },

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "30%",
    },
  },
  postsCategories: {
    marginTop: -6,
    width: 140,
    position: "absolute",
    left: "59%",

    "@media (max-width: 1715px)": {
      left: "49%",
    },

    "@media (max-width: 1585px)": {
      left: "47%",
    },

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "60%",
    },
  },

  postsCategoriesLink: {
    textDecoration: "none",
    marginLeft: -20,
    color: colors.darkBlue,
    fontWeight: 600,
  },
  postsComments: {
    marginTop: -2,
    position: "absolute",
    left: "72.2%",

    "@media (max-width: 1820px)": {
      left: "72.7%",
    },

    "@media (max-width: 1730px)": {
      left: "73%",
    },

    "@media (max-width: 1715px)": {
      left: "63.5%",
    },

    "@media (max-width: 1660px)": {
      left: "64.3%",
    },

    "@media (max-width: 1585px)": {
      left: "64.7%",
    },

    "@media (max-width: 1485px)": {
      left: "65%",
    },

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "80%",
    },
  },

  postsDate: {
    marginTop: -2,
    position: "absolute",
    left: "85%",

    "@media (max-width: 1715px)": {
      left: "82.5%",
    },
    "@media (max-width: 1585px)": {
      left: "80.5%",
    },
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "115%",
    },
  },

  postsAction: {
    marginTop: -2,
    left: "94.5%",
    position: "absolute",

    "@media (max-width: 1715px)": {
      left: "92.5%",
    },

    "@media (max-width: 1585px)": {
      left: "91.5%",
    },

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "130%",
    },
  },

  editPostLinkButton: {
    textDecoration: "none",
    color: "inherit",
    zIndex: 1,
  },
}));

export const postsCommentsText = {
  fontSize: 14,
  color: colors.secondGrey,
  marginLeft: -9,
};

export const postsMenu = menuStyle;
export const moreHorizontalIcon = moreHorizIcon;
export const allPostsDateText = {
  color: colors.secondGrey,
};

export const postsAuthor = {
  color: colors.secondGrey,
  fontWeight: 500,
  fontSize: 14,
  marginLeft: 1,
};

export const postsTitle = {
  fontSize: 13,
  color: colors.black,
  fontWeight: 500,
};
export const menuItemPostContainer = menuItemContainer;
export { useStyles };
