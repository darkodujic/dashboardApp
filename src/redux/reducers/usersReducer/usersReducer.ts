import { AllUsersValues } from "../../../utils/interfaceTypes";
import {
  FETCH_FILTERINGUSERS_ERROR,
  FETCH_FILTERINGUSERS_REQUEST,
  FETCH_FILTERINGUSERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  USER_ADD_ERROR,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_CHANGE_ERROR,
  USER_CHANGE_REQUEST,
  USER_CHANGE_SUCCESS,
  USER_DELETE_ERROR,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_FILTERSTATUS_ERROR,
  USER_FILTERSTATUS_REQUEST,
  USER_FILTERSTATUS_SUCCESS,
  USER_PAGINATION_ERROR,
  USER_PAGINATION_REQUEST,
  USER_PAGINATION_SUCCESS,
  USER_ROLE_ERROR,
  USER_ROLE_REQUEST,
  USER_ROLE_SUCCESS,
  USER_SEARCH_ERROR,
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
} from "../../actionTypes/actionTypes";

export type usersStateProps = {
  data: AllUsersValues[];
  loading: boolean;
  error: boolean | string;
};
const usersState: usersStateProps = {
  data: [],
  loading: false,
  error: false,
};
const usersReducer = (
  state = usersState,
  action: { type: string; payload: { data: AllUsersValues[] } }
) => {
  if (action.type === FETCH_USERS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_CHANGE_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_SEARCH_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_FILTERINGUSERS_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_ADD_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_PAGINATION_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_ROLE_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_FILTERSTATUS_REQUEST) {
    return { ...state, loading: false };
  } else if (action.type === FETCH_USERS_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === USER_CHANGE_SUCCESS) {
    return { ...state, loading: false };
  } else if (action.type === FETCH_FILTERINGUSERS_SUCCESS) {
    return { ...state, data: action.payload, loading: false };
  } else if (action.type === USER_DELETE_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === USER_ADD_SUCCESS) {
    return { ...state, data: [...state.data, action.payload], loading: false };
  } else if (action.type === USER_PAGINATION_SUCCESS) {
    return { ...state, data: action.payload, loading: false };
  } else if (action.type === USER_ROLE_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === USER_SEARCH_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === USER_FILTERSTATUS_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === USER_DELETE_SUCCESS) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_USERS_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_DELETE_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_CHANGE_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_SEARCH_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_FILTERSTATUS_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_ROLE_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_PAGINATION_ERROR) {
    return { ...state, error: true };
  } else if (action.type === USER_ADD_ERROR) {
    return { ...state, error: true };
  } else if (action.type === FETCH_FILTERINGUSERS_ERROR) {
    return { ...state, error: true };
  }
  return state;
};

export default usersReducer;
