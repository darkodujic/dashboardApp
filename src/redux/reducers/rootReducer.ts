import { combineReducers } from "redux";

import todoReducer from "./postsReducer/postsReducer";
import categoriesReducer from "./categoriesReducer/categoriesReducer";
import usersReducer from "./usersReducer/usersReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  categories: categoriesReducer,
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
