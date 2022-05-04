import {
  AddPostProps,
  AllPostsCompProps,
  FetchDataProps,
  PostValueProps,
} from "../../../utils/interfaceTypes";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTSEARCH_REQUEST,
  FETCH_POSTSEARCH_SUCCESS,
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
  FETCH_ALLPOSTS_SUCCESS,
  FETCH_ALLPOSTS_ERROR,
  FETCH_ALLPOSTS_REQUEST,
  FETCH_EDITPOSTS_REQUEST,
  FETCH_EDITPOSTS_SUCCESS,
  FETCH_EDITPOSTS_ERROR,
  FETCH_POSTSEARCH_ERROR,
} from "../../actionTypes/actionTypes";
export const fetchPostRequest = (limit: string) => {
  return { type: FETCH_POSTS_REQUEST, payload: limit };
};
export const fetchPostSuccess = (payload: { data: AllPostsCompProps }) => {
  return { type: FETCH_POSTS_SUCCESS, payload };
};
export const fetchPostError = (error: string) => {
  return { type: FETCH_POSTS_ERROR, error: error };
};

export const fetchAllPostsRequest = () => {
  return { type: FETCH_ALLPOSTS_REQUEST };
};

export const fetchAllPostsSuccess = (payload: { data: AllPostsCompProps }) => {
  return { type: FETCH_ALLPOSTS_SUCCESS, payload };
};

export const fetchAllPostsError = (error: string) => {
  return { type: FETCH_ALLPOSTS_ERROR, error: error };
};

export const fetchPostSearchRequest = (searchValue: string) => {
  return { type: FETCH_POSTSEARCH_REQUEST, payload: searchValue };
};

export const fetchPostSearchSuccess = (payload: {
  data: AllPostsCompProps;
}) => {
  return { type: FETCH_POSTSEARCH_SUCCESS, payload };
};
//
export const fetchPostPaginationRequest = (page: number) => {
  return { type: FETCH_POSTPAGINATION_REQUEST, payload: page };
};
export const fetchPostPaginationSuccess = (payload: {
  data: AllPostsCompProps;
}) => {
  return { type: FETCH_POSTPAGINATION_SUCCESS, payload };
};

export const fetchPostPaginationError = (error: string | unknown) => {
  return { type: FETCH_POSTPAGINATION_ERROR, error: error };
};

export const fetchPostSearchError = (error: string | unknown) => {
  return { type: FETCH_POSTSEARCH_ERROR, error: error };
};

export const fetchPostStatusFilterRequest = (status: string) => {
  return { type: FETCH_POSTSTATUSFILTER_REQUEST, payload: status };
};

export const fetchPostStatusFilterSuccess = (payload: {
  data: AllPostsCompProps;
}) => {
  return { type: FETCH_POSTSTATUSFILTER_SUCCESS, payload };
};

export const fetchPostStatusFilterError = (error: string | unknown) => {
  return { type: FETCH_POSTSTATUSFILTER_ERROR, error: error };
};

export const fetchFilteringPostsRequest = (
  title: string,
  categoryIds: string,
  status: string,
  page: number,
  limit: string
) => {
  return {
    type: FETCH_FILTERINGPOSTS_REQUEST,
    payload: { title, categoryIds, status, page, limit },
  };
};

export const fetchFilteringPostsSuccess = (payload: {
  data: FetchDataProps;
}) => {
  return { type: FETCH_FILTERINGPOSTS_SUCCESS, payload };
};

export const fetchFilteringPostsError = (error: string | unknown) => {
  return { type: FETCH_FILTERINGPOSTS_ERROR, error: error };
};

export const addPostRequest = (post: AddPostProps) => {
  return { type: ADD_POST_REQUEST, payload: post };
};

export const addPostSuccess = (payload: { data: AllPostsCompProps }) => {
  return { type: ADD_POST_SUCCESS, payload };
};

export const addPostError = (error: string | unknown) => {
  return { type: ADD_POST_ERROR, error };
};

export const fetchEditPostsRequest = (
  id: string | undefined,
  postsValue: PostValueProps
) => {
  return { type: FETCH_EDITPOSTS_REQUEST, payload: { id, postsValue } };
};
export const fetchEditPostsSuccess = () => {
  return { type: FETCH_EDITPOSTS_SUCCESS };
};

export const fetchEditPostsError = (error: string | unknown) => {
  return { type: FETCH_EDITPOSTS_ERROR, error: error };
};
