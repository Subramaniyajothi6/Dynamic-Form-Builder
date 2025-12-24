import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const Forms = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await api.get("/admin/forms");
        setForms(res.data);
      } catch (err) {
        console.error("Failed to load forms",err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading forms...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6">All Forms</h1>

        {forms.length === 0 ? (
          <p className="text-gray-500">No forms created yet.</p>
        ) : (
          <ul className="space-y-4">
            {forms.map((form) => (
              <li
                key={form._id}
                className="flex items-center justify-between border p-4 rounded-lg"
              >
                <span className="font-medium">{form.form_name}</span>

                <Link
                  to={`/admin/forms/${form._id}/responses`}
                  className="text-blue-600 hover:underline"
                >
                  View Responses
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Forms;
