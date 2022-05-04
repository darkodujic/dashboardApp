import * as React from "react";
import {
  useStyles,
  editPostHeading,
  editPostBtnClose,
  editPostSaveBtn,
  editNewPostCont,
  editPostCategoriesContainer,
  editPostCategories,
  editPostCategoriesHeadingText,
  editNewPostTextFieldLabelText,
  editNewPostFormProps,
  editPostContainer,
} from "../EditPosts/EditPostsStyles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import ButtonText from "../../../components/Login/ButtonLoginText/ButtonLoginText";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import AddNewPostText from "../../../components/Categories/CategoriesText";
import AddPostsInputs from "../../../components/Categories/AddCategoriesInputs/AddCategoriesInputs";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import GlobalTitleText from "../../../components/GlobalTitleText/GlobalTitleText";
import { getCategoriesData } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesRequest } from "../../../redux/actions/categoriesActions/categoriesActions";
import { useEffect } from "react";
import { fetchEditPostsRequest } from "../../../redux/actions/postsActions/postsActions";
import { editHandleChange } from "../../../utils/constants";
const EditPosts: React.FC = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const editPostCategoriesState = useSelector(getCategoriesData);
  const [postCategoryId, setPostCategoryId] = React.useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    window.scrollTo(0, 0);
  }, []);
  const postsValue = {
    description: description,
    content: content,
    categoryIds: postCategoryId,
    title: title,
    date: new Date(),
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title && description && content) {
      dispatch(fetchEditPostsRequest(id, postsValue));
      navigate(-1);
    } else {
      return false;
    }
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCategoryId(Number(event.target.value));
  };
  return (
    <div className={classes.editPost}>
      <div className={classes.editPostCont}>
        <div>
          <GlobalTitleText
            sxProps={editPostHeading}
            text={t("posts.editPost")}
          />
          <div className={classes.editPostBtnCont}>
            <ButtonText
              btnText={t("posts.save")}
              onClick={handleSubmit}
              sxProps={editPostSaveBtn}
            />
            <Button
              onClick={() => navigate(-1)}
              sx={editPostBtnClose}
              variant="outlined"
              startIcon={<CloseIcon />}
            >
              {t("posts.close")}
            </Button>
          </div>
        </div>
        <Box sx={editNewPostCont}>
          <Paper elevation={3}>
            <div className={classes.editNewPostForm}>
              <AddNewPostText
                sxProps={editNewPostTextFieldLabelText}
                text={t("posts.title")}
              />
              <AddPostsInputs
                sxProps={editNewPostFormProps}
                minRows={1.5}
                value={title}
                onChange={(e) => editHandleChange(e, setTitle)}
                label={t("posts.titleLabel")}
              />
              <AddNewPostText
                sxProps={editNewPostTextFieldLabelText}
                text={t("posts.description")}
              />
              <AddPostsInputs
                sxProps={editNewPostFormProps}
                minRows={4}
                label={t("posts.descriptionLabel")}
                value={description}
                onChange={(e) => editHandleChange(e, setDescription)}
              />
              <AddNewPostText
                sxProps={editNewPostTextFieldLabelText}
                text={t("posts.content")}
              />
              <TextareaAutosize
                className={classes.editPostTextArea}
                minRows={21}
                aria-label={t("posts.contentLabel")}
                placeholder={t("posts.contentLabel")}
                value={content}
                onChange={(e) => editHandleChange(e, setContent)}
              />
            </div>
          </Paper>
        </Box>
        <Box sx={editPostCategoriesContainer}>
          <Paper elevation={3} sx={editPostContainer}>
            <div className={classes.editPostCategoriesHeading}>
              <Typography sx={editPostCategoriesHeadingText}>
                {t("posts.categories")}
              </Typography>
              <FormControl sx={editPostCategories}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={handleCategoryChange}
                >
                  {editPostCategoriesState?.map(
                    (el: { name: string; id: number }) => {
                      return (
                        <FormControlLabel
                          key={el.id}
                          value={el.id}
                          control={
                            <Radio
                              icon={<CheckBoxOutlineBlankOutlinedIcon />}
                              checkedIcon={<CheckBoxIcon color="primary" />}
                            />
                          }
                          label={el.name}
                        />
                      );
                    }
                  )}
                </RadioGroup>
              </FormControl>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default EditPosts;
