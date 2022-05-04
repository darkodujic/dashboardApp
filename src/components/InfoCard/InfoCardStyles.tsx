import { makeStyles } from "@mui/styles";
import color from "../../colors";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    top: 205,
    left: 110,
    "@media (max-width: 769px)": {
      left: -50,
      top: 225,
    },

    "@media (max-width: 500px)": {
      left: -115,
    },
  },
  details: {
    display: "flex",
    marginTop: 4,
  },
  infoCard1: {
    "@media (max-width: 1161px)": {
      position: "relative",
      left: 135,
    },

    "@media (max-width: 769px)": {
      left: 0,
    },
  },
  infoCard2: {
    "@media (max-width: 1161px)": {
      position: "relative",
      left: -184,
      top: 400,
    },

    "@media (max-width: 769px)": {
      left: -324,
    },
  },
  infoCard3: {
    "@media (max-width: 1290px)": {
      position: "relative",
      left: -322,
      top: 200,
    },

    "@media (max-width: 1161px)": {
      position: "relative",
      left: -504,
      top: 600,
    },

    "@media (max-width: 769px)": {
      left: -650,
    },
  },
  infoCard4: {
    "@media (max-width: 1620px)": {
      position: "relative",
      left: -966,
      top: 200,
    },

    "@media (max-width: 1161px)": {
      position: "relative",
      left: -831,
      top: 200,
    },

    "@media (max-width: 769px)": {
      left: -970,
    },
  },
}));
export const dashboardHeading = {
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: 1,
  marginTop: -11,
  left: 10,
  position: "relative",
  top: -5,
  "@media (max-width: 769px)": {
    top: -20,
  },
};
export const dashboardTotalText = {
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.7,
  color: color.green,
  marginRight: 2,
  "@media (max-width: 769px)": {
    fontSize: 15,
  },
};
export const dashboardTotalSubscriptionsText = {
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.7,
  color: color.red,
  marginRight: 2,
  "@media (max-width: 769px)": {
    fontSize: 15,
  },
};

export const dashboardTotalAuthorsText = {
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.7,
  color: color.orange,
  marginRight: 2,

  "@media (max-width: 769px)": {
    fontSize: 15,
  },
};
export { useStyles };
