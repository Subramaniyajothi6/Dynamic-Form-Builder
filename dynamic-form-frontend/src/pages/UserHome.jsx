import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          User Dashboard
        </h1>

        <p className="text-sm text-gray-600 mb-6 text-center">
          View and fill forms.
        </p>



        <Link
          to="/forms"
          className="block text-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Available Forms
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
