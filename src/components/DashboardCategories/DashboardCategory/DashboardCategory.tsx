import React from "react";
import {
  colorBlue,
  colorGreen,
  colorPurple,
  colorRed,
} from "../../../utils/constants";
import { DashboardCategoriesProps } from "../../../utils/interfaceTypes";
import {
  dashboardCategoriesElementHeadingText,
  dashboardCategoriesFirstNumberText,
  dashboardCategoriesSecondNumberText,
  dashboardCategorySubHeadingText,
  useStyles,
} from "../DashboardCategoriesStyles";
import DashboardCategoryText from "./DashboardCategoryText/DashboardCategoryText";

const DashboardCategory: React.FC<DashboardCategoriesProps> = ({
  name,
  description,
  firstNumber,
  secondNumber,
  color,
}) => {
  const classes = useStyles();
  const pickColor =
    color === colorPurple
      ? classes.dashboardCategoriesSecondNumberPurple
      : color === colorBlue
      ? classes.dashboardCategoriesSecondNumberBlue
      : color === colorRed
      ? classes.dashboardCategoriesSecondNumberRed
      : color === colorGreen
      ? classes.dashboardCategoriesSecondNumberGreen
      : classes.dashboardCategoriesSecondNumberOrange;
  return (
    <>
      <div className={classes.dashboardCategories}>
        <div className={classes.dashboardCategoriesContainer}>
          <DashboardCategoryText
            sxProps={dashboardCategoriesElementHeadingText}
            text={name}
          />
          <div>
            <DashboardCategoryText
              sxProps={dashboardCategorySubHeadingText}
              text={description}
            />
          </div>
        </div>
        <div className={classes.dashboardCategoriesNumbers}>
          <div>
            <DashboardCategoryText
              sxProps={dashboardCategoriesFirstNumberText}
              text={firstNumber}
            />
          </div>
          <div className={pickColor}>
            <DashboardCategoryText
              sxProps={dashboardCategoriesSecondNumberText}
              text={secondNumber}
            />
          </div>
        </div>
        <div className={classes.dashboardCategoriesDivider}></div>
      </div>
    </>
  );
};

export default DashboardCategory;
