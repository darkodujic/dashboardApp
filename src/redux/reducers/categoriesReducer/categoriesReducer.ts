import { CategoriesState } from "../../../utils/interfaceTypes";
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
  FETCH_FILTERINGCATEGORIES_ERROR,
  FETCH_FILTERINGCATEGORIES_REQUEST,
  FETCH_FILTERINGCATEGORIES_SUCCESS,
  PAGINATION_CATEGORIES_ERROR,
  PAGINATION_CATEGORIES_REQUEST,
  PAGINATION_CATEGORIES_SUCCESS,
  USER_FILTERSTATUS_ERROR,
  USER_FILTERSTATUS_REQUEST,
  USER_FILTERSTATUS_SUCCESS,
} from "../../actionTypes/actionTypes";

type categoriesState = {
  data: CategoriesState[];
  loading: boolean;
  error: boolean | string;
};
const categoryState: categoriesState = {
  data: [],
  loading: false,
  error: false,
};
const categoriesReducer = (
  state = categoryState,
  action: { type: string; payload: { data: CategoriesState[] } }
) => {
  if (action.type === FETCH_CATEGORIES_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === CATEGORY_CHANGE_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_FILTERINGCATEGORIES_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === CATEGORY_SEARCH_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === PAGINATION_CATEGORIES_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === ADD_CATEGORY_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === CATEGORY_DELETE_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_FILTERSTATUS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_CATEGORIES_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_FILTERINGCATEGORIES_SUCCESS) {
    return { ...state, data: action.payload, loading: false };
  } else if (action.type === ADD_CATEGORY_SUCCESS) {
    return { ...state, data: [...state.data, action.payload], loading: false };
  } else if (action.type === CATEGORY_SEARCH_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === USER_FILTERSTATUS_SUCCESS) {
    return { ...state, data: action.payload, loading: false };
  } else if (action.type === CATEGORY_CHANGE_SUCCESS) {
    return { ...state, loading: false };
  } else if (action.type === PAGINATION_CATEGORIES_SUCCESS) {
    return { ...state, data: action.payload, loading: false };
  } else if (action.type === CATEGORY_DELETE_SUCCESS) {
    return { ...state, loading: false };
  } else if (action.type === FETCH_CATEGORIES_ERROR) {
  } else if (action.type === CATEGORY_CHANGE_ERROR) {
    return { ...state, error: true };
  } else if (action.type === ADD_CATEGORY_ERROR) {
    return { ...state, error: true };
  } else if (action.type === CATEGORY_SEARCH_ERROR) {
    return { ...state, error: true };
  } else if (action.type === CATEGORY_DELETE_ERROR) {
    return { ...state, error: false };
  } else if (action.type === PAGINATION_CATEGORIES_ERROR) {
    return { ...state, error: false };
  } else if (action.type === USER_FILTERSTATUS_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_FILTERINGCATEGORIES_ERROR) {
    return { ...state, error: true };
  }
  return state;
};

export default categoriesReducer;
