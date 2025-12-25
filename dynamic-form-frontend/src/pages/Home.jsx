
import { getUserRole } from "../utils/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const role = getUserRole();

  if (!role) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-4">
          Please login or register to start using the Dynamic Form system.
        </p>
        <div className="space-x-3">
          <Link to="/login" className="text-blue-600 underline">Login</Link>
          <Link to="/register" className="text-blue-600 underline">Register</Link>
        </div>
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Home</h1>
        <p className="mb-2">
          You can create forms and view responses from the admin section.
        </p>
        <ul className="list-disc list-inside">
          <li><Link to="/admin" className="text-blue-600 underline">Admin Dashboard</Link></li>
          <li><Link to="/admin/create-form" className="text-blue-600 underline">Create New Form</Link></li>
          <li><Link to="/admin/forms" className="text-blue-600 underline">Manage Forms & Responses</Link></li>
        </ul>
      </div>
    );
  }

  // role === "user"
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Home</h1>
      <p className="mb-2">
        You can view and fill the forms assigned by admin.
      </p>
      <ul className="list-disc list-inside">
        <li><Link to="/forms" className="text-blue-600 underline">View Available Forms</Link></li>
      </ul>
    </div>
  );
};

export default Home;
