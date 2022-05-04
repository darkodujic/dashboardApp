import { ClassNameMap, SelectChangeEvent, SxProps, Theme } from "@mui/material";
import { FormikErrors } from "formik";
import { TFunction, TFunctionResult } from "i18next";
import { ChangeEvent, MouseEventHandler } from "react";

export interface AllPostsCompProps {
  thumbnail: string;
  title: string;
  authorAvatar: string;
  author: string;
  categories: string | string[];
  comments: number;
  status: string;
  date: number;
  deleteItem: () => void;
  colorProps?: string;
  id: number;
  active: boolean;
}

export interface InfoCardsDashboardProps {
  dashboardInfoCardsMainIcon: string;
  dashboardInfoCardsTotalVisits: string;
  dashboardInfoCardsTotalText: string;
  dashboardInfoCardsGrowthIcon: string;
  dashboardInfoCardsGrowthPercentage: string;
  dashboardInfoCardsProps: SxProps;
  classNameInfo: string;
}

export interface ErrorButtonProps {
  locationFunc: () => void;
  buttonText: string;
}

export interface CategoriesEditProps {
  id: number;
  img: string;
  title: string;
  thumbnail: string;
  authorName: string;
  commentIds: string[] | number[];
  status: string;
  date: number;
  active: string;
  colorProps: string;
  key: number;
  posts?: number;
  slug: string;
  name: string;
  description: string;
  firstNumber: string | number;
  secondNumber: string | number;
  color: string;
}

export interface DataPaginationProps {
  changePage: (page: number) => void;
  page: number;
  count: number;
}

export interface ProtectiveRoutesProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserEditProps {
  id: number;
  name: string;
  email: string;
  username: string;
  status: string;
  role: string;
  registeredAt: number;
  deleteItem: () => void;
  thumbnail: string;
  date: number;
  colorProps: string;
}
export interface PostsEditProps {
  id: number;
  img: string;
  title: string;
  thumbnail: string;
  authorName: string;
  commentIds: string[] | number[];
  status: string;
  date: number;
  active: string;
  colorProps: string;
  el: { key: number; id: number; name: string };
  key: number;
  posts?: number;
  slug: string;
  name: string;
  description: string;
  firstNumber: string | number;
  secondNumber: string | number;
  color: string;
  categoryIds: number;
}

export interface CategorySearchFilter {
  searchValue: string;
  limit: string;
  page: number;
}

export interface UserRequestProps {
  name: string;
  role: string;
  status: string;
  page: number;
  limit: string;
}

export interface CategoryFilteringRequest {
  name: string;
  page: number;
  limit: string;
}

export interface UserFilterRoleRequest {
  role: string;
}

export interface PostRequestProps {
  title: string;
  categoryIds: string;
  status: string;
  page: number;
  limit: string;
}

export interface AllCategoriesProps {
  id: number;
  posts?: number;
  thumbnail: string;
  name: string;
  description: string;
  slug: string;
  date: number;
  firstNumber?: string;
  secondNumber?: string;
  color?: string;
  title?: string;
  status?: string;
  deleteCategory: () => void;
}

export interface DashboardPostProps {
  postTitle: string;
  postAvatarImg: string;
  postAuthorName: string;
  postStatus: string;
  postDate: number;
  postId: number;
  postDeleteItem: () => void;
  postColorProps: string;
  postThumbnailImg: string;
}
export interface DashboardCategoriesProps {
  name: string;
  description: string;
  firstNumber: number | string;
  secondNumber: number | string;
  color: string;
}
export interface CategoriesTextProps {
  sxProps?: SxProps<Theme> | undefined;
  text: string | undefined;
}

export interface AddCategoriesInputProps {
  sxProps: SxProps<Theme> | undefined;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minRows: number;
}
export interface DashboardCategoryTextProps {
  text: string | number | TFunctionResult;
  sxProps: SxProps<Theme> | undefined;
}

export interface NewCustomersValues {
  visitors: number;
}
export interface DashboardPostData {
  id: number;
  title: string;
  thumbnail: string;
  authorName: string;
  status: string;
  date: number;
  img: string;
}

export interface DashboardPostsHeadingTextProps {
  text: string;
}

export interface EditPostProps {
  status?: string;
  valueTitle?: string;
  onTitle: (event: SelectChangeEvent) => void;
  error: boolean | undefined;
  changeStatus: (event: SelectChangeEvent) => void;
  helperText:
    | string
    | false
    | FormikErrors<string>
    | string[]
    | FormikErrors<string>[]
    | undefined;
  name: string;
  onChange: (e: ChangeEvent) => void;
  showInputs?: boolean;
  description?: string;
  changeDescription?: () => void;
  nameDescription?: string;
}

export interface InfoCardsProps {
  icon: string;
  number: string;
  totalText: string;
  icon2: string;
  percNumber: string;
  sxProps: SxProps;
}

export interface ButtonProps {
  btnText: string;
  sxProps: SxProps<Theme> | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface InputTypeProps {
  sxProps: SxProps<Theme> | undefined;
  labelName: string;
  type?: string;
  labelInsideText: string;
  id?: string;
  value: string;
  onChange: (e: string | ChangeEvent) => void;
  name: string;
  error: boolean | undefined;
  helperText: string | false | undefined;
}

export interface RegisterHeadingProps {
  headerText: string;
  spanText: string;
}
export interface NewCustomersProps {
  visitors: number;
}
export interface SelectCompProps {
  selectValue: string[];
  role: string;
  label: string;
  onChange: (event: SelectChangeEvent) => void;
  value: string;
}

export interface FetchDataProps {
  payload: string;
  limit: string;
  type: string;
}
export interface EditPostsProps {
  payload: { id: number; postsValue: PostValueProps };
  type: string;
}
export interface PostValueProps {
  description: string;
  content: string;
  categoryIds: number;
  title: string;
  date: Date;
}

export interface PostsDataProps {
  payload: {
    title: string;
    categoryIds: string;
    status: string;
    page: number;
    limit: string;
  };
  type: string;
}

export interface FilteredPostsProps {
  title: string;
  categoryIds: string;
  status: string;
  page: number;
  limit: string;
}
export interface CategoryDeleteProps {
  payload: { id: number };
  type: string;
}

export interface CategoryChangeDataProps {
  payload: { id: number; categoryValue: string };
  type: string;
}

export interface UserChangeStatusProps {
  payload: { id: number; userValue: string };
  type: string;
}

export interface DeleteUserProps {
  payload: { id: number; userValue: string };
  type: string;
}

export interface FetchCategoriesFilterProps {
  payload: number;
  id: number;
  type: string;
}

export interface UserRoleFilter {
  payload: {
    name: string;
    role: string;
    status: string;
    page: number;
    limit: string;
  };
  type: string;
}

export interface FetchingStatusFilter {
  payload: string;
  status: string;
  type: string;
}

export interface AddCategoryAllProps {
  payload: string;
  category: string;
  type: string;
}
export interface FetchAddPostProps {
  payload: string;
  post: string;
  type: string;
}

export interface FetchAddUserProps {
  payload: string;
  user: string;
  type: string;
}

export interface FetchPaginationProps {
  payload: number;
  page: number;
  type: string;
}

export interface FetchUsersSearch {
  type: string;
  payload: { searchValue: string };
}

export interface FetchSearchProps {
  searchValue: string;
}

export interface FetchSearchedData {
  payload: { searchValue: string; limit: string; page: number };
  type: string;
}
export interface SideHeaderProps {
  sidebar: boolean;
  logo: string;
}

export interface AddCategoryProps {
  id?: number;
  thumbnail: string;
  name: string;
  description: string;
  slug: string;
  date: number;
}

export interface SidebarLinkProps {
  classes: ClassNameMap;
  sidebar: boolean;
  dashboardLocation: string;
  translate: TFunction;
  path: string;
  img: string;
}

export interface AddPostProps {
  date: number;
  title: string;
  description: string;
  content: string;
  authorId: number;
  categoryIds: number;
  commentIds: number[];
  status: string;
  thumbnail: string;
  authorName: string;
  img: string;
}
export interface AllPostsCompProps {
  thumbnail: string;
  title: string;
  authorAvatar: string;
  author: string;
  categories: string | string[];
  comments: number;
  status: string;
  date: number;
  deleteItem: () => void;
  colorProps?: string;
  id: number;
  active: boolean;
}

export interface FooterClassProps {
  className?: string;
}
export interface AllUsersValues {
  id: number;
  name: string;
  email: string;
  username: string;
  status: string;
  role: string;
  registeredAt: number;
  deleteItem: () => void;
  thumbnail: string;
  colorProps: string;
}

export interface CategoryValueProps {
  name: string;
  description: string;
  date: number;
}

export interface HeadingItemsTextProps {
  sxClass?: SxProps<Theme>;
  text: string | number;
}

export interface MenuItemsProps {
  onClick: () => void;
  text: string;
}

export interface DeleteItemProps {
  status: string;
}
export interface UserValueProps {
  name: string;
  role: string;
  status: string;
  registeredAt: number;
  username: string;
}

export interface CategoriesValueProps {
  payload: { name: string; page: number; limit: string };
  type: string;
}
export interface CategoriesState {
  id: number;
  posts: number;
  thumbnail: string;
  name: string;
  description: string;
  slug: string;
  date: number;
  firstNumber: string;
  secondNumber: string;
  color: string;
  title: string;
  status: string;
}
export interface MenuItemProps {
  value: string;
  text: string;
}

export interface UsersElementsProps {
  id: number;
  name: string;
  email: string;
  username: string;
  status: string;
  role: string;
  registeredAt: number;
  deleteItem: () => void;
  thumbnail: string;
  date: number;
  colorProps: string;
}
export interface EmptyDataProps {
  text: string;
}
export interface FullPostsElements {
  id: number;
  img: string;
  title: string;
  thumbnail: string;
  authorName: string;
  commentIds: number[] | string[];
  status: string;
  date: number;
  active: string;
  categoryIds: number;
}
export interface IsLoggedProps {
  setIsLogged?: React.Dispatch<React.SetStateAction<boolean>>;
  isProtected: boolean | undefined;
}

export interface CategoriesFilter {}

export interface CategoriesElements {
  color?: string;
  date: number;
  description: string;
  firstNumber: string | number;
  id: number;
  name: string;
  posts?: number;
  secondNumber: string | number;
  slug: string;
  thumbnail: string;
}

export interface PostItemProps {
  id: number;
  title: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  team: string;
  username: string;
  status: string;
  role: string;
  registeredAt: number;
  thumbnail: string;
}
