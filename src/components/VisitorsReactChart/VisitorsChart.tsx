import React, { useEffect, useState } from "react";
import {
  useStyles,
  visitorsChartDot,
  visitorsChartXAndYaxis,
  visitorsChartLine,
} from "./VisitorsReactChartStyles";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import colors from "../../colors";
import { apiByMonth } from "../../redux/api/api";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
interface ChartData {
  month: string;
  shortName: string;
  numberOfVisitors: number;
}
const VisitorsChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>();
  const [visitorsData, setVisitorsData] = useState<ChartData[]>();
  const [loading, setLoading] = useState(false);
  const fetchVisitorsByMonths = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiByMonth);
      const getFirstSixMonths = response.data.splice(0, 6);
      const getLastSixMonths = response.data;
      if (response.data) {
        setChartData(getFirstSixMonths);
        setVisitorsData(getLastSixMonths);
        setLoading(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchVisitorsByMonths();
  }, []);

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader size={135} color={colors.blue} loading />
        </div>
      ) : (
        false
      )}
      <div className={classes.visitorsChart}>
        <ResponsiveContainer width="138%" height="100%">
          <LineChart
            data={chartData}
            width={500}
            height={300}
            margin={visitorsChartLine}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              stroke={colors.white}
              tick={visitorsChartXAndYaxis}
              dataKey="shortName"
            />
            <YAxis
              stroke={colors.grey}
              tick={visitorsChartXAndYaxis}
              dataKey="numberOfVisitors"
            />
            <Tooltip />
            <Line
              strokeWidth={3}
              data={chartData}
              type="monotone"
              dataKey="numberOfVisitors"
              stroke={colors.darkBlue}
              activeDot={visitorsChartDot}
            />
            <Line
              strokeWidth={3}
              data={visitorsData}
              type="monotone"
              dataKey="numberOfVisitors"
              stroke={colors.green}
              activeDot={visitorsChartDot}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default VisitorsChart;
