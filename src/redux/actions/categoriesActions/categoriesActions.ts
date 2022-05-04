import {
  AddCategoryProps,
  CategoriesState,
  CategoryValueProps,
} from "../../../utils/interfaceTypes";
import {
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  CATEGORY_CHANGE_ERROR,
  CATEGORY_CHANGE_REQUEST,
  CATEGORY_CHANGE_SUCCESS,
  CATEGORY_DELETE_ERROR,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_SEARCH_ERROR,
  CATEGORY_SEARCH_REQUEST,
  CATEGORY_SEARCH_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_FILTERCATEGORIES_ERROR,
  FETCH_FILTERCATEGORIES_REQUEST,
  FETCH_FILTERCATEGORIES_SUCCESS,
  FETCH_FILTERINGCATEGORIES_ERROR,
  FETCH_FILTERINGCATEGORIES_REQUEST,
  FETCH_FILTERINGCATEGORIES_SUCCESS,
  PAGINATION_CATEGORIES_ERROR,
  PAGINATION_CATEGORIES_REQUEST,
  PAGINATION_CATEGORIES_SUCCESS,
} from "../../actionTypes/actionTypes";

export const categorySearchRequest = (
  searchValue: string,
  apiLimit: string,
  page: number
) => {
  return {
    type: CATEGORY_SEARCH_REQUEST,
    payload: searchValue,
    apiLimit,
    page,
  };
};
export const categorySearchSuccess = (payload: { data: CategoriesState }) => {
  return { type: CATEGORY_SEARCH_SUCCESS, payload };
};
export const categorySearchError = (error: string | unknown) => {
  return { type: CATEGORY_SEARCH_ERROR, error: error };
};

export const fetchFilteringCategoriesRequest = (
  name: string,
  page: number,
  limit: string
) => {
  return {
    type: FETCH_FILTERINGCATEGORIES_REQUEST,
    payload: { name, page, limit },
  };
};

export const fetchFilteringCategoriesSuccess = (payload: {
  data: CategoriesState;
}) => {
  return { type: FETCH_FILTERINGCATEGORIES_SUCCESS, payload };
};

export const fetchFilteringCategoriesError = (error: string | unknown) => {
  return { type: FETCH_FILTERINGCATEGORIES_ERROR, error: error };
};

export const paginationCategoriesRequest = (page: number) => {
  return { type: PAGINATION_CATEGORIES_REQUEST, payload: page };
};

export const paginationCategoriesSuccess = (payload: {
  data: CategoriesState;
}) => {
  return { type: PAGINATION_CATEGORIES_SUCCESS, payload };
};
export const paginationCategoriesError = (error: string | unknown) => {
  return { type: PAGINATION_CATEGORIES_ERROR, error: error };
};

export const fetchFilterCategoriesRequest = (id: number) => {
  return { type: FETCH_FILTERCATEGORIES_REQUEST, payload: id };
};

export const fetchFilterCategoriesSuccess = (payload: {
  data: CategoriesState;
}) => {
  return { type: FETCH_FILTERCATEGORIES_SUCCESS, payload };
};

export const fetchFilterCategoriesError = (error: string | unknown) => {
  return { type: FETCH_FILTERCATEGORIES_ERROR, error: error };
};

export const fetchCategoriesRequest = () => {
  return { type: FETCH_CATEGORIES_REQUEST };
};

export const fetchCategoriesSuccess = (payload: { data: CategoriesState }) => {
  return { type: FETCH_CATEGORIES_SUCCESS, payload };
};

export const fetchCategoriesError = (error: string | unknown) => {
  return { type: FETCH_CATEGORIES_ERROR, error };
};

export const addCategoryRequest = (category: AddCategoryProps) => {
  return { type: ADD_CATEGORY_REQUEST, payload: category };
};

export const addCategorySuccess = (payload: { data: CategoriesState }) => {
  return { type: ADD_CATEGORY_SUCCESS, payload };
};
export const addCategoryError = (error: string | unknown) => {
  return { type: ADD_CATEGORY_ERROR, error };
};

export const categoryChangeRequest = (
  id: string | undefined,
  categoryValue: CategoryValueProps
) => {
  return { type: CATEGORY_CHANGE_REQUEST, payload: { id, categoryValue } };
};
export const categoryChangeSuccess = () => {
  return { type: CATEGORY_CHANGE_SUCCESS };
};

export const categoryChangeError = (error: string | unknown) => {
  return { type: CATEGORY_CHANGE_ERROR, error: error };
};

export const categoryDeleteRequest = (id: number) => {
  return { type: CATEGORY_DELETE_REQUEST, payload: { id } };
};
export const categoryDeleteSuccess = () => {
  return { type: CATEGORY_DELETE_SUCCESS };
};
export const categoryDeleteError = (error: string | unknown) => {
  return { type: CATEGORY_DELETE_ERROR, error: error };
};
