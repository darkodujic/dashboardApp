import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardCategoryMainHeadingText,
  dashboardCategorySubHeadingText,
  useStyles,
} from "./DashboardCategoriesStyles";
import DashboardCategory from "./DashboardCategory/DashboardCategory";
import { getCategoriesData, getPostsData } from "../../redux/selectors";
import { fetchCategoriesRequest } from "../../redux/actions/categoriesActions/categoriesActions";

const DashboardCategories: React.FC = () => {
  const categoryState = useSelector(getCategoriesData);
  const postsState = useSelector(getPostsData);
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, []);
  return (
    <div className={classes.dashboardCategory}>
      <div className={classes.dashboardCategoryContainer}>
        <div className={classes.dashboardCategoryHeading}>
          <Typography sx={dashboardCategoryMainHeadingText}>
            {t("categories.topcategories")}
          </Typography>
          <div>
            <Typography sx={dashboardCategorySubHeadingText}>
              {categoryState?.length} {t("categories.categories")}{" "}
              {postsState?.length} {t("categories.posts")}
            </Typography>
          </div>
        </div>
        {categoryState?.map(
          (el: {
            name: string;
            description: string;
            firstNumber: string | number;
            secondNumber: string | number;
            color: string;
          }) => {
            return (
              <DashboardCategory
                key={el.name}
                name={el.name}
                description={el.description}
                firstNumber={el.firstNumber}
                secondNumber={el.secondNumber}
                color={el.color}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default DashboardCategories;
