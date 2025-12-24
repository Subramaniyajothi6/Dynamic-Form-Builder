import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import DynamicField from "../components/DynamicField";

const DynamicForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [values, setValues] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api
      .get(`/user/forms/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (fieldId, value) => {
    setValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      form_id: form.form_id,
      values: Object.entries(values).map(([field_id, value]) => ({
        field_id,
        value
      }))
    };

    try {
      await api.post("/user/submit", payload);
      alert("Form submitted successfully");
      setValues({});
    } catch (err) {
      console.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (!form) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {form.form_name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {form.fields.map(field => (
            <div key={field._id}>
              <label className="block mb-1 font-medium">
                {field.label}
              </label>

              <DynamicField
                field={field}
                value={values[field._id]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
