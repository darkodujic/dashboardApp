import { RootState } from ".";
import { createSelector } from "reselect";
import {
  CategoriesEditProps,
  PostsEditProps,
  UserEditProps,
} from "../utils/interfaceTypes";
const categoriesSelector = (state: RootState) => state?.categories;

export const getCategoriesData = createSelector(
  categoriesSelector,
  (state: { data: { data: CategoriesEditProps[] } }) => state?.data?.data
);

const postsSelector = (state: RootState) => state?.todo;

export const getPostsData = createSelector(
  postsSelector,
  (state: { data: { data: PostsEditProps[] } }) => state?.data?.data
);

const usersSelector = (state: RootState) => state?.users;

export const getUsersData = createSelector(
  usersSelector,
  (state: { data: { data: UserEditProps[] } }) => state?.data?.data
);
