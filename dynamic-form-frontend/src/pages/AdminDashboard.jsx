
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Manage and create dynamic forms
        </p>

        <div className="space-y-4">
          <Link
            to="/admin/create-form"
            className="block text-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Create New Form
          </Link>

          <Link
            to="/admin/forms"
            className="block text-center bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            View Existing Forms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
