import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  addNewPostBtnClose,
  addNewPostCategories,
  addNewPostCategoriesContainer,
  addNewPostCategoriesHeadingText,
  addNewPostContainer,
  addNewPostContainerPaper,
  addNewPostFormProps,
  addNewPostHeading,
  addNewPostSaveBtn,
  addNewPostTextFieldLabelText,
  useStyles,
} from "./AddNewPostStyle";
import {
  Button,
  FormControl,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import ButtonText from "../../components/Login/ButtonLoginText/ButtonLoginText";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { addPostRequest } from "../../redux/actions/postsActions/postsActions";
import { fetchCategoriesRequest } from "../../redux/actions/categoriesActions/categoriesActions";
import { useNavigate } from "react-router";
import { faker } from "@faker-js/faker";
import AddNewPostText from "../../components/DashboardCategories/DashboardCategory/DashboardCategoryText/DashboardCategoryText";
import { getCategoriesData } from "../../redux/selectors";
import { useTranslation } from "react-i18next";
import AddPostsInputs from "../../components/Categories/AddCategoriesInputs/AddCategoriesInputs";
import GlobalTitleText from "../../components/GlobalTitleText/GlobalTitleText";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import "./AddNewPost.css";

const AddNewPost: React.FC = () => {
  const classes = useStyles();
  const [postTitle, setPostTitle] = React.useState("");
  const addNewPostCategoriesState = useSelector(getCategoriesData);
  const [postDescription, setPostDescription] = React.useState("");
  const [postContent, setPostContent] = React.useState("");
  const [postCategoryId, setPostCategoryId] = React.useState(0);
  const getRandomAuthorIds = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const commentIdsNewArray = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 40)
  );
  const uniqueCommentsIdsWithoutDuplicateValues = commentIdsNewArray.filter(
    (val, id, array) => array.indexOf(val) === id
  );
  const { t } = useTranslation();
  const addNewPostState = {
    date: new Date().getTime(),
    title: postTitle,
    description: postDescription,
    authorName: faker.name.findName(),
    img: faker.image.image(),
    content: postContent,
    authorId: getRandomAuthorIds(1, 40),
    categoryIds: postCategoryId,
    commentIds: uniqueCommentsIdsWithoutDuplicateValues,
    status: "Active",
    thumbnail: faker.image.avatar(),
  };
  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostDescription(event.target.value);
  };
  const addPost = () => {
    if (postTitle && postDescription && postContent && postCategoryId) {
      dispatch(addPostRequest(addNewPostState));
      navigate("/posts");
    } else {
      return false;
    }
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCategoryId(Number(event.target.value));
  };
  const handleChangeContent = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPostContent(event.target.value);
  };
  return (
    <div className={classes.addNewPost}>
      <div className={classes.addNewPostCont}>
        <div>
          <GlobalTitleText
            sxProps={addNewPostHeading}
            text={t("posts.addNewPost")}
          />
          <div className={classes.addNewPostBtnCont}>
            <ButtonText
              onClick={() => addPost()}
              btnText={t("posts.save")}
              sxProps={addNewPostSaveBtn}
            />
            <Button
              onClick={() => navigate("/posts")}
              sx={addNewPostBtnClose}
              variant="outlined"
              startIcon={<CloseIcon />}
            >
              {t("posts.close")}
            </Button>
          </div>
        </div>
        <Box sx={addNewPostContainer}>
          <Paper elevation={3}>
            <div className={classes.addNewPostForm}>
              <AddNewPostText
                sxProps={addNewPostTextFieldLabelText}
                text={t("posts.title")}
              />

              <AddPostsInputs
                sxProps={addNewPostFormProps}
                minRows={1.5}
                value={postTitle}
                onChange={handleTitleChange}
                label={t("posts.titleLabel")}
              />
              <AddNewPostText
                sxProps={addNewPostTextFieldLabelText}
                text={t("posts.description")}
              />

              <AddPostsInputs
                sxProps={addNewPostFormProps}
                minRows={4}
                value={postDescription}
                onChange={handleDescriptionChange}
                label={t("posts.descriptionLabel")}
              />
              <AddNewPostText
                sxProps={addNewPostTextFieldLabelText}
                text={t("posts.content")}
              />
              <TextareaAutosize
                className={classes.addNewPostTextArea}
                onChange={handleChangeContent}
                value={postContent}
                minRows={11}
                aria-label={t("posts.contentLabel")}
                placeholder={t("posts.contentLabel")}
              />
            </div>
          </Paper>
        </Box>
        <Box sx={addNewPostCategoriesContainer}>
          <Paper elevation={3} sx={addNewPostContainerPaper}>
            <div className={classes.addNewPostCategoriesHeading}>
              <Typography sx={addNewPostCategoriesHeadingText}>
                {t("posts.categories")}
              </Typography>
              <FormControl sx={addNewPostCategories}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={handleCategoryChange}
                >
                  {addNewPostCategoriesState?.map(
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

export default AddNewPost;
