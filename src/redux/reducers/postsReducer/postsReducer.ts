import { AllPostsCompProps } from "../../../utils/interfaceTypes";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTSEARCH_REQUEST,
  FETCH_POSTSEARCH_SUCCESS,
  FETCH_POSTSEARCH_ERROR,
  FETCH_FILTERCATEGORIES_REQUEST,
  FETCH_FILTERCATEGORIES_SUCCESS,
  FETCH_FILTERCATEGORIES_ERROR,
  FETCH_POSTSTATUSFILTER_REQUEST,
  FETCH_POSTSTATUSFILTER_SUCCESS,
  FETCH_POSTSTATUSFILTER_ERROR,
  FETCH_POSTPAGINATION_REQUEST,
  FETCH_POSTPAGINATION_SUCCESS,
  FETCH_POSTPAGINATION_ERROR,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  FETCH_FILTERINGPOSTS_REQUEST,
  FETCH_FILTERINGPOSTS_SUCCESS,
  FETCH_FILTERINGPOSTS_ERROR,
  FETCH_ALLPOSTS_REQUEST,
  FETCH_ALLPOSTS_SUCCESS,
  FETCH_ALLPOSTS_ERROR,
  FETCH_EDITPOSTS_REQUEST,
  FETCH_EDITPOSTS_SUCCESS,
  FETCH_EDITPOSTS_ERROR,
} from "../../actionTypes/actionTypes";

type stateType = {
  data: AllPostsCompProps[];
  loading: boolean;
  error: boolean | string;
};

const initialState: stateType = {
  data: [],
  loading: false,
  error: false,
};

const todoReducer = (
  state = initialState,
  action: { type: string; payload: { data: AllPostsCompProps[] } }
) => {
  if (action.type === FETCH_POSTS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_ALLPOSTS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_EDITPOSTS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_POSTSTATUSFILTER_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === ADD_POST_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_POSTSEARCH_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_POSTPAGINATION_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_FILTERCATEGORIES_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_FILTERINGPOSTS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_POSTS_SUCCESS)
    return { ...state, loading: false, data: action.payload };
  else if (action.type === FETCH_POSTSEARCH_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === ADD_POST_SUCCESS) {
    return {
      ...state,
      data: [...state.data, action.payload],
      loading: false,
    };
  } else if (action.type === FETCH_POSTPAGINATION_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_ALLPOSTS_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_EDITPOSTS_SUCCESS) {
    return { ...state, loading: false };
  } else if (action.type === FETCH_POSTSTATUSFILTER_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_FILTERINGPOSTS_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_FILTERCATEGORIES_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_POSTS_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_POSTPAGINATION_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_POSTSTATUSFILTER_ERROR) {
    return { ...state, error: true };
  } else if (action.type === ADD_POST_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_POSTSEARCH_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_FILTERCATEGORIES_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_FILTERINGPOSTS_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_ALLPOSTS_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_EDITPOSTS_ERROR) {
    return { ...state, loading: false };
  }
  return state;
};

export default todoReducer;
