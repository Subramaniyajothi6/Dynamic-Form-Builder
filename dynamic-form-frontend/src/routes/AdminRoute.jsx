import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to continue");
    return <Navigate to="/login" replace />;
  }

  let isAdmin = false;

  try {
    const decoded = jwtDecode(token);
    isAdmin = decoded.role === "admin";
  } catch {
    alert("Session expired. Please login again");
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    alert("You are not authorized to access admin pages");
    return <Navigate to="/forms" replace />;
  }

  return children;
};

export default AdminRoute;
