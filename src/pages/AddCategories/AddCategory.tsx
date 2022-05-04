import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  addNewFormProps,
  addNewCategoryContainer,
  addNewCategoryHeading,
  textFieldLabelText,
  useStyles,
} from "../AddCategories/AddCategoryStyles";
import { Button, Typography } from "@mui/material";
import ButtonText from "../../components/Login/ButtonLoginText/ButtonLoginText";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addCategoryRequest } from "../../redux/actions/categoriesActions/categoriesActions";
import { useNavigate } from "react-router";
import { faker } from "@faker-js/faker";
import AddNewPostText from "../../components/DashboardCategories/DashboardCategory/DashboardCategoryText/DashboardCategoryText";
import {
  addNewCategoriesBtnClose,
  addNewCategoryBtn,
} from "./AddCategoryStyles";
import { useTranslation } from "react-i18next";
import AddCategoriesInputs from "../../components/Categories/AddCategoriesInputs/AddCategoriesInputs";
import {
  colorBlue,
  colorGreen,
  colorPurple,
  colorRed,
} from "../../utils/constants";
const AddCategory: React.FC = () => {
  const classes = useStyles();
  const [categoryTitle, setCategoryTitle] = React.useState("");
  const [categoryDescription, setCategoryDescription] = React.useState("");
  const randomFirstNumberBetween1And9 = Math.floor(Math.random() * 9) + 1;
  const randomSecondNumberBetween1And1000 =
    Math.floor(Math.random() * 1000) + 1;
  const categoryNumberColors = [colorPurple, colorBlue, colorRed, colorGreen];
  const randomColorFromArray =
    categoryNumberColors[(Math.random() * categoryNumberColors.length) | 0];
  const secondNumberOperator =
    randomColorFromArray === colorPurple
      ? "+"
      : randomColorFromArray === colorBlue
      ? "+"
      : randomColorFromArray === colorRed
      ? "-"
      : randomColorFromArray === colorGreen
      ? "+"
      : "-";
  const updatedAddedCategoryValues = {
    date: new Date().getTime(),
    name: categoryTitle,
    description: categoryDescription,
    thumbnail: faker.image.avatar(),
    slug: `/${categoryTitle.toLocaleLowerCase()}`,
    firstNumber: `${randomFirstNumberBetween1And9}.${randomFirstNumberBetween1And9}k`,
    color: randomColorFromArray,
    secondNumber: `${secondNumberOperator}${randomSecondNumberBetween1And1000}`,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryDescription(event.target.value);
  };
  const { t } = useTranslation();
  const addCategory = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (categoryTitle && categoryDescription) {
      dispatch(addCategoryRequest(updatedAddedCategoryValues));
      navigate("/categories");
    } else {
      return false;
    }
  };
  return (
    <div className={classes.addNewCategory}>
      <div className={classes.addNewCategoryCont}>
        <div>
          <Typography sx={addNewCategoryHeading}>
            {t("categories.addNewCategory")}
          </Typography>
          <ButtonText
            onClick={addCategory}
            btnText={t("posts.save")}
            sxProps={addNewCategoryBtn}
          />
          <Button
            sx={addNewCategoriesBtnClose}
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={() => navigate(-1)}
          >
            {t("posts.close")}
          </Button>
        </div>
        <Box sx={addNewCategoryContainer}>
          <Paper elevation={3}>
            <div className={classes.addNewCategoriesForm}>
              <AddNewPostText
                sxProps={textFieldLabelText}
                text={t("posts.name")}
              />
              <AddCategoriesInputs
                sxProps={addNewFormProps}
                label={t("categories.titleLabel")}
                value={categoryTitle}
                onChange={handleTitleChange}
                minRows={2}
              />
              <AddNewPostText
                sxProps={textFieldLabelText}
                text={t("posts.description")}
              />
              <AddCategoriesInputs
                sxProps={addNewFormProps}
                label={t("categories.descriptionLabel")}
                value={categoryDescription}
                onChange={handleDescriptionChange}
                minRows={9}
              />
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default AddCategory;
