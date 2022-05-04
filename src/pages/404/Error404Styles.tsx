import { makeStyles } from "@mui/styles";
import colors from "../../colors";

const useStyles = makeStyles(() => ({
  error: {
    backgroundColor: colors.darkWhite,
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  errorImg: {
    marginBottom: 30,
  },
  errorHeadingText: {
    color: colors.secondGrey,
    fontWeight: 600,
    fontSize: 16,
    marginTop: 10,
  },
  errorCont: {
    position: "absolute",
    bottom: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const error404MainButton = {
  marginTop: 5,
  width: 300,
  height: 50,
  fontWeight: 400,
};

export { useStyles, error404MainButton };
