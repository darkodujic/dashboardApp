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
  editAndAddPostInput,
  editAndAddPostNewCont,
  editAndAddPostSaveBtn,
  editAndAddPostsGroup,
  editAndAddPostTextArea,
  editAndAddPostTextFieldLabelText,
  linkNavigation,
  newPostContainer,
} from "../../../utils/reusableStyles";

const useStyles = makeStyles(() => ({
  editPost: editAndAddPost,
  editPostCont: editAndAddPostCont,
  editPostBtnCont: editAndAddPostBtnCont,
  editPostCategoriesHeading: editAndAddPostCategoriesHeading,
  linkNavigation: linkNavigation,
  editNewPostForm: editAndAddPostForm,
  editPostTextArea: editAndAddPostTextArea,
}));

export const editNewPostFormProps = editAndAddPostFormProps;
export const editNewPostTextFieldLabelText = editAndAddPostTextFieldLabelText;
export const editPostCategories = editAndAddPostCategories;
export const addNewPostCategoriesRadioBtn = editAndAddPostCategoriesRadioBtn;
export const editNewPostCont = editAndAddPostNewCont;
export const editPostCategoriesHeadingText =
  editAndAddPostCategoriesHeadingText;
export const editPostSaveBtn = editAndAddPostSaveBtn;
export const editPostContainer = newPostContainer;
export const editPostBtnClose = editAndAddPostCloseBtn;
export const editPostHeading = editAndAddPostHeading;
export const editPostCategoriesContainer = editAndAddPostCategoriesContainer;
export const addNewPostsGroup = editAndAddPostsGroup;
export const editPostInput = editAndAddPostInput;
export { useStyles };
