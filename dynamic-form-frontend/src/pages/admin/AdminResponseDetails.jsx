import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/api";

const AdminResponseDetails = () => {
  const { responseId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const res = await api.get(
          `/admin/responses/${responseId}`
        );
        setData(res.data);
      } catch (err) {
        console.error("Failed to load response details",err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponse();
  }, [responseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading response...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Response Details
        </h1>

        {data.length === 0 ? (
          <p className="text-gray-500">
            No response data found.
          </p>
        ) : (
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b pb-2"
              >
                <span className="font-medium">
                  {item.label}
                </span>
                <span className="text-gray-700">
                  {String(item.value)}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Link
            to={-1}
            className="text-blue-600 hover:underline"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminResponseDetails;
