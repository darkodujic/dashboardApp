import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import AllCategoriesText from "../../components/DashboardCategories/DashboardCategory/DashboardCategoryText/DashboardCategoryText";
import {
  categoriesHeadingText,
  categoriesSearchFiltersStyle,
  allCategoriesSubHeadingText,
  useStyles,
  categoriesSearchInput,
  addBtnPosts,
} from "./CategoriesStyles";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesData } from "../../redux/selectors";
import {
  categoryDeleteRequest,
  fetchFilteringCategoriesRequest,
} from "../../redux/actions/categoriesActions/categoriesActions";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import { useNavigate } from "react-router";
import Categories from "../../components/Categories/Categories";
import { useTranslation } from "react-i18next";
import { fetchingAllCategoriesData } from "../../redux/api/api";
import {
  CategoriesElements,
  CategoriesState,
} from "../../utils/interfaceTypes";
import GlobalTitleText from "../../components/GlobalTitleText/GlobalTitleText";
import SearchInputIcon from "../../img/icon-search.svg";
import PlusButtonIconAdd from "../../img/icon-plus.svg";
import DataPagination from "../../components/DataPagination/DataPagination";
import EmptyData from "../../components/EmptyData/EmptyData";
import { apiLimit, pageNumberLimit } from "../../utils/constants";

const AllCategories: React.FC = () => {
  const classes = useStyles();
  const [categoriesNewData, setCategoriesNewData] = useState<CategoriesState[]>(
    []
  );
  const { t } = useTranslation();
  const [fullCategoriesPage, setFullCategoriesPage] = React.useState(1) as [
    number,
    Dispatch<SetStateAction<number>>
  ];
  const [categoriesUpdatedCounter, setCategoriesUpdatedCounter] = useState(0);
  const categoriesState = useSelector(getCategoriesData);
  const [categoriesSearchValue, setCategoriesSearchValue] = React.useState("");

  const getAllUpdatedCategories = () => {
    dispatch(
      fetchFilteringCategoriesRequest(
        categoriesSearchValue,
        fullCategoriesPage,
        apiLimit
      )
    );
  };
  const setCategoriesForPagination = () => {
    fetchingAllCategoriesData(setCategoriesNewData, categoriesSearchValue);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setCategoriesForPagination();
  }, []);
  useEffect(() => {
    getAllUpdatedCategories();
  }, [categoriesUpdatedCounter]);
  const pageNumbers = Math.ceil(categoriesNewData?.length / pageNumberLimit);
  const paginationChange = () => {
    getAllUpdatedCategories();
    setCategoriesForPagination();
  };
  const changeCategoriesPage = (page: number) => {
    setFullCategoriesPage(page);
  };
  useEffect(() => {
    paginationChange();
  }, [fullCategoriesPage]);
  const deleteCategoryItem = (id: number) => {
    dispatch(categoryDeleteRequest(id));
    setCategoriesUpdatedCounter(categoriesUpdatedCounter + 1);
  };
  const onSubmitText = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getAllUpdatedCategories();
    setCategoriesForPagination();
  };
  const categoriesSearchOnChange = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    setCategoriesSearchValue(
      `description_like=${event.target.value as string}`
    );
  };
  return (
    <div className={classes.categories}>
      <div className={classes.categoriesMainHeading}>
        <div className={classes.categoriesHeadingTextCont}>
          <GlobalTitleText
            sxProps={categoriesHeadingText}
            text={t("posts.allCategories")}
          />
        </div>
      </div>
      <div className={classes.addNewBtnCategories}>
        <Button
          onClick={() => navigate("/categories/addcategory")}
          sx={addBtnPosts}
        >
          <img
            alt="categoriesBtnPlusImg"
            className={classes.btnPlusIcon}
            src={PlusButtonIconAdd}
          ></img>
          {t("posts.addnew")}
        </Button>
      </div>
      <div className={classes.filterCategoriesContainer}>
        <Paper
          component="form"
          onSubmit={onSubmitText}
          onChange={categoriesSearchOnChange}
          sx={categoriesSearchFiltersStyle}
        >
          <InputBase
            sx={categoriesSearchInput}
            placeholder={t("posts.search")}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            aria-label="search"
          >
            <img alt="searchInputImg" src={SearchInputIcon}></img>
          </IconButton>
        </Paper>
      </div>
      <div className={classes.categoriesItemContainer}>
        <div className={classes.categoriesHeading}>
          <div className={classes.categoriesDetails}>
            <div className={classes.categoriesHeadingThumbnail}>
              <AllCategoriesText
                sxProps={allCategoriesSubHeadingText}
                text={t("posts.thumbnail")}
              />
            </div>
            <div className={classes.categoriesHeadingName}>
              <AllCategoriesText
                sxProps={allCategoriesSubHeadingText}
                text={t("categories.name")}
              />
            </div>
            <div className={classes.categoriesHeadingDescription}>
              <AllCategoriesText
                sxProps={allCategoriesSubHeadingText}
                text={t("posts.description")}
              />
            </div>
            <div className={classes.categoriesHeadingSlug}>
              <AllCategoriesText
                sxProps={allCategoriesSubHeadingText}
                text={t("posts.slug")}
              />
            </div>
            <div className={classes.categoriesHeadingDate}>
              <AllCategoriesText
                sxProps={allCategoriesSubHeadingText}
                text={t("posts.date")}
              />
            </div>
            <div className={classes.categoriesHeadingAction}>
              <AllCategoriesText
                sxProps={allCategoriesSubHeadingText}
                text={t("posts.option")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.categoriesItemContainer}>
        {categoriesState?.length < 1 ? (
          <EmptyData text={t("categories.noCategories")} />
        ) : (
          false
        )}
        {categoriesState?.map((el: CategoriesElements) => {
          return (
            <Categories
              key={el.id}
              date={el.date}
              id={el.id}
              description={el.description}
              name={el.name}
              slug={el.slug}
              thumbnail={el.thumbnail}
              deleteCategory={() => deleteCategoryItem(el.id)}
            />
          );
        })}
      </div>
      <div className={classes.pagination}>
        <DataPagination
          changePage={changeCategoriesPage}
          page={fullCategoriesPage}
          count={pageNumbers}
        />
      </div>
    </div>
  );
};

export default AllCategories;
