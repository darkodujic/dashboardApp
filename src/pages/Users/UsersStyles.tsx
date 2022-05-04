import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import {
  avatarImg,
  newLink,
  newLinkActive,
  postsAndUsersItemCont,
  thumbnailImg,
  usersAndPostsContainerElements,
  usersAndPostsHeading,
  usersAndPostsThumbnail,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  usersItemContainer: postsAndUsersItemCont,
  usersHeading: usersAndPostsHeading,
  usersContainerElements: usersAndPostsContainerElements,
  usersThumbnailCont: usersAndPostsThumbnail,
  newLink: newLink,
  newLinkActive: newLinkActive,
  usersAvatarImg: avatarImg,
  usersThumbnailImg: thumbnailImg,
  usersTitle: {
    marginLeft: 60,
    width: 280,
  },
  usersAuthorCont: {
    display: "flex",
    alignItems: "center",
    marginLeft: 40,
    width: 140,
  },
  usersCategories: {
    marginLeft: 40,
    marginTop: -4,
    width: 140,
  },

  categoriesLink: {
    textDecoration: "none",
    color: colors.blue,
    marginLeft: -20,
  },
  usersComments: {
    marginLeft: 60,
  },
  usersStatus: {
    marginLeft: 90,
    background: colors.lightestOrange,
    color: colors.orange,
    width: 79,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  usersDate: {
    marginLeft: 60,
  },
  usersAction: {
    marginLeft: 30,
  },
  usersDetails: {
    display: "flex",
    marginTop: -50,
    background: colors.lightestGreyish,
    alignItems: "center",
    width: "100%",
  },
  users: {
    background: colors.lightGrey,
    height: 1500,
  },
  usersMainHeading: {
    position: "absolute",
    top: 74,
    left: 505,
  },
  usersHeadingThumbnail: {
    marginLeft: 10,
  },
  filterElements: {
    "@media (max-width: 900px)": {
      marginLeft: 0,
    },
    "@media (max-width: 769px)": {
      marginLeft: 0,
    },
  },
  filterUsersContainer: {
    background: colors.white,
    position: "absolute",
    top: 165.5,
    left: 330,
    height: 90,
    width: "81%",
    display: "flex",
    alignItems: "center",
    borderTopRightRadius: "7px 7px",
    borderTopLeftRadius: "7px 7px",

    "@media (max-width: 1825px)": {
      width: "79.5%",
    },

    "@media (max-width: 1770px)": {
      width: "79.5%",
    },
    "@media (max-width: 1676px)": {
      width: "78%",
    },
    "@media (max-width: 1585px)": {
      width: "76.5%",
    },
    "@media (max-width: 1460px)": {
      display: "flex",
      flexDirection: "column",
      height: 214,
      top: 163,
      width: "74.5%",
    },

    "@media (max-width: 1336px)": {
      width: "72.5%",
    },

    "@media (max-width: 1250px)": {
      width: "71%",
    },

    "@media (max-width: 1170px)": {
      width: "69%",
    },

    "@media (max-width: 1100px)": {
      width: "67%",
    },

    "@media (max-width: 1040px)": {
      width: "65%",
    },

    "@media (max-width: 970px)": {
      width: "62.5%",
    },

    "@media (max-width: 915px)": {
      width: "60.5%",
    },

    "@media (max-width: 866px)": {
      width: "58.5%",
    },

    "@media (max-width: 830px)": {
      width: "56.5%",
    },

    "@media (max-width: 769px)": {
      left: 110,
      top: 264,
      width: "81%",
    },
  },
  usersHeadingTitle: {
    left: "26.5%",
    position: "absolute",
  },
  usersHeadingEmail: {
    position: "absolute",
    left: "43.3%",
  },
  usersHeadingStatus: {
    position: "absolute",
    left: "79.5%",
  },
  usersHeadingDate: {
    position: "absolute",
    left: "57.3%",
  },
  usersHeadingAction: {
    position: "absolute",
    left: "92.3%",
  },
  userHeadingCategories: {
    marginLeft: 110,
  },
  userHeadingComments: {
    left: "69.7%",
    position: "absolute",
  },
  dashboardUserStatusCont: {
    color: colors.orange,
    width: 95,
    height: 32,
    background: colors.lightestOrange,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "81%",
    marginTop: -23,
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "750%",
    },
  },
  dashboardUserStatusContActive: {
    width: 95,
    height: 32,
    background: colors.lightestBlue,
    color: colors.blue,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "81%",
    marginTop: -23,
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "750%",
    },
  },
  usersClearFilters: {
    position: "relative",
    top: 160,
    left: "89.8%",
    "@media (max-width:1825px)": {
      left: "88.7%",
      padding: 2,
    },

    "@media (max-width:1770px)": {
      left: "89%",
    },

    "@media (max-width:1676px)": {
      left: "88%",
    },

    "@media (max-width:1600px)": {
      left: "88.5%",
    },

    "@media (max-width:1585px)": {
      left: "87%",
    },

    "@media (max-width:1546px)": {
      left: "87.5%",
    },

    "@media (max-width:1500px)": {
      left: "87.7%",
    },

    "@media (max-width:1460px)": {
      left: "86%",
    },

    "@media (max-width:1420px)": {
      left: "86%",
    },

    "@media (max-width:1405px)": {
      left: "86.5%",
    },

    "@media (max-width:1380px)": {
      left: "86.5%",
    },

    "@media (max-width:1350px)": {
      left: "87%",
    },

    "@media (max-width:1336px)": {
      left: "85%",
    },

    "@media (max-width:1290px)": {
      left: "85.7%",
    },

    "@media (max-width:1250px)": {
      left: "84.5%",
    },
    "@media (max-width:1205px)": {
      left: "85%",
    },

    "@media (max-width:1170px)": {
      left: "83.5%",
    },
    "@media (max-width:1115px)": {
      left: "84.5%",
    },
    "@media (max-width:1100px)": {
      left: "82.5%",
    },

    "@media (max-width:1060px)": {
      left: "83%",
    },

    "@media (max-width:1040px)": {
      left: "81%",
    },

    "@media (max-width:1000px)": {
      left: "81.7%",
    },

    "@media (max-width:970px)": {
      left: "80%",
    },

    "@media (max-width:912px)": {
      left: "79%",
    },

    "@media (max-width:885px)": {
      left: "79.5%",
    },

    "@media (max-width: 866px)": {
      left: "78%",
    },

    "@media (max-width: 830px)": {
      left: "77%",
    },

    "@media (max-width: 790px)": {
      left: "78%",
    },

    "@media (max-width:769px)": {
      top: 230,
      left: "47%",
    },
  },
  editPostLinkButton: {
    textDecoration: "none",
    color: "inherit",
  },
  postsIconChevronDown: {
    marginLeft: -20,
    position: "relative",
    left: -20,
    cursor: "pointer",
  },
  dashboardUserStatusTrashed: {
    background: colors.lightestRed,
    color: colors.red,
    width: 95,
    height: 32,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "81%",
    marginTop: -20,

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "750%",
    },
  },
  hello: {
    fontSize: 25,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.black,
  },
  pagination: {
    position: "relative",
    right: "-79%",
    top: 1000,

    "@media (max-width: 1720px)": {
      top: 1050,
      right: "-73%",
    },

    "@media (max-width: 1600px)": {
      right: "-70%",
    },

    "@media (max-width: 1460px)": {
      right: "-70%",
      top: 1080,
    },

    "@media (max-width: 1330px)": {
      right: "-66%",
    },

    "@media (max-width: 1156px)": {
      right: "-61%",
    },

    "@media (max-width: 980px)": {
      right: "-52%",
    },
    "@media (max-width: 769px)": {
      right: "-30%",
      top: 1200,
    },

    "@media (max-width: 426px)": {
      right: "-30%",
    },
  },
}));

export const usersCommentsText = {
  fontSize: 14,
  color: colors.secondGrey,
  marginLeft: -8,
};

export const usersRolesLabel = {
  color: colors.darkGrey,
  fontWeight: 400,
  marginTop: -1,
};
export const filterUsersControl = {
  marginLeft: 5,
  border: colors.someGrey,
};
export const filterUsersContainer = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 266,
  marginLeft: 3.5,
  borderRadius: 3,
  height: 44,
  background: colors.lightestGreyish,
  boxShadow: "none",

  "@media (max-width: 1460px)": {
    marginTop: 2,
  },

  "@media (max-width: 769px)": {
    width: 203,
  },

  "@media (max-width: 500px)": {
    marginLeft: -4.5,
  },
};

export const filterUsersSelectStatus = {
  height: 52,
  width: 195,
};

export const searchButtonIcon = {
  p: "10px",
};
export const filterUsersSelectCategory = {
  height: 52,
  width: 195,
};

export const filterPostsStatusLabel = {
  color: colors.darkGrey,
  fontWeight: 400,
  marginTop: -1,
};

export const filterUsersForm = {
  width: 185,
  minHeight: 34,
  borderRadius: 4,
  position: "absolute",
  left: "66.8%",
  top: 20,
  "@media (max-width: 1850px)": {
    left: "66%",
  },

  "@media (max-width: 1825px)": {
    left: "64.5%",
  },

  "@media (max-width: 1763px)": {
    left: "64%",
  },

  "@media (max-width: 1715px)": {
    left: "62.5%",
  },

  "@media (max-width: 1675px)": {
    left: "61.5%",
  },

  "@media (max-width: 1645px)": {
    left: "61%",
  },
  "@media (max-width: 1585px)": {
    left: "58.5%",
  },

  "@media (max-width: 1495px)": {
    left: "57.5%",
  },

  "@media (max-width: 1460px)": {
    position: "relative",
    top: 15,
    left: "10%",
  },
  "@media (max-width: 769px)": {
    minHeight: 30,
    left: "-2%",
  },

  "@media (max-width: 500px)": {
    left: "-38%",
  },
};

export const filterUsersStatusForm = {
  width: 185,
  minHeight: 34,
  borderRadius: 4,
  position: "absolute",
  left: "83.8%",
  top: 20,

  "@media (max-width: 1825px)": {
    left: "83%",
  },

  "@media (max-width: 1763px)": {
    left: "83%",
  },

  "@media (max-width: 1715px)": {
    left: "82.5%",
  },

  "@media (max-width: 1675px)": {
    left: "82%",
  },

  "@media (max-width: 1645px)": {
    left: "82%",
  },
  "@media (max-width: 1585px)": {
    left: "81.5%",
  },
  "@media (max-width: 1530px)": {
    left: "81%",
  },

  "@media (max-width: 1485px)": {
    left: "80.5%",
  },
  "@media (max-width: 1460px)": {
    position: "relative",
    top: 30,
    left: "23.5%",
  },
  "@media (max-width: 769px)": {
    minHeight: 30,
    left: "15%",
  },
  "@media (max-width: 500px)": {
    left: "-16%",
  },
};
export const filterUsersInput = {
  ml: 1,
  flex: 1,
  fontSize: 15,
  color: colors.secondaryLightBlack,
};
export const AllUsersSubHeadingText = {
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 2,
  color: colors.secondGrey,
  marginLeft: 3,
};
export const usersAuthor = {
  color: colors.secondGrey,
  fontWeight: 700,
  fontSize: 12,
  marginLeft: 1,
};

export const emptyStatusMenuItem = {
  height: 30,
};
export const allUsersHeadingText = {
  color: colors.black,
  fontWeight: 700,
  fontSize: 29,
  lineHeight: 3,
  marginTop: 0.5,
  marginLeft: -22,

  "@media (max-width: 769px)": {
    marginLeft: -49,
  },

  "@media (max-width: 450px)": {
    marginLeft: -43,
  },
};
export const usersTitle = {
  fontSize: 13,
  color: colors.black,
};
export const searchButtonIconProps = {
  p: "10px",
};
export const edit1 = {
  position: "relative",
  right: "-470%",
  height: 50,
  width: 200,
  top: 15,
};
export const usersClearFilter = {
  position: "relative",
  width: 160,
  top: -140,
  zIndex: 2,
  background: colors.darkBlue,
  color: colors.white,
  textTransform: "none",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 2.4,
  transition: "all .4s",
  "@media (max-width: 769px)": {
    width: 130,
    fontSize: 14,
    height: 40,
  },
  "&:hover": {
    background: colors.lightestBlack,
    opacity: 1,
  },
};

export { useStyles };
