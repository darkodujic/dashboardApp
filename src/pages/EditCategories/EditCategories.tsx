import * as React from "react";
import { Paper, Typography } from "@mui/material";
import ButtonText from "../../components/Login/ButtonLoginText/ButtonLoginText";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { categoryChangeRequest } from "../../redux/actions/categoriesActions/categoriesActions";
import {
  categoriesEditBtn,
  categoriesNameDescription,
  categoriesNameText,
  editCategoryHeadingTitle,
  editPostInputContainer,
  useStyles,
} from "./EditCategoriesStyles";
import { CategoryValueProps } from "../../utils/interfaceTypes";
import EditCategoriesInputs from "../../components/Categories/AddCategoriesInputs/AddCategoriesInputs";
import { categories, editHandleChange } from "../../utils/constants";
const EditCategories: React.FC = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [editCategoryDescription, setEditCategoryDescription] =
    React.useState("");
  const [editCategryTitle, setEditCategoryTitle] = React.useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryValue: CategoryValueProps = {
    name: editCategryTitle,
    description: editCategoryDescription,
    date: new Date().getTime(),
  };
  const submitEditedCategory = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (editCategryTitle && editCategoryDescription) {
      navigate(categories);
      dispatch(categoryChangeRequest(id, categoryValue));
    } else {
      return null;
    }
  };
  return (
    <div className={classes.categoryEdit}>
      <div className={classes.categoryEditCont}>
        <div className={classes.categoryEditHeading}>
          <Typography sx={editCategoryHeadingTitle}>
            {t("categories.editCategory")}
          </Typography>
        </div>
        <Paper sx={editPostInputContainer}>
          <form className={classes.editForm} onSubmit={submitEditedCategory}>
            <EditCategoriesInputs
              sxProps={categoriesNameText}
              minRows={1.5}
              onChange={(e) => editHandleChange(e, setEditCategoryTitle)}
              value={editCategryTitle}
              label={t("categories.name")}
            />
            <EditCategoriesInputs
              sxProps={categoriesNameDescription}
              minRows={4}
              onChange={(e) => editHandleChange(e, setEditCategoryDescription)}
              value={editCategoryDescription}
              label={t("posts.description")}
            />
            <ButtonText
              btnText={t("categories.update")}
              sxProps={categoriesEditBtn}
            />
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default EditCategories;
