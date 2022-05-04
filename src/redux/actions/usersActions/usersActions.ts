import {
  AllUsersValues,
  DeleteItemProps,
  RegisterUser,
  UserRoleFilter,
} from "../../../utils/interfaceTypes";
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

export const fetchUsersRequest = (limit: string) => {
  return { type: FETCH_USERS_REQUEST, payload: limit };
};

export const fetchUsersSuccess = (payload: { data: AllUsersValues }) => {
  return { type: FETCH_USERS_SUCCESS, payload };
};

export const fetchUsersError = (error: string | unknown) => {
  return { type: FETCH_USERS_ERROR, error: error };
};

export const userSearchRequest = (searchValue: string) => {
  return { type: USER_SEARCH_REQUEST, payload: searchValue };
};
export const userSearchSuccess = (payload: { data: AllUsersValues }) => {
  return { type: USER_SEARCH_SUCCESS, payload };
};

export const userSearchError = (error: string | unknown) => {
  return { type: USER_SEARCH_ERROR, error: error };
};

export const userPaginationRequest = (page: number) => {
  return { type: USER_PAGINATION_REQUEST, payload: page };
};

export const userPaginationSuccess = (payload: { data: AllUsersValues }) => {
  return { type: USER_PAGINATION_SUCCESS, payload };
};

export const userPaginationError = (error: string | unknown) => {
  return { type: USER_PAGINATION_ERROR, error: error };
};

export const userFilterStatusRequest = (status: string) => {
  return { type: USER_FILTERSTATUS_REQUEST, payload: status };
};

export const userFilterStatusSuccess = (payload: { data: AllUsersValues }) => {
  return { type: USER_FILTERSTATUS_SUCCESS, payload };
};
export const userFilterStatusError = (error: string | unknown) => {
  return { type: USER_FILTERSTATUS_ERROR, error: error };
};

export const userRoleRequest = (role: string) => {
  return { type: USER_ROLE_REQUEST, payload: role };
};

export const userRoleSuccess = (payload: { data: AllUsersValues }) => {
  return { type: USER_ROLE_SUCCESS, payload };
};
export const userRoleError = (error: string | unknown) => {
  return { type: USER_ROLE_ERROR, error: error };
};

export const userAddRequest = (user: RegisterUser) => {
  return { type: USER_ADD_REQUEST, payload: user };
};

export const userAddSuccess = (payload: { data: AllUsersValues }) => {
  return { type: USER_ADD_SUCCESS, payload };
};
export const userAddError = (error: string | unknown) => {
  return { type: USER_ADD_ERROR, error: error };
};

export const fetchFilteringUsersRequest = (
  name: string,
  role: string,
  status: string,
  page: number,
  limit: string
) => {
  return {
    type: FETCH_FILTERINGUSERS_REQUEST,
    payload: { name, role, status, page, limit },
  };
};

export const fetchFilteringUsersSuccess = (payload: {
  data: UserRoleFilter;
}) => {
  return { type: FETCH_FILTERINGUSERS_SUCCESS, payload };
};

export const fetchFilteringUsersError = (error: string | unknown) => {
  return { type: FETCH_FILTERINGUSERS_ERROR, error: error };
};

export const userChangeRequest = (
  id: string | undefined,
  userValue: DeleteItemProps
) => {
  return { type: USER_CHANGE_REQUEST, payload: { id, userValue } };
};

export const userChangeSuccess = () => {
  return { type: USER_CHANGE_SUCCESS };
};

export const userChangeError = (error: string | unknown) => {
  return { type: USER_CHANGE_ERROR, error: error };
};

export const userDeleteRequest = (id: number, userValue: DeleteItemProps) => {
  return { type: USER_DELETE_REQUEST, payload: { id, userValue } };
};

export const userDeleteSuccess = () => {
  return { type: USER_DELETE_SUCCESS };
};

export const userDeleteError = (error: string | unknown) => {
  return { type: USER_DELETE_ERROR, error: error };
};
