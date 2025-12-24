import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let isUser = false;

  try {
    const decoded = jwtDecode(token);
    isUser = decoded.role === "user";
  } catch {
    return <Navigate to="/login" replace />;
  }

  if (!isUser) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default UserRoute;
