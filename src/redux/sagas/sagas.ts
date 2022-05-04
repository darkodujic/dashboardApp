import { AxiosResponse } from "axios";
import {
  addPostError,
  addPostSuccess,
  fetchAllPostsError,
  fetchAllPostsSuccess,
  fetchPostError,
  fetchPostPaginationError,
  fetchPostPaginationSuccess,
  fetchPostSearchError,
  fetchPostSearchSuccess,
  fetchPostStatusFilterError,
  fetchPostStatusFilterSuccess,
  fetchPostSuccess,
  fetchFilteringPostsError,
  fetchFilteringPostsSuccess,
  fetchEditPostsError,
  fetchEditPostsSuccess,
} from "../actions/postsActions/postsActions";
import { all, put, takeEvery } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import {
  addCategoryAsync,
  addPost,
  addUserAsync,
  categoryAll,
  categorySearch,
  changeCategory,
  changeUsers,
  deleteCategory,
  deleteUsers,
  fetchAllPosts,
  fetchCategoriesId,
  fetchCategoryPagination,
  fetchPaginationFilter,
  fetchPostsLimit,
  fetchSearchValue,
  fetchStatusFilter,
  fetchUsersAsync,
  filteringCategoriesData,
  filteringPostsData,
  filteringUsersData,
  postsChange,
  userPaginationFilter,
  userRoleFilterAsync,
  usersSearchAsync,
  usersStatusFilter,
} from "../api/api";
import {
  ADD_CATEGORY_REQUEST,
  ADD_POST_REQUEST,
  CATEGORY_CHANGE_REQUEST,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_SEARCH_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_FILTERCATEGORIES_REQUEST,
  FETCH_POSTPAGINATION_REQUEST,
  FETCH_POSTSEARCH_REQUEST,
  FETCH_POSTSTATUSFILTER_REQUEST,
  FETCH_POSTS_REQUEST,
  FETCH_USERS_REQUEST,
  PAGINATION_CATEGORIES_REQUEST,
  USER_ADD_REQUEST,
  USER_CHANGE_REQUEST,
  USER_DELETE_REQUEST,
  USER_FILTERSTATUS_REQUEST,
  USER_PAGINATION_REQUEST,
  USER_ROLE_REQUEST,
  USER_SEARCH_REQUEST,
  FETCH_FILTERINGPOSTS_REQUEST,
  FETCH_ALLPOSTS_REQUEST,
  FETCH_FILTERINGUSERS_REQUEST,
  FETCH_EDITPOSTS_REQUEST,
  FETCH_FILTERINGCATEGORIES_REQUEST,
} from "../actionTypes/actionTypes";
import {
  AddCategoryAllProps,
  CategoriesValueProps,
  CategoryChangeDataProps,
  CategoryDeleteProps,
  DeleteUserProps,
  EditPostsProps,
  FetchAddPostProps,
  FetchAddUserProps,
  FetchCategoriesFilterProps,
  FetchDataProps,
  FetchingStatusFilter,
  FetchPaginationProps,
  FetchSearchedData,
  FetchUsersSearch,
  PostsDataProps,
  UserChangeStatusProps,
  UserRoleFilter,
} from "../../utils/interfaceTypes";
import {
  addCategoryError,
  addCategorySuccess,
  categoryChangeError,
  categoryChangeSuccess,
  categoryDeleteError,
  categoryDeleteSuccess,
  fetchCategoriesError,
  fetchFilterCategoriesError,
  fetchFilterCategoriesSuccess,
  fetchCategoriesSuccess,
  paginationCategoriesError,
  paginationCategoriesSuccess,
  categorySearchError,
  categorySearchSuccess,
  fetchFilteringCategoriesSuccess,
  fetchFilteringCategoriesError,
} from "../actions/categoriesActions/categoriesActions";
import {
  userAddError,
  userAddSuccess,
  fetchUsersError,
  fetchUsersSuccess,
  fetchFilteringUsersError,
  fetchFilteringUsersSuccess,
  userSearchError,
  userSearchSuccess,
  userChangeError,
  userChangeSuccess,
  userDeleteError,
  userDeleteSuccess,
  userFilterStatusError,
  userFilterStatusSuccess,
  userPaginationError,
  userPaginationSuccess,
  userRoleError,
  userRoleSuccess,
} from "../actions/usersActions/usersActions";
const call = Effects.call;
const fork = Effects.fork;

function* fetchCategoriesRequest() {
  try {
    const response: AxiosResponse = yield call(categoryAll);
    yield put(fetchCategoriesSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchCategoriesError({ error: error }));
  }
}
function* fetchPostRequest({ payload }: FetchDataProps) {
  try {
    const response: AxiosResponse = yield call(fetchPostsLimit, payload);
    yield put(
      fetchPostSuccess({
        data: response.data,
      })
    );
  } catch (error) {
    yield put(fetchPostError((error as Error).message));
  }
}
function* fetchUsersRequest({ payload }: FetchDataProps) {
  try {
    const response: AxiosResponse = yield call(fetchUsersAsync, payload);
    yield put(fetchUsersSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchUsersError((error as Error).message));
  }
}
function* categoryDeleteRequest({ payload: { id } }: CategoryDeleteProps) {
  try {
    const response: AxiosResponse = yield call(deleteCategory, id);
    if (response) {
      yield put(categoryDeleteSuccess());
    }
  } catch (error) {
    yield put(categoryDeleteError({ error: error }));
  }
}

function* categoryChangeRequest({
  payload: { id, categoryValue },
}: CategoryChangeDataProps) {
  try {
    const response: AxiosResponse = yield call(
      changeCategory,
      id,
      categoryValue
    );
    if (response) {
      yield put(categoryChangeSuccess());
    }
  } catch (error) {
    yield put(categoryChangeError((error as Error).message));
  }
}
function* fetchEditPostsRequest({
  payload: { id, postsValue },
}: EditPostsProps) {
  try {
    const response: AxiosResponse = yield call(postsChange, id, postsValue);

    if (response) {
      yield put(fetchEditPostsSuccess());
    }
  } catch (error) {
    yield put(fetchEditPostsError((error as Error).message));
  }
}
function* userChangeRequest({
  payload: { id, userValue },
}: UserChangeStatusProps) {
  try {
    const response: AxiosResponse = yield call(changeUsers, id, userValue);

    if (response) {
      yield put(userChangeSuccess());
    }
  } catch (error) {
    yield put(userChangeError((error as Error).message));
  }
}

function* userDeleteRequest({ payload: { id, userValue } }: DeleteUserProps) {
  try {
    const response: AxiosResponse = yield call(deleteUsers, id, userValue);

    if (response) {
      yield put(userDeleteSuccess());
    }
  } catch (error) {
    yield put(userDeleteError((error as Error).message));
  }
}

function* fetchPostSearchRequest({ payload }: FetchSearchedData) {
  try {
    const response: AxiosResponse = yield call(fetchSearchValue, payload);

    yield put(fetchPostSearchSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchPostSearchError((error as Error).message));
  }
}

function* fetchAllPostsRequest() {
  try {
    const response: AxiosResponse = yield call(fetchAllPosts);
    yield put(fetchAllPostsSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchAllPostsError((error as Error).message));
  }
}

function* fetchAllPostsRequestContainer() {
  yield takeEvery(FETCH_ALLPOSTS_REQUEST, fetchAllPostsRequest);
}

function* userSearchRequest({ payload }: FetchUsersSearch) {
  try {
    const response: AxiosResponse = yield call(usersSearchAsync, payload);

    yield put(userSearchSuccess({ data: response.data }));
  } catch (error) {
    yield put(userSearchError((error as Error).message));
  }
}

function* categorySearchRequest({ payload }: FetchSearchedData) {
  try {
    const response: AxiosResponse = yield call(categorySearch, payload);
    yield put(categorySearchSuccess({ data: response.data }));
  } catch (error) {
    yield put(categorySearchError((error as Error).message));
  }
}

function* fetchFilterCategoriesRequest({
  payload,
}: FetchCategoriesFilterProps) {
  try {
    const response: AxiosResponse = yield call(fetchCategoriesId, payload);
    yield put(fetchFilterCategoriesSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchFilterCategoriesError({ error: error }));
  }
}

function* fetchFilteringPostsRequest({ payload }: PostsDataProps) {
  try {
    const response: AxiosResponse = yield call(filteringPostsData, payload);
    yield put(fetchFilteringPostsSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchFilteringPostsError({ error: error }));
  }
}

function* fetchFilteringUsersRequest({ payload }: UserRoleFilter) {
  try {
    const response: AxiosResponse = yield call(filteringUsersData, payload);
    yield put(fetchFilteringUsersSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchFilteringUsersError({ error: error }));
  }
}

function* fetchFilteringCategoriesRequest({ payload }: CategoriesValueProps) {
  try {
    const response: AxiosResponse = yield call(
      filteringCategoriesData,
      payload
    );
    yield put(fetchFilteringCategoriesSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchFilteringCategoriesError({ error: error }));
  }
}

function* fetchFilteringCategorieContainer() {
  yield takeEvery(
    FETCH_FILTERINGCATEGORIES_REQUEST,
    fetchFilteringCategoriesRequest
  );
}

function* fetchFilteringUsersRequestContainer() {
  yield takeEvery(FETCH_FILTERINGUSERS_REQUEST, fetchFilteringUsersRequest);
}
function* fetchFilteringPostsRequestContainer() {
  yield takeEvery(FETCH_FILTERINGPOSTS_REQUEST, fetchFilteringPostsRequest);
}

function* fetchPostPaginationRequest({ payload }: FetchPaginationProps) {
  try {
    const response: AxiosResponse = yield call(fetchPaginationFilter, payload);
    yield put(fetchPostPaginationSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchPostPaginationError({ error: error }));
  }
}

function* userPaginationRequest({ payload }: FetchPaginationProps) {
  try {
    const response: AxiosResponse = yield call(userPaginationFilter, payload);

    yield put(userPaginationSuccess({ data: response.data }));
  } catch (error) {
    yield put(userPaginationError({ error: error }));
  }
}

function* paginationCategoriesRequest({ payload }: FetchPaginationProps) {
  try {
    const response: AxiosResponse = yield call(
      fetchCategoryPagination,
      payload
    );
    yield put(paginationCategoriesSuccess({ data: response.data }));
  } catch (error) {
    yield put(paginationCategoriesError({ error: error }));
  }
}

function* addPostRequest({ payload }: FetchAddPostProps) {
  try {
    const response: AxiosResponse = yield call(addPost, payload);
    yield put(addPostSuccess(response));
  } catch (error) {
    yield put(addPostError({ error: error }));
  }
}

function* userAddRequest({ payload }: FetchAddUserProps) {
  try {
    const response: AxiosResponse = yield call(addUserAsync, payload);

    yield put(userAddSuccess(response));
  } catch (error) {
    yield put(userAddError({ error: error }));
  }
}

function* userRoleRequest({ payload }: UserRoleFilter) {
  try {
    const response: AxiosResponse = yield call(userRoleFilterAsync, payload);
    yield put(userRoleSuccess({ data: response.data }));
  } catch (error) {
    yield put(userRoleError({ error: error }));
  }
}

function* addCategoryRequest({ payload }: AddCategoryAllProps) {
  try {
    const response: AxiosResponse = yield call(addCategoryAsync, payload);
    yield put(addCategorySuccess(response));
  } catch (error) {
    yield put(addCategoryError({ error: error }));
  }
}

function* userAddRequestContainer() {
  yield takeEvery(USER_ADD_REQUEST, userAddRequest);
}
function* paginationCategoriesRequestContainer() {
  yield takeEvery(PAGINATION_CATEGORIES_REQUEST, paginationCategoriesRequest);
}
function* userRoleRequestContainer() {
  yield takeEvery(USER_ROLE_REQUEST, userRoleRequest);
}
function* addCategoryRequestContainer() {
  yield takeEvery(ADD_CATEGORY_REQUEST, addCategoryRequest);
}
function* addPostRequestContainer() {
  yield takeEvery(ADD_POST_REQUEST, addPostRequest);
}
function* fetchEditPostsRequestContainer() {
  yield takeEvery(FETCH_EDITPOSTS_REQUEST, fetchEditPostsRequest);
}
function* fetchPostPaginationRequestContainer() {
  yield takeEvery(FETCH_POSTPAGINATION_REQUEST, fetchPostPaginationRequest);
}
function* fetchFilterCategoriesRequestContainer() {
  yield takeEvery(FETCH_FILTERCATEGORIES_REQUEST, fetchFilterCategoriesRequest);
}
function* fetchPostSearchRequestContainer() {
  yield takeEvery(FETCH_POSTSEARCH_REQUEST, fetchPostSearchRequest);
}
function* fetchPostRequestContainer() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostRequest);
}
function* fetchPostStatusFilterRequest({ payload }: FetchingStatusFilter) {
  try {
    const response: AxiosResponse = yield call(fetchStatusFilter, payload);

    yield put(fetchPostStatusFilterSuccess({ data: response.data }));
  } catch (error) {
    yield put(fetchPostStatusFilterError({ error: error }));
  }
}
function* userFilterStatusRequest({ payload }: FetchingStatusFilter) {
  try {
    const response: AxiosResponse = yield call(usersStatusFilter, payload);
    yield put(userFilterStatusSuccess({ data: response.data }));
  } catch (error) {
    yield put(userFilterStatusError({ error: error }));
  }
}
function* userFilterStatusRequestContainer() {
  yield takeEvery(USER_FILTERSTATUS_REQUEST, userFilterStatusRequest);
}
function* fetchPostStatusFilterRequestContainer() {
  yield takeEvery(FETCH_POSTSTATUSFILTER_REQUEST, fetchPostStatusFilterRequest);
}
function* categorySearchRequestContainer() {
  yield takeEvery(CATEGORY_SEARCH_REQUEST, categorySearchRequest);
}
function* userPaginationRequestContainer() {
  yield takeEvery(USER_PAGINATION_REQUEST, userPaginationRequest);
}
function* userSearchRequestContainer() {
  yield takeEvery(USER_SEARCH_REQUEST, userSearchRequest);
}
function* userDeleteRequestContainer() {
  yield takeEvery(USER_DELETE_REQUEST, userDeleteRequest);
}
function* categoryChangeRequestContainer() {
  yield takeEvery(CATEGORY_CHANGE_REQUEST, categoryChangeRequest);
}
function* userChangeRequestContainer() {
  yield takeEvery(USER_CHANGE_REQUEST, userChangeRequest);
}
function* categoryDeleteRequestContainer() {
  yield takeEvery(CATEGORY_DELETE_REQUEST, categoryDeleteRequest);
}
function* fetchUsersRequestContainer() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersRequest);
}
function* fetchCategoriesContainer() {
  yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategoriesRequest);
}
const allSagas = [
  fork(fetchPostRequestContainer),
  fork(fetchPostSearchRequestContainer),
  fork(fetchFilterCategoriesRequestContainer),
  fork(fetchPostStatusFilterRequestContainer),
  fork(fetchPostPaginationRequestContainer),
  fork(addPostRequestContainer),
  fork(categoryChangeRequestContainer),
  fork(categoryDeleteRequestContainer),
  fork(categorySearchRequestContainer),
  fork(addCategoryRequestContainer),
  fork(fetchCategoriesContainer),
  fork(paginationCategoriesRequestContainer),
  fork(fetchUsersRequestContainer),
  fork(userDeleteRequestContainer),
  fork(fetchAllPostsRequestContainer),
  fork(userChangeRequestContainer),
  fork(userSearchRequestContainer),
  fork(fetchFilteringUsersRequestContainer),
  fork(userFilterStatusRequestContainer),
  fork(userRoleRequestContainer),
  fork(fetchFilteringCategorieContainer),
  fork(userPaginationRequestContainer),
  fork(userAddRequestContainer),
  fork(fetchFilteringPostsRequestContainer),
  fork(fetchEditPostsRequestContainer),
];

function* todoSaga() {
  yield all([...allSagas]);
}

export default todoSaga;
