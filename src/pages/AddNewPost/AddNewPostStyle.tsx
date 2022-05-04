import { makeStyles } from "@mui/styles";
import {
  editAndAddPost,
  editAndAddPostBtnCont,
  editAndAddPostCategories,
  editAndAddPostCategoriesContainer,
  editAndAddPostCategoriesHeading,
  editAndAddPostCategoriesHeadingText,
  editAndAddPostCategoriesRadioBtn,
  editAndAddPostCloseBtn,
  editAndAddPostCont,
  editAndAddPostForm,
  editAndAddPostFormProps,
  editAndAddPostHeading,
  editAndAddPostNewCont,
  editAndAddPostSaveBtn,
  editAndAddPostsGroup,
  editAndAddPostTextArea,
  editAndAddPostTextFieldLabelText,
  linkNavigation,
  newPostContainer,
} from "../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  addNewPost: editAndAddPost,
  addNewPostCont: editAndAddPostCont,
  newPostBbtnCont: editAndAddPostBtnCont,
  addNewPostCategoriesHeading: editAndAddPostCategoriesHeading,
  linkNavigation: linkNavigation,
  addNewPostBtnCont: {
    marginLeft: 10,
    marginTop: 35,
    "@media (max-width:1340px)": {
      marginLeft: -355,
      marginTop: 40,
    },
    "@media (max-width:1024px)": {
      marginLeft: -310,
    },
    "@media (max-width:769px)": {
      marginTop: 180,
      position: "relative",
      top: -140,
      left: -75,
    },
    "@media (max-width:570px)": {
      top: 50,
      marginTop: 40,
      left: -113,
    },

    "@media (max-width:400px)": {
      left: -110,
    },
  },
  addNewPostForm: editAndAddPostForm,

  addNewPostTextArea: editAndAddPostTextArea,
}));

export const addNewPostFormProps = editAndAddPostFormProps;
export const addNewPostContainerPaper = newPostContainer;
export const addNewPostTextFieldLabelText = editAndAddPostTextFieldLabelText;
export const addNewPostCategories = editAndAddPostCategories;

export const addNewPostCategoriesRadioBtn = editAndAddPostCategoriesRadioBtn;

export const addNewPostContainer = editAndAddPostNewCont;
export const addNewPostCategoriesHeadingText =
  editAndAddPostCategoriesHeadingText;

export const addNewPostSaveBtn = editAndAddPostSaveBtn;
export const addNewPostBtnClose = editAndAddPostCloseBtn;
export const addNewPostHeading = editAndAddPostHeading;
export const addNewPostCategoriesContainer = editAndAddPostCategoriesContainer;
export const addNewPostsGroup = editAndAddPostsGroup;
export { useStyles };
