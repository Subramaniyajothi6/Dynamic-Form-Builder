import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";

const AdminFormResponses = () => {
  const { formId } = useParams();
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await api.get(
          `/admin/responses/form/${formId}`
        );
        setResponses(res.data);
      } catch (err) {
        console.error("Failed to load responses",err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, [formId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading responses...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Form Responses
        </h1>

        {responses.length === 0 ? (
          <p className="text-gray-500">
            No submissions yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {responses.map((response) => (
              <li
                key={response._id}
                className="flex items-center justify-between border p-4 rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {response.user_id?.name || "Unknown User"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(response.createdAt).toLocaleString()}
                  </p>
                </div>

                <Link
                  to={`/admin/responses/${response._id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminFormResponses;
