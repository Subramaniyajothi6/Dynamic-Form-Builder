import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

const FormList = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // auth guard
    if (!token) {
      navigate("/login");
      return;
    }

    api
      .get("/user/forms")
      .then(res => {
        setForms(res.data);
        setError("");
      })
      .catch(() => {
        setError("Failed to load forms");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading forms...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Available Forms
        </h2>

        {forms.length === 0 ? (
          <p className="text-center text-gray-500">
            No forms available
          </p>
        ) : (
          <ul className="space-y-3">
            {forms.map(form => (
              <li key={form._id}>
                <Link
                  to={`/form/${form._id}`}
                  className="block p-3 border rounded-md hover:bg-gray-50 transition"
                >
                  {form.form_name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FormList;
