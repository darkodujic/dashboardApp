import { makeStyles } from "@mui/styles";
import colors from "../../colors";
const useStyles = makeStyles(() => ({
  formDetails: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
    position: "relative",
  },
  label: {
    marginBottom: 10,
    color: colors.black,
    fontWeight: 600,
    position: "absolute",
    left: 0,
    top: -10,
  },
  error: {
    position: "absolute",
    color: colors.red,
    top: 57,
  },
}));

export default useStyles;
