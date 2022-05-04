import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import {
  elementLinkActive,
  menuItemContainer,
  menuStyle,
  moreHorizIcon,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  allUsersContainerElements: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    padding: "5.3px 0",
  },
  divider: {
    height: 1,
    width: "450%",
    background: colors.someGrey,
    position: "absolute",
    left: 0,
    marginTop: 78,

    "@media (max-width: 1460px)": {
      width: 1750,
    },

    "@media (max-width: 769px)": {
      width: 1700,
    },
  },

  allUsersThumbnailCont: {
    marginLeft: 30,
    width: 40,
    marginTop: -10,
    display: "flex",
    alignItems: "center",
  },
  allUsersNewLink: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    height: 64,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
  },

  allUsersNewLinkActive: elementLinkActive,
  allUsersThumbnailImg: {
    height: 50,
    borderRadius: "50%",
  },
  allUsersTitle: {
    marginLeft: 90,
    width: 280,
  },
  allUsersAuthorCont: {
    width: 140,
    marginTop: -10,
    position: "absolute",
    left: "27%",
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "60%",
      top: -2,
    },
  },
  allUsersCategories: {
    marginLeft: 40,
    marginTop: -4,
    width: 140,
  },

  allUsersEmail: {
    left: "45.5%",
    width: 200,
    position: "absolute",
    marginTop: -15,
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "250%",
      top: 30,
    },
  },

  allUsersDate: {
    left: "59%",
    marginTop: 81,
    position: "absolute",

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "440%",
      top: -15,
    },
  },
  allUsersAction: {
    position: "absolute",
    left: "94%",
    marginTop: -23,
    "@media (max-width: 1460px)": {
      position: "relative",
      left: 1300,
      top: -15,
    },
  },
  editAllUsersLinkButton: {
    textDecoration: "none",
    color: "inherit",
  },
  allUsersRole: {
    left: "71%",
    position: "absolute",
    marginTop: -15,

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "600%",
    },
  },
}));
export const allUsersEmailText = {
  fontSize: 13,
  color: colors.secondGrey,
  marginBottom: 3,
  marginLeft: -1,
  fontWeight: 500,
  width: "100%",
};

export const moreHorizontalIcon = moreHorizIcon;
export const AllPostsSubHeadingText = {
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 2,
  color: colors.secondGrey,
};

export const userRoleText = {
  fontWeight: 500,
  fontSize: 13,
  marginLeft: 1,
  color: colors.secondGrey,
};

export const allUsersName = {
  color: colors.secondGrey,
  fontWeight: 500,
  fontSize: 13,
  marginLeft: 2,
};

export const paginationSettings = {
  ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "transparent",
  },
  ".css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
    fontSize: 25,
  },
  "@media (max-width: 500px)": {
    ".MuiPagination-ul li": {
      margin: 0,
    },
    ".MuiPaginationItem-icon": {
      fontSize: 15,
    },
  },
};

export const menuUsersContainer = menuItemContainer;

export const usersMenu = menuStyle;

export const allPostsHeadingText = {
  color: colors.black,
  fontWeight: 700,
  fontSize: 28,
  lineHeight: 3,
};

export const allUsersUsername = {
  fontSize: 13,
  color: colors.secondGrey,
  marginLeft: 2,
  fontWeight: 500,
};

export const editBtn = {
  position: "relative",
  right: "-470%",
  padding: "12px 0",
  width: 200,
  top: -60,
};

export const usersDateText = {
  fontWeight: 400,
  color: colors.secondGrey,
  fontSize: 14,
  marginTop: -12,
};

export { useStyles };
