import { makeStyles } from "@mui/styles";
import colors from "../../colors";
const useStyles = makeStyles(() => ({
  footer: {
    position: "absolute",
    width: "130vw",
    padding: "20px 0",
    bottom: 0,
    background: colors.lightGrey,
    display: "flex",
    alignItems: "center",
    zIndex: 2,

    "@media (max-width: 769px)": {
      width: "140vw",
    },
    "@media (max-width: 500px)": {
      width: "170vw",
    },
  },
  footerTextCont: {
    left: 320,
    position: "relative",
    top: 0,

    "@media (max-width: 769px)": {
      left: 140,
    },

    "@media (max-width: 540px)": {
      left: 110,
    },

    "@media (max-width: 440px)": {
      width: "30%",
      left: 100,
    },
  },
  footerText: {
    textAlign: "center",
    color: colors.darkGrey,
    fontSize: 12,
  },
  footerDividerImg: {
    height: 2,
    position: "absolute",
    top: 0,
    left: -620,
    bottom: "100%",
    transform: "rotate(180deg)",
    zIndex: 2,
    width: "167%",

    "@media (max-width: 500px)": {
      left: -320,
    },
  },
}));
const FooterCopyrightParagraph = {
  fontSize: 15,
  "@media (max-width: 500px)": {
    fontSize: 12,
  },
};

export { useStyles, FooterCopyrightParagraph };
