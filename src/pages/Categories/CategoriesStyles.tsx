import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import { ITEM_HEIGHT } from "../../utils/constants";
import { menuItemContainer, moreHorizIcon } from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  categoriesItemContainer: {
    width: "81%",
    background: colors.white,
    height: 730,
    position: "absolute",
    top: 306,
    left: 330,
    margin: "0 auto",
    "@media (max-width:1824px)": {
      width: "79%",
    },

    "@media (max-width:1634px)": {
      width: "77%",
    },

    "@media (max-width:1510px)": {
      width: "75%",
    },

    "@media (max-width:1376px)": {
      width: "73%",
    },

    "@media (max-width:1300px)": {
      overflowX: "auto",
      width: "71%",
    },

    "@media (max-width:1190px)": {
      width: "69%",
    },
    "@media (max-width:1100px)": {
      width: "67%",
    },

    "@media (max-width:1030px)": {
      width: "65%",
    },

    "@media (max-width:970px)": {
      width: "63%",
    },

    "@media (max-width:910px)": {
      width: "61%",
    },

    "@media (max-width:870px)": {
      width: "59%",
    },

    "@media (max-width:822px)": {
      width: "56%",
    },

    "@media (max-width:769px)": {
      left: 110,
      top: 337,
      width: "81%",
    },
  },

  categoriesHeading: {
    display: "flex",
  },
  categories: {
    background: colors.lightGrey,
    height: 1400,
  },

  categoriesContainerElements: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    height: 74,
  },
  categoriesThumbnailCont: {
    marginLeft: 20,
    width: 40,
    marginTop: 0,
  },
  categoriesNewLink: {
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
  },
  categoriesNewLinkActive: {
    marginTop: -4,
    display: "flex",
    alignItems: "center",
    height: 80,
    textDecoration: "none",
    background: colors.lightViolet,
    width: "100%",
    cursor: "pointer",

    "@media (max-width: 1460px)": {
      marginTop: 5,
      height: 64,
      background: colors.white,
      width: "auto",
    },
  },
  categoriesThumbnailImg: {
    height: 57,
    borderRadius: 5,
    width: "200%",
  },
  categoriesTitle: {
    marginLeft: 60,
    width: 280,
  },
  categoriesDescriptionCont: {
    display: "flex",
    alignItems: "center",
    marginLeft: -90,
    width: 300,
  },
  categoriesItems: {
    width: 140,
    marginLeft: 20,
    top: -7,
  },
  categoriesLink: {
    textDecoration: "none",
    color: colors.secondGrey,
    fontSize: 14,
    fontWeight: 600,
    position: "absolute",
    left: "70.5%",
    marginTop: -12,

    "@media (max-width:1700px)": {
      left: "55%",
    },

    "@media (max-width:1300px)": {
      position: "relative",
      left: "70%",
    },
  },

  categoriesDate: {
    left: "85.3%",
    position: "absolute",

    "@media (max-width:1700px)": {
      left: "75%",
    },

    "@media (max-width:1300px)": {
      position: "relative",
      left: "40%",
    },
  },
  categoriesAction: {
    position: "absolute",
    left: "94.3%",
    "@media (max-width:1700px)": {
      left: "91%",
    },
    "@media (max-width:1300px)": {
      position: "relative",
      left: "70%",
    },
  },
  categoriesDetails: {
    display: "flex",
    marginTop: -50,
    background: colors.lightestGreyish,
    alignItems: "center",
    width: "100%",
  },
  addNewBtnCategories: {
    position: "relative",
    top: -58,
    left: "89.8%",
    "@media (max-width:1820px)": {
      left: "88.5%",
    },

    "@media (max-width:1700px)": {
      left: "89%",
      padding: 2,
    },

    "@media (max-width:1630px)": {
      left: "87.5%",
    },

    "@media (max-width:1540px)": {
      left: "88%",
    },

    "@media (max-width:1510px)": {
      left: "86.2%",
    },

    "@media (max-width:1445px)": {
      left: "86.7%",
    },

    "@media (max-width:1376px)": {
      left: "85%",
    },

    "@media (max-width:1345px)": {
      left: "85.8%",
    },

    "@media (max-width:1300px)": {
      top: -10,
      left: "85.7%",
    },

    "@media (max-width:1230px)": {
      left: "86.5%",
    },

    "@media (max-width:1190px)": {
      left: "85%",
    },

    "@media (max-width:1145px)": {
      left: "85.5%",
    },

    "@media (max-width:1110px)": {
      left: "84%",
    },

    "@media (max-width:1075px)": {
      left: "84.3%",
    },

    "@media (max-width:1030px)": {
      left: "83.5%",
    },

    "@media (max-width:980px)": {
      left: "84.2%",
    },

    "@media (max-width:970px)": {
      left: "82.2%",
    },

    "@media (max-width:945px)": {
      left: "83.5%",
    },

    "@media (max-width:910px)": {
      left: "82%",
    },

    "@media (max-width:870px)": {
      left: "80.5%",
    },
    "@media (max-width:840px)": {
      left: "81.5%",
    },

    "@media (max-width:825px)": {
      left: "79%",
    },

    "@media (max-width:790px)": {
      left: "80%",
    },

    "@media (max-width:769px)": {
      left: "42%",
      top: 15,
    },
  },
  categoriesMainHeading: {
    position: "absolute",
    top: 30,
    left: 500,
  },
  categoriesHeadingThumbnail: {
    left: 20,
    position: "absolute",
  },
  filterCategoriesContainer: {
    background: colors.white,
    position: "absolute",
    top: 165,
    left: 330,
    height: 90,
    width: "81%",
    display: "flex",
    alignItems: "center",
    borderTopRightRadius: "7px 7px",
    borderTopLeftRadius: "7px 7px",
    "@media (max-width:1824px)": {
      width: "79%",
    },
    "@media (max-width:1634px)": {
      width: "77%",
    },

    "@media (max-width:1510px)": {
      width: "75%",
    },

    "@media (max-width:1376px)": {
      width: "73%",
    },

    "@media (max-width:1300px)": {
      top: 212,
      width: "71%",
    },

    "@media (max-width:1190px)": {
      width: "69%",
    },

    "@media (max-width:1100px)": {
      width: "67%",
    },

    "@media (max-width:1030px)": {
      width: "65%",
    },

    "@media (max-width:970px)": {
      width: "63%",
    },

    "@media (max-width:910px)": {
      width: "61%",
    },

    "@media (max-width:870px)": {
      width: "59%",
    },

    "@media (max-width:822px)": {
      width: "56%",
    },

    "@media (max-width:769px)": {
      left: 110,
      top: 245,
      width: "81%",
    },
  },
  categoriesHeadingTextCont: {
    marginTop: 20,
    marginLeft: 50,
    "@media (max-width:769px)": {
      position: "absolute",
      left: "-167%",
      top: 10,
    },
  },
  categoriesHeadingName: {
    marginLeft: 30,
    position: "absolute",
    left: 88,
  },
  categoriesHeadingDescription: {
    marginLeft: 160,

    position: "absolute",
    left: 158,
  },

  categoriesHeadingDate: {
    position: "absolute",
    left: "85.2%",

    "@media (max-width:1700px)": {
      left: "75%",
    },
  },

  btnPlusIcon: {
    position: "relative",
    left: -6,
    top: -1,
  },
  categoriesHeadingAction: {
    position: "absolute",
    left: "94%",
    "@media (max-width:1700px)": {
      left: "91%",
    },
  },
  categoriesHeadingSlug: {
    position: "absolute",
    left: "70.5%",
    "@media (max-width:1700px)": {
      left: "55%",
    },
  },

  pagination: {
    position: "relative",
    right: "-79%",
    top: 950,

    "@media (max-width: 1400px)": {
      right: "-73%",
    },

    "@media (max-width: 1140px)": {
      right: "-67%",
    },

    "@media (max-width: 840px)": {
      right: "-62%",
    },

    "@media (max-width:769px)": {
      right: "-43%",
      top: 1000,
    },
  },
  divider: {
    height: 1,
    width: "450%",
    background: colors.someGrey,
    position: "absolute",
    left: 0,
    marginTop: 78,

    "@media (max-width:1300px)": {
      width: 1700,
    },

    "@media (max-width:769px)": {
      width: 1600,
    },
  },

  editCategoriesLinkButton: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export const categoriesHeadingText = {
  position: "absolute",
  top: 75,
  left: -170,
  fontSize: 28,
  width: 300,
  fontWeight: 700,

  "@media (max-width:1300px)": {
    top: 120,
  },

  "@media (max-width:769px)": {
    left: -430,
    top: 50,
  },
};

export const moreHorizontalIcon = moreHorizIcon;

export const allCategoriesSubHeadingText = {
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 2,
  color: colors.secondGrey,
};

export const categoriesDateText = {
  color: colors.secondGrey,
  fontSize: 15,
};

export const menuCategoriesContainer = menuItemContainer;

export const categoriesDescription = {
  color: colors.secondGrey,
  fontWeight: 500,
  fontSize: 13,
  marginLeft: 1,
  marginTop: -1,
};

export const categoriesSearchInput = {
  ml: 1,
  flex: 1,
  fontSize: 15,
  color: colors.secondaryLightBlack,
};
export const categoriesBtn = {
  marginLeft: 75,
  width: 170,
  height: 50,
};

export const emptyStatusMenuItem = {
  height: 30,
};

export const categoriesTitle = {
  fontSize: 13,
  color: colors.black,
  marginTop: -1,
  fontWeight: 500,
};

export const addBtnPosts = {
  height: 50,
  width: 160,
  top: 78,
  background: colors.darkBlue,
  color: colors.white,
  textTransform: "none",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 2.4,

  "@media (max-width:1300px)": {
    height: 40,
    width: 140,
    fontSize: 13,
    top: 84,
  },

  "@media (max-width:760px)": {
    height: 40,
    width: 140,
    top: 90,
  },
};

export const inputLabelText = {
  marginLeft: 15,
  marginTop: -5,
  color: colors.darkGreyish,
  fontSize: 16,
  width: "90%",
};

export const editCategoryUpdateButton = {
  width: 300,
  position: "absolute",
  left: 55,
  top: 325,
  background: colors.darkBlue,
  fontWeight: 400,
};

export const categoriesMenu = {
  maxHeight: ITEM_HEIGHT * 4.5,
  width: "20ch",
};

export const categoriesSearchFiltersStyle = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 266,
  marginLeft: 2.5,
  borderRadius: 3,
  height: 44,
  background: colors.lightestGreyish,
  boxShadow: "none",
  "@media (max-width:769px)": {
    width: 180,
    marginLeft: 1,
  },
};
export { useStyles };
