import { makeStyles } from "@mui/styles";
import colors from "../../colors";
import { headingBtnAndTitle } from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  headingSettingsAvatarImg: {
    left: "155%",
  },
  headingAppBarContainer: {
    position: "relative",
    minWidth: "98vw",
    "@media (max-width:900px)": {
      minWidth: "100vw",
    },
  },
  headingMainButton: {
    position: "absolute",
    right: "-55%",

    "@media (max-width:1834px)": {
      left: "140%",
    },

    "@media (max-width:1760px)": {
      left: "143%",
    },
    "@media (max-width:1640px)": {
      left: "139%",
    },
    "@media (max-width:1560px)": {
      left: "133%",
    },
    "@media (max-width:1390px)": {
      left: "131%",
      width: "20%",
    },

    "@media (max-width:1350px)": {
      width: "11%",
      left: "135%",
    },

    "@media (max-width:1060px)": {
      left: "131%",
    },
    "@media (max-width:900px)": {
      left: "128%",
    },

    "@media (max-width:800px)": {
      left: "122%",
    },

    "@media (max-width:620px)": {
      left: "118%",
    },
    "@media (max-width: 500px)": {
      left: "108%",
    },

    "@media (max-width: 430px)": {
      left: "100%",
    },
  },
  chevronIcon: {
    position: "absolute",
    top: 7,
    left: "65%",
    cursor: "pointer",

    "@media (max-width:1640px)": {
      left: "54%",
    },
    "@media (max-width:1560px)": {
      left: "45%",
    },

    "@media (max-width:1390px)": {
      left: "49%",
    },

    "@media (max-width:1350px)": {
      left: "38%",
    },

    "@media (max-width:900px)": {
      left: "38%",
    },

    "@media (max-width:800px)": {
      left: "48%",
    },

    "@media (max-width:620px)": {
      left: "58%",
    },

    "@media (max-width:500px)": {
      left: "70%",
    },

    "@media (max-width: 500px)": {
      left: "89%",
    },
  },
}));

const headerContainer = {
  bgcolor: colors.white,
  zIndex: 2,
};
const headerToolbarContainer = {
  height: 70,
  background: colors.white,
  width: "65%",
  position: "relative",
  zIndex: 3,
  "@media (max-width:1750px)": {
    left: "-5%",
  },
  "@media (max-width:1350px)": {
    left: "-7%",
  },
};

export const headingSpanBtn = {
  marginLeft: -1,
  width: "120%",
  zIndex: 2,
  color: colors.darkGreyish,

  "@media (max-width:1750px)": {
    width: "50%",
    marginLeft: 4,
  },

  "@media (max-width:1350px)": {
    width: "90%",
    marginLeft: -2,
  },

  "@media (max-width:900px)": {
    width: "39%",
  },
};

export const headingContainer = {
  zIndex: 2,
};
const headerIconNavContainer = headingBtnAndTitle;

const headerMenuButton = {
  display: { xs: "block", md: "none" },
};

const headerLogoTitle = headingBtnAndTitle;

const headerEmptyContainer = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  position: "absolute",
};

const headerSettingsMenuContainer = {
  position: "relative",
  width: "40%",
  left: "102%",

  "@media (max-width:1834px)": {
    left: "98%",
  },

  "@media (max-width:1760px)": {
    left: "99%",
  },
  "@media (max-width:1640px)": {
    left: "95%",
  },
  "@media (max-width:1560px)": {
    left: "90%",
  },
  "@media (max-width:1000px)": {
    left: "92%",
  },

  "@media (max-width:900px)": {
    left: "26%",
  },

  "@media (max-width:800px)": {
    left: "23%",
  },

  "@media (max-width:500px)": {
    left: "15%",
  },
};
const headerSettingsIcon = {
  p: 0,
};
const headerSecondMenu = {
  marginTop: 10,
  marginLeft: 3,
};

const iconButtonSx2 = {
  color: colors.blue,
};

export {
  useStyles,
  headerContainer,
  headerToolbarContainer,
  headerIconNavContainer,
  headerMenuButton,
  headerLogoTitle,
  headerEmptyContainer,
  headerSettingsMenuContainer,
  headerSettingsIcon,
  headerSecondMenu,
  iconButtonSx2,
};
