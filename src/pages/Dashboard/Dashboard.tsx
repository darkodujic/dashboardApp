import React from "react";
import { useStyles } from "./DashboardStyles";
import DashboardWrapper from "./DashboardWrapper/DashboardWrapper";

const Dashboard: React.FC = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <DashboardWrapper />
    </div>
  );
};
export default Dashboard;
