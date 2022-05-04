import React from "react";
import DashboardCategories from "../../../components/DashboardCategories/DashboardCategories";
import DashboardPostsCont from "../../../components/DashboardPosts/DashboardPostsContainer/DashboardPostsCont";
import InfoCardComp from "../../../components/InfoCard/InfoCard";
import NewCustomerChart from "../../../components/NewCustomerChart/NewCustomerChart";
import ReactChart from "../../../components/VisitorsReactChart/VisitorsChart";
import { useStyles } from "../DashboardStyles";

const DashboardWrapper: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.dashboardAllSections}>
      <div className={classes.dashboardInfoCards}>
        <InfoCardComp />
      </div>

      <div className={classes.dashboardReactChart}>
        <ReactChart />
      </div>
      <div className={classes.dashboardNewCustomers}>
        <NewCustomerChart />
      </div>

      <div className={classes.dashboardTopCategories}>
        <DashboardCategories />
      </div>

      <div className={classes.dashboardPosts}>
        <DashboardPostsCont />
      </div>
    </div>
  );
};

export default DashboardWrapper;
