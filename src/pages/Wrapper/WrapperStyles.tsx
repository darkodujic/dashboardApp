import { makeStyles } from "@mui/styles";
import colors from "../../colors";
const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    background: colors.lightGrey,
    marginBottom: 10,
    display: "flex",
    height: "10%",
  },
}));

export const WrapperSx = {
  maxWidth: 1450,
  "@media (min-width:1300px)": {
    maxWidth: "100vw",
  },
};
export { useStyles };
