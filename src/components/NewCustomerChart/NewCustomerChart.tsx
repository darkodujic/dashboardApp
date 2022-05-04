import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import colors from "../../colors";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  newCustomersChartHeadingText,
  newCustomersChartMargin,
  useStyles,
} from "./NewCustomerChartStyles";
import { apiLast30Days } from "../../redux/api/api";
import axios from "axios";
import { NewCustomersValues } from "../../utils/interfaceTypes";
const NewCustomersChart: React.FC = () => {
  const [newCustomersData, setNewCustomersData] =
    useState<NewCustomersValues[]>();
  const { t } = useTranslation();
  const fetchVisitorsByMonths = async () => {
    try {
      const response = await axios.get(apiLast30Days);
      if (response.data) {
        setNewCustomersData(response.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchVisitorsByMonths();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.newCustomersChart}>
      <Typography sx={newCustomersChartHeadingText}>
        {t("dashboard.newCustomersHeading")}
      </Typography>
      <ResponsiveContainer width="115%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={newCustomersData}
          margin={newCustomersChartMargin}
        >
          <CartesianGrid display="none" strokeDasharray="3 3" />
          <XAxis />
          <YAxis display="none" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke={colors.lightBlack}
            fill={colors.lightBlack}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewCustomersChart;
