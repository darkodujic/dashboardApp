import { Navigate, Outlet } from "react-router-dom";
import { storageEmail, storagePassword } from "../../../utils/constants";

const ProtectedRoutes: React.FC = () => {
  let isAuthenticated;
  isAuthenticated = storageEmail && storagePassword;
  return isAuthenticated ? <Outlet /> : <Navigate to={`/login`} />;
};

export default ProtectedRoutes;
