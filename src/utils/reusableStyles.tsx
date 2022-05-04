import { CreateCSSProperties, CSSProperties, PropsFunc } from "@mui/styles";
import colors from "./../colors";
import { ITEM_HEIGHT } from "./constants";

export const loginAndRegisterCont:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: -60,
};

export const dashboardCategoriesSecondNumberBlue = {
  color: colors.blue,
  background: colors.lightestBlue,
  width: 32,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -5,
};

export const moreHorizIcon = {
  color: colors.darkerGrey,
};

export const dashboardCategoriesSecondNumberOrange = {
  color: colors.orange,
  background: colors.lightestOrange,
  width: 32,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -5,
};

export const dashboardCategoriesSecondNumberPurple = {
  color: colors.regularPurple,
  width: 32,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -5,
  background: colors.purpleLight,
};

export const editAndAddPost:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  height: 1250,
  width: "100vw",
  position: "relative",
  display: "flex",
  background: colors.lightGrey,
  justifyContent: "center",
  "@media (max-width:1340px)": {
    height: 1550,
  },
};

export const editAndAddPostCont:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: 120,
  left: "50%",
  marginLeft: 0,
};

export const editAndAddPostCategoriesHeading: {
  color: string;
  margin: number;
} = {
  color: colors.black,
  margin: 20,
};
export const linkNavigation: { textDecoration: string } = {
  textDecoration: "none",
};

export const categoriesEditAndAdd:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  height: 950,
  width: "100vw",
  position: "relative",
  display: "flex",
  overflow: "hidden",
  background: colors.lightGrey,
  justifyContent: "center",
};

export const editAndAddPostForm:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: 45,
};

export const editAndAddPostTextArea = {
  maxWidth: 525,
  background: colors.lightestGreyish,
  border: "none",
  maxHeight: 450,
  fontSize: 17,
  fontFamily: "inherit",
  padding: 15,
  marginTop: 40,
  borderRadius: "10px",
  marginLeft: -18,

  "@media (max-width:1350px)": {
    maxHeight: 260,
  },

  "@media (max-width:1025px)": {
    maxWidth: 335,
  },

  "@media (max-width:570px)": {
    maxWidth: 155,
  },

  "@media (max-width:400px)": {
    maxWidth: "80%",
    marginLeft: -15,
    maxHeight: 280,
  },
  "&::placeholder": {
    color: colors.darkestGreyColor,
    fontWeight: 400,
    fontSize: 17,
    fontFamily: "Roboto, Helvetica, Arial , sans-serif",
  },
  "&:focus": {
    color: colors.black,
    border: "none",
    outline: "none",
  },
};
export const editAndAddPostBtnCont = {
  marginTop: 40,
  "@media (max-width:1340px)": {
    marginLeft: -360,
  },
  "@media (max-width:1024px)": {
    marginLeft: -310,
  },
  "@media (max-width:769px)": {
    position: "relative",
    left: -80,
  },
  "@media (max-width:570px)": {
    top: 60,
    left: -107,
  },
};

export const editAndAddPostTextAreaField = {
  maxWidth: 525,
  background: colors.lightestGreyish,
  border: "none",
  fontSize: 17,
  fontFamily: "inherit",
  maxHeight: 460,
  padding: 15,
  marginTop: 40,
  borderRadius: "10px",
  marginLeft: -18,
};

export const editAndAddPostFormProps = {
  width: 550,
  background: colors.lightestGreyish,
  marginTop: 5,
  borderRadius: "10px",
  marginLeft: -2,
  zIndex: 3,
  "@media (max-width:1024px)": {
    width: "100%",
  },
};

export const editAndAddPostTextFieldLabelText = {
  position: "relative",
  height: 0,
  left: -15,
  marginTop: 3,
  fontWeight: 600,
  color: colors.darkGrey,
  letterSpacing: 1,
};

export const editAndAddPostCategories = {
  marginTop: 2,
};

export const editAndAddPostCategoriesRadioBtn = { borderRadius: 10 };
export const editAndAddPostNewCont = {
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    width: 608,
    height: 878,
    marginLeft: -37,
    top: -173,
    position: "relative",
    borderRadius: "10px",

    "@media (max-width:1340px)": {
      height: 678,
      marginLeft: -20,
    },

    "@media (max-width:1024px)": {
      width: 408,
      marginLeft: -5,
    },

    "@media (max-width:769px)": {
      left: "-30%",
      marginTop: -14,
    },

    "@media (max-width:570px)": {
      top: 50,
      width: "110%",
      left: "-12%",
    },

    "@media (max-width:400px)": {
      top: 50,
      width: 250,
      left: "-11%",
    },
  },
};

export const editAndAddPostCategoriesHeadingText = {
  color: colors.black,
  fontWeight: 600,
  fontSize: 17,
};

export const editAndAddPostSaveBtn = {
  position: "relative",
  height: 50,
  width: 160,
  left: 235,
  top: -135,
  background: colors.darkBlue,
  color: colors.white,
  textTransform: "none",
  fontWeight: 300,
  fontSize: 16,
  lineHeight: 2.4,

  "@media (max-width:1024px)": {
    height: 40,
    width: 100,
    top: -140,
    left: 270,
    fontSize: 14,
  },

  "@media (max-width:769px)": {
    height: 30,
    width: 80,
    top: -134,
    left: 270,
  },
};

export const editAndAddPostCloseBtn = {
  position: "relative",
  top: -185,
  right: -415,
  background: colors.white,
  border: "none",
  color: colors.lightGrey,
  height: 50,
  width: 160,
  fontSize: 16,
  lineHeight: 2.4,
  textAlign: "center",
  textTransform: "none",

  "@media (max-width:1024px)": {
    height: 40,
    width: 100,
    top: -180,
    right: -390,
    fontSize: 14,
  },

  "@media (max-width:769px)": {
    height: 30,
    width: 80,
    right: -370,
    top: -164,
    fontSize: 14,
  },
};

export const editAndAddPostHeading = {
  color: colors.black,
  fontWeight: 700,
  fontSize: 29,
  position: "absolute",
  top: -90,
  left: -295,

  "@media (max-width:1340px)": {
    left: -163,
  },
  "@media (max-width:1024px)": {
    left: -42,
    top: -95,
    fontSize: 24,
  },
  "@media (max-width:769px)": {
    left: -155,
  },
  "@media (max-width:570px)": {
    fontSize: 25,
    top: -100,
    left: -50,
  },

  "@media (max-width:400px)": {
    left: -30,
  },
};

export const editAndAddPostCategoriesContainer = {
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    width: 328,

    "@media (max-width:1340px)": {
      width: 610,
    },
    "@media (max-width:1024px)": {
      width: 410,
    },
  },
  position: "absolute",
  top: -33,
  left: "100%",

  "@media (max-width:1340px)": {
    left: "-37%",
    top: 680,
  },
  "@media (max-width:1024px)": {
    left: "-13%",
  },

  "@media (max-width:769px)": {
    left: "-44%",
  },

  "@media (max-width:570px)": {
    width: "118%",
    left: "-36%",
    top: 720,
  },
  "@media (max-width:400px)": {
    left: "-33%",
    width: "122%",
  },
};

export const editAndAddPostsGroup = {
  marginTop: 2,
};

export const editAndAddPostInput = {
  width: "80%!",
  margin: 1,
};
export const dashboardCategoriesSecondNumberRed = {
  color: colors.lightRed,
  background: colors.lightestRed,
  width: 32,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -5,
};

export const dashboardCategoriesSecondNumberGreen = {
  color: colors.green,
  background: colors.lightestGreen,
  width: 32,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -5,
};

export const loginAndRegisterForm:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  margin: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 10,
  position: "relative",
};

export const divider = {
  height: 1,
  width: "450%",
  background: colors.someGrey,
  position: "absolute",
  left: 0,
  marginTop: 78,
};

export const menuStyle = {
  maxHeight: ITEM_HEIGHT * 4.5,
  width: "20ch",
};

export const elementLinkActive = {
  display: "flex",
  alignItems: "center",
  height: 85,
  textDecoration: "none",
  background: colors.lightViolet,
  width: "100%",
  cursor: "pointer",
  marginTop: -8,
  transition: "all .1s",

  "@media (max-width: 1460px)": {
    marginTop: 5,
    height: 74,
    background: colors.white,
    width: "auto",
  },
};

export const headingBtnAndTitle = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};
export const loginAndRegisterContainerMargin: { marginTop: number } = {
  marginTop: 10,
};

export const usersAndPostsThumbnail = {
  marginLeft: 20,
  width: 40,
};

export const newLink = {
  marginTop: 15,
  display: "flex",
  alignItems: "center",
  height: 64,
  textDecoration: "none",
  cursor: "pointer",
};

export const thumbnailImg = {
  height: 50,
  borderRadius: 5,
};

export const avatarImg = {
  height: 30,
  width: "50%",
  borderRadius: "50%",
};

export const newLinkActive = {
  marginTop: 15,
  display: "flex",
  alignItems: "center",
  height: 62,
  textDecoration: "none",
  background: colors.lightViolet,
  width: "100%",
  cursor: "pointer",
};

export const usersAndPostsHeading: { display: string } = {
  display: "flex",
};
export const usersAndPostsContainerElements: {
  marginTop: number;
  display: string;
  alignItems: string;
  height: number;
} = {
  marginTop: 5,
  display: "flex",
  alignItems: "center",
  height: 64,
};

interface postsAndUserItemContProps {
  width: string;
  background: string;
  position: string;
  left: number;
  top: number;

  "@media (max-width: 1460px)": {
    overflowX: string;
    top: number;
  };
  "@media (max-width: 769px)": {
    left: number;
    top: number;
  };
}

export const newPostContainer:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  borderRadius: "10px",
};

export const menuItemContainer:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  marginLeft: -11,
};

export const postsAndUsersItemCont:
  | CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>> = {
  width: "81%",
  background: colors.white,
  position: "absolute",
  top: 307,
  left: 330,

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
    overflowX: "auto",
    top: 380,
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
    top: 480,
    width: "81%",
  },
};
