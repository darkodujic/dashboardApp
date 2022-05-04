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
  postsItemContainer: postsAndUsersItemCont,
  postsHeading: usersAndPostsHeading,
  divider: {
    height: 1,
    width: "100%",
    background: colors.someGrey,
    position: "absolute",
    left: 0,
    marginTop: 78,
    "@media (max-width:1460px)": {
      width: 1300,
    },
  },
  postsContainerElements: usersAndPostsContainerElements,
  postsThumbnailCont: usersAndPostsThumbnail,
  newLink: newLink,
  newLinkActive: newLinkActive,
  postsAvatarImg: avatarImg,
  postsThumbnailImg: thumbnailImg,
  postsTitle: {
    marginLeft: 60,
    width: 280,
  },
  postsAuthorCont: {
    display: "flex",
    alignItems: "center",
    marginLeft: 200,
    width: 140,
  },
  postsCategories: {
    marginLeft: 40,
    marginTop: -4,
    width: 140,
  },
  categoriesLink: {
    textDecoration: "none",
    color: colors.blue,
    marginLeft: -20,
  },
  postsComments: {
    marginLeft: 60,
  },
  postsStatus: {
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
  postsDate: {
    marginLeft: 60,
  },
  postsAction: {
    marginLeft: 30,
  },
  postsDetails: {
    display: "flex",
    marginTop: -50,
    background: colors.lightestGreyish,
    alignItems: "center",
    width: "100%",
  },
  posts: {
    background: colors.lightGrey,
    height: 1400,
    width: "100%",
    "@media (max-width: 769px)": {
      height: 1500,
    },
  },
  postsMainHeading: {
    position: "absolute",
    top: 60,
    left: 330,
  },
  postsMainHeadingBtn: {
    position: "absolute",
    top: 49,
    left: "81.5%",
    display: "flex",
    width: 900,
    "@media (max-width: 1825px)": {
      left: "80%",
    },
    "@media (max-width: 1676px)": {
      left: "78.5%",
    },
    "@media (max-width: 1585px)": {
      left: "77%",
    },
    "@media (max-width: 1460px)": {
      left: "75%",
    },
    "@media (max-width: 1350px)": {
      left: "77.5%",
    },

    "@media (max-width: 1250px)": {
      left: "76.5%",
    },

    "@media (max-width: 1170px)": {
      left: "75%",
    },

    "@media (max-width: 1100px)": {
      left: "73%",
    },

    "@media (max-width: 1040px)": {
      left: "71.5%",
    },

    "@media (max-width: 970px)": {
      left: "70%",
    },

    "@media (max-width: 910px)": {
      left: "68%",
    },

    "@media (max-width: 865px)": {
      left: "66.5%",
    },

    "@media (max-width: 830px)": {
      left: "65%",
    },

    "@media (max-width: 769px)": {
      left: "56%",
    },

    "@media (max-width: 658px)": {
      left: "59%",
      top: 53,
    },

    "@media (max-width: 586px)": {
      left: "62%",
    },
  },
  postsHeadingThumbnail: {
    marginLeft: 20,
    position: "absolute",
  },
  filterPostsContainer: {
    background: colors.white,
    position: "absolute",
    top: 165,
    left: 330,
    height: 91,
    width: "81%",
    display: "flex",
    alignItems: "center",
    borderTopRightRadius: "7px 7px",
    borderTopLeftRadius: "7px 7px",
    "@media (max-width: 1825px)": {
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
      top: 263,
      width: "81%",
    },
  },
  postsHeadingTitle: {
    marginLeft: 33,
    position: "absolute",
    left: 86,
  },
  postsHeadingAuthor: {
    left: "44%",

    position: "absolute",

    "@media (max-width: 1715px)": {
      left: "34%",
    },

    "@media (max-width: 1585px)": {
      left: "31%",
    },
  },
  postsHeadingStatus: {
    position: "absolute",
    left: "74%",
    "@media (max-width: 1715px)": {
      left: "70%",
    },

    "@media (max-width: 1585px)": {
      left: "68%",
    },
  },
  postsHeadingDate: {
    position: "absolute",
    left: "85%",

    "@media (max-width: 1715px)": {
      left: "82.5%",
    },

    "@media (max-width: 1585px)": {
      left: "80.5%",
    },
  },
  postsHeadingAction: {
    position: "absolute",
    left: "94.3%",
    "@media (max-width: 1715px)": {
      left: "92%",
    },
    "@media (max-width: 1585px)": {
      left: "91%",
    },
  },
  postHeadingCategories: {
    left: "57.5%",
    position: "absolute",

    "@media (max-width: 1715px)": {
      left: "47%",
    },

    "@media (max-width: 1585px)": {
      left: "45%",
    },
  },
  postHeadingComments: {
    position: "absolute",
    left: "67%",
    "@media (max-width: 1715px)": {
      left: "58%",
    },
  },
  dashboardPostStatusCont: {
    color: colors.orange,
    width: 95,
    height: 32,
    background: colors.lightestOrange,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -2,
    left: "74%",
    position: "absolute",
    "@media (max-width: 1715px)": {
      left: "70.5%",
    },
    "@media (max-width: 1585px)": {
      left: "68%",
    },
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "95%",
    },
  },
  dashboardPostStatusContActive: {
    width: 95,
    height: 32,
    background: colors.lightestBlue,
    color: colors.blue,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -2,
    left: "74%",
    position: "absolute",
    "@media (max-width: 1715px)": {
      left: "70.5%",
    },

    "@media (max-width: 1585px)": {
      left: "68%",
    },

    "@media (max-width: 1460px)": {
      position: "relative",
      left: "95%",
    },
  },
  editPostLinkButton: {
    textDecoration: "none",
    color: "inherit",
  },

  emptyData: {
    fontSize: 25,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.black,
  },
  filterElements: {
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 1460px)": {
      marginLeft: 55,
    },

    "@media (max-width: 900px)": {
      marginLeft: 0,
    },

    "@media (max-width: 769px)": {
      marginLeft: 0,
    },
  },
  postsIconChevronDown: {
    marginLeft: -20,
    position: "relative",
    left: -20,
    cursor: "pointer",
  },
  btnPlusIcon: {
    position: "relative",
    left: -6,
    top: -1,
  },
  dashboardPostStatusTrashed: {
    background: colors.lightestRed,
    color: colors.red,
    width: 95,
    height: 32,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -2,
    left: "74%",
    position: "absolute",
    "@media (max-width: 1715px)": {
      left: "70.5%",
    },

    "@media (max-width: 1585px)": {
      left: "68%",
    },
    "@media (max-width: 1460px)": {
      position: "relative",
      left: "95%",
    },
  },
  pagination: {
    zIndex: 1,
    position: "relative",
    right: "-79%",
    top: 1050,

    "@media (max-width: 1670px)": {
      right: "-74%",
    },

    "@media (max-width: 1544px)": {
      right: "-72%",
    },

    "@media (max-width: 1460px)": {
      top: 1150,
      right: "-71%",
    },

    "@media (max-width: 1340px)": {
      top: 1150,
      right: "-69%",
    },

    "@media (max-width: 1260px)": {
      right: "-65%",
    },

    "@media (max-width: 1100px)": {
      right: "-62%",
    },

    "@media (max-width: 966px)": {
      right: "-58%",
    },

    "@media (max-width: 890px)": {
      right: "-55%",
    },

    "@media (max-width: 769px)": {
      right: "-33%",
      top: 1220,
    },

    "@media (max-width: 530px)": {
      right: "-30%",
    },
  },
}));

export const postsCommentsText = {
  fontSize: 14,
  color: colors.secondGrey,
  marginLeft: -8,
};

export const filterPostsControl = {
  marginLeft: 5,
  border: colors.someGrey,
};

export const filterPostsInputLabel = {
  color: colors.darkGrey,
  fontWeight: 400,
  marginTop: -1,
};

export const filterPostsSelectCategory = {
  height: 52,
  width: 195,
};

export const filterPostsStatusLabel = {
  color: colors.darkGrey,
  fontWeight: 400,
  marginTop: -1,
};

export const filterPostsSelectStatus = {
  height: 52,
  width: 195,
};

export const filterPostsContainer = {
  p: "2px 4px",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  marginTop: -3,
  width: 266,
  marginLeft: 2.5,
  borderRadius: 3,
  height: 44,
  background: colors.lightestGreyish,
  boxShadow: "none",

  "@media (max-width: 1460px)": {
    marginTop: 2,
    marginLeft: -8,
  },

  "@media (max-width: 769px)": {
    width: 186,
    marginLeft: -4,
  },
};

export const filterPostsForm = {
  width: 185,
  minHeight: 34,
  borderRadius: 4,
  left: "67.2%",
  position: "absolute",
  top: 20,
  "@media (max-width: 1850px)": {
    left: "64.5%",
  },

  "@media (max-width: 1770px)": {
    left: "64%",
  },

  "@media (max-width: 1738px)": {
    left: "63.5%",
  },
  "@media (max-width: 1715px)": {
    left: "59.8%",
  },

  "@media (max-width: 1645px)": {
    left: "59%",
  },

  "@media (max-width: 1605px)": {
    left: "58%",
  },

  "@media (max-width: 1585px)": {
    left: "55%",
  },

  "@media (max-width: 1520px)": {
    left: "53%",
  },

  "@media (max-width: 1485px)": {
    left: "52.5%",
  },

  "@media (max-width: 1460px)": {
    position: "relative",
    top: 80,
    left: "-33%",
  },
  "@media (max-width: 769px)": {
    minHeight: 30,
    left: "-37%",
  },
};

export const filterPostsStatusForm = {
  width: 185,
  minHeight: 50,
  borderRadius: 4,
  position: "absolute",
  left: "84.5%",
  top: 20,

  "@media (max-width: 1850px)": {
    left: "83.5%",
  },

  "@media (max-width: 1770px)": {
    left: "83.5%",
  },

  "@media (max-width: 1738px)": {
    left: "83%",
  },

  "@media (max-width: 1715px)": {
    left: "80.5%",
  },

  "@media (max-width: 1655px)": {
    left: "79.8%",
  },

  "@media (max-width: 1605px)": {
    left: "79.5%",
  },

  "@media (max-width: 1585px)": {
    left: "78.5%",
  },

  "@media (max-width: 1560px)": {
    left: "78%",
  },

  "@media (max-width: 1520px)": {
    left: "77.5%",
  },

  "@media (max-width: 1485px)": {
    left: "76.5%",
  },
  "@media (max-width: 1460px)": {
    position: "relative",
    top: 95,
    left: "-11.6%",
  },
  "@media (max-width: 769px)": {
    minHeight: 30,
    left: "-16%",
  },
};

export const filterPostsInput = {
  ml: 1,
  flex: 1,
  fontSize: 15,
  color: colors.secondaryLightBlack,
};

export const editBtnPosts = {
  position: "relative",
  height: 50,
  width: 160,
  top: 42,
  zIndex: 200,
  left: -30,
  background: colors.darkBlue,
  color: colors.white,
  textTransform: "none",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 2.4,
  "&:hover": {
    background: colors.lightestBlack,
    opacity: "1",
  },

  "@media (max-width: 1350px)": {
    left: -70,
  },
  "@media (max-width: 1336px)": {
    width: 130,
    fontSize: 14,
    left: -30,
  },

  "@media (max-width: 769px)": {
    top: 100,
    left: -100,
    fontSize: 12,
    height: 40,
  },

  "@media (max-width: 500px)": {
    left: -75,
  },

  "@media (max-width: 360px)": {
    left: -55,
  },
};

export const searchButtonIcon = {
  p: "10px",
};

export const allPostsSubHeadingText = {
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 2,
  color: colors.secondGrey,
};

export const postsAuthor = {
  color: colors.secondGrey,
  fontWeight: 700,
  fontSize: 12,
  marginLeft: 1,
};

export const emptyStatusMenuItem = {
  height: 30,
};

export const allPostsHeadingText = {
  color: colors.black,
  fontWeight: 700,
  fontSize: 28,
  lineHeight: 3,
  marginTop: 2.5,
  marginLeft: 0,

  "@media (max-width: 769px)": {
    marginLeft: -27,
  },

  "@media (max-width: 450px)": {
    marginLeft: -23,
  },
};

export const postsTitle = {
  fontSize: 13,
  color: colors.black,
};

export const editBtn = {
  position: "relative",
  right: "-470%",
  height: 50,
  width: 200,
  top: 15,
};

export const postsClearFilter = {
  position: "relative",
  width: 160,
  top: 42,
  background: colors.darkBlue,
  color: colors.white,
  textTransform: "none",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 2.4,
  transition: "all .4s",

  "&:hover": {
    background: colors.lightestBlack,
    opacity: 1,
  },

  "@media (max-width: 1350px)": {
    left: -30,
  },

  "@media (max-width: 1336px)": {
    width: 130,
    fontSize: 14,
    left: 3,
  },

  "@media (max-width: 769px)": {
    top: 146,
    left: -230,
    fontSize: 12,
    height: 40,
  },

  "@media (max-width: 500px)": {
    left: -205,
  },

  "@media (max-width: 360px)": {
    left: -185,
  },
};
export { useStyles };
