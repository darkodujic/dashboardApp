import axios from "axios";
import { SetStateAction } from "react";
import { apiLimit } from "../../utils/constants";
import {
  AllPostsCompProps,
  AllUsersValues,
  CategoriesState,
  CategoryFilteringRequest,
  CategorySearchFilter,
  DashboardPostData,
  FetchSearchProps,
  PostRequestProps,
  PostValueProps,
  UserFilterRoleRequest,
  UserRequestProps,
} from "../../utils/interfaceTypes";
export const apiPosts = "http://localhost:4000/posts";
export const categories = "http://localhost:4000/categories";
export const fetchUsersLimit =
  "http://localhost:4000/categories?_page=1&_limit=9";

export const categoriesApi =
  "http://localhost:4000/categories?_page=1&_limit=9";
export const apiLast30Days = "http://localhost:4000/visitorsLast30days";
export const apiByMonth = "http://localhost:4000/visitorsByMonths";
const postsLimit = "http://localhost:4000/posts?_page=1&_limit=";
const pageFilterWithLimitedPosts =
  "http://localhost:4000/posts?_limit=9&_page=";

const userPageFilterWithLimitedPosts =
  "http://localhost:4000/users?_limit=9&_page=";
const postsLimitto5 = "http://localhost:4000/posts?_page=1&_limit=5";
const postsLimitto9 = "http://localhost:4000/posts?_limit=9&_page=1";
const categoryPageFilterWithLimitedCategories =
  "http://localhost:4000/categories?_limit=9&_page=";

const postFilterBySearchValue =
  "http://localhost:4000/posts?_page=1&_limit=9&title_like=";
const postFilterByStatus =
  "http://localhost:4000/posts?_page=1&_limit=9&status=";

const usersFilterByStatus =
  "http://localhost:4000/users?_page=1&_limit=9&status=";

const postsFilterByCategoriesId =
  "http://localhost:4000/posts?_page=1&_limit=9&categoryIds=";
const userFilterByRole = "http://localhost:4000/users?_page=1&_limit=9&role=";

const allPosts = "http://localhost:4000/posts/";
const allCategories = "http://localhost:4000/categories/";
const userApi = "http://localhost:4000/users/";
const userSearchByName =
  "http://localhost:4000/users?_page=1&_limit=9&name_like=";
const userLimit = "http://localhost:4000/users?_page=1&_limit=";

export const deleteUserApi = async (userId: number) => {
  await axios.delete(`${apiPosts}/${userId}`);
};

export const fetchPostsLimit = async (limit: string) => {
  return await axios.get(`${postsLimit}${limit}`);
};

export const fetchPaginationFilter = async (page: number) => {
  return await axios.get(`${pageFilterWithLimitedPosts}${page}`);
};

export const userPaginationFilter = async (page: number) => {
  return await axios.get(`${userPageFilterWithLimitedPosts}${page}`);
};

export const fetchCategoryPagination = async (page: number) => {
  return await axios.get(`${categoryPageFilterWithLimitedCategories}${page}`);
};

export const fetchSearchValue = async ({ searchValue }: FetchSearchProps) => {
  return await axios.get(`${postFilterBySearchValue}${searchValue}`);
};

export const fetchStatusFilter = async (status: string) => {
  return await axios.get(`${postFilterByStatus}${status}`);
};

export const usersStatusFilter = async (status: string) => {
  return await axios.get(`${usersFilterByStatus}${status}`);
};
export const addPost = async (post: string) => {
  return await axios.post(apiPosts, post);
};

export const addUserAsync = async (user: string) => {
  return await axios.post(userApi, user);
};
export const fetchCategoriesId = async (id: number) => {
  return await axios.get(`${postsFilterByCategoriesId}${id}`);
};

export const userRoleFilterAsync = async ({ role }: UserFilterRoleRequest) => {
  return await axios.get(`${userFilterByRole}${role}`);
};
export const fetchingPosts = async (
  setTrashed: {
    (value: React.SetStateAction<DashboardPostData[] | undefined>): void;
  },
  limit: string
) => {
  const response = await axios.get(
    limit === "5"
      ? postsLimitto5
      : limit === apiLimit
      ? postsLimitto9
      : apiPosts
  );
  if (response) {
    setTrashed(response.data);
  }
};

export const changeCategory = async (id: number, categoryValue: string) => {
  return await axios.patch(`${allCategories}${id}`, categoryValue);
};

export const postsChange = async (id: number, postsValue: PostValueProps) => {
  return await axios.patch(`${allPosts}${id}`, postsValue);
};

export const changeUsers = async (id: number, userValue: string) => {
  return await axios.patch(`${userApi}${id}`, userValue);
};

export const deleteUsers = async (id: number, userValue: string) => {
  return await axios.patch(`${userApi}${id}`, userValue);
};

export const deletePost = async (id: number, status: string) => {
  await axios.patch(`${apiPosts}/${id}`, {
    status: status,
  });
};
export const filteringPostsData = async ({
  title,
  categoryIds,
  status,
  page,
  limit,
}: PostRequestProps) => {
  return await axios.get(
    `http://localhost:4000/posts?${title}${categoryIds}&${status}&_page=${page}&_limit=${limit}`
  );
};
export const filteringUsersData = async ({
  name,
  role,
  status,
  page,
  limit,
}: UserRequestProps) => {
  return await axios.get(
    `http://localhost:4000/users?${name}${role}&${status}&_page=${page}&_limit=${limit}`
  );
};
export const filteringCategoriesData = async ({
  name,
  page,
  limit,
}: CategoryFilteringRequest) => {
  return await axios.get(
    `http://localhost:4000/categories?${name}&_page=${page}&_limit=${limit}`
  );
};

export const deleteCategory = async (id: number) => {
  return await axios.delete(`${categories}/${id}`);
};

export const fetchingAllCategories = async (setNewData: {
  (value: SetStateAction<CategoriesState[]>): void;
}) => {
  try {
    const response = await axios.get(allCategories);
    const responseData = response.data;
    setNewData(responseData);
  } catch (error) {}
};

export const fetchingAllUsers = async (
  setNewData: {
    (value: SetStateAction<AllUsersValues[]>): void;
  },
  name: string,
  role: string,
  status: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/users?${name}${role}&${status}`
    );
    const responseData = response.data;
    setNewData(responseData);
  } catch (error) {}
};

export const fetchingAllCategoriesData = async (
  setNewData: {
    (value: SetStateAction<CategoriesState[]>): void;
  },
  searchValue: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/categories?${searchValue}`
    );
    const responseData = response.data;
    setNewData(responseData);
  } catch (error) {}
};

export const fetchingAllPosts = async (
  setNewData: {
    (value: SetStateAction<AllPostsCompProps[]>): void;
  },
  title: string,
  categoryIds: string,
  status: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/posts?${title}${categoryIds}&${status}`
    );
    const responseData = response.data;
    setNewData(responseData);
  } catch (error) {}
};

export const fetchAllPosts = async () => {
  return await axios.get(apiPosts);
};
export const categoryAll = async () => {
  return await axios.get(categoriesApi);
};
export const categorySearch = async ({
  searchValue,
  limit,
  page,
}: CategorySearchFilter) => {
  return await axios.get(
    `${categories}?description_like=${searchValue}&_page=${page}&_limit=${limit}`
  );
};
export const usersSearchAsync = async ({ searchValue }: FetchSearchProps) => {
  return await axios.get(`${userSearchByName}${searchValue}`);
};
export const addCategoryAsync = async (category: string) => {
  return await axios.post(allCategories, category);
};

export const fetchUsersAsync = async (limit: string) => {
  return await axios.get(`${userLimit}${limit}`);
};
