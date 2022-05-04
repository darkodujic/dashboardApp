import AddNewPost from "./pages/AddNewPost/AddNewPost";
import Categories from "./pages/Categories/Categories";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditUsers from "./pages/EditUsers/EditUsers";
import AllPosts from "./pages/FullPosts/FullPosts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SidebarWrapper from "./pages/SidebarWrapper/SidebarWrapper";
import Users from "./pages/Users/Users";
import Wrapper from "./pages/Wrapper/Wrapper";
import EditCategory from "./pages/EditCategories/EditCategories";
import AddCategory from "./pages/AddCategories/AddCategory";
import Error from "./pages/404/Error404";
import ProtectedRoutes from "./pages/Register/ProtectedRoutes/ProtectedRoutes";
import { storageEmail, storagePassword } from "./utils/constants";
import EditPosts from "./pages/EditPosts/EditPosts/EditPosts";
let protectedData = Boolean(storageEmail && storagePassword);

export const routes = [
  {
    path: "/users",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <Users />
          </>
        )}
      </>
    ),
  },
  {
    path: "/posts",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <AllPosts />
          </>
        )}
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <Dashboard />
          </>
        )}
      </>
    ),
  },
  {
    path: "/categories",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <Categories />
          </>
        )}
      </>
    ),
  },
  {
    path: "/users/:id",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <EditUsers />
          </>
        )}
      </>
    ),
  },
  {
    path: "/categories/:id",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <EditCategory />
          </>
        )}
      </>
    ),
  },
  {
    path: "/posts/add",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <AddNewPost />
          </>
        )}
      </>
    ),
  },
  {
    path: "/posts/:id",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <EditPosts />
          </>
        )}
      </>
    ),
  },
  {
    path: "/categories/addcategory",
    element: (
      <>
        {!protectedData ? (
          <ProtectedRoutes />
        ) : (
          <>
            <SidebarWrapper />
            <Wrapper />
            <AddCategory />
          </>
        )}
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login isProtected={protectedData} />
      </>
    ),
  },

  {
    path: "/register",
    element: (
      <>
        <Register isProtected={protectedData} />
      </>
    ),
  },
  {
    path: "/404",
    element: (
      <>
        <Error />
      </>
    ),
  },
];
