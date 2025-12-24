import { useState } from "react";
import api from "../../api/api";

const FIELD_TYPES = [
  "text",
  "textarea",
  "number",
  "date",
  "dropdown",
  "checkbox",
  "radio",
];

const CreateForm = () => {
  const [formName, setFormName] = useState("");
  const [fields, setFields] = useState([]);

  // add new empty field
  const addField = () => {
    setFields([
      ...fields,
      {
        label: "",
        type: "text",
        required: false,
        placeholder: "",
        options: [],
        sort_order: fields.length + 1,
      },
    ]);
  };

  // update field property
  const updateField = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  // add option to dropdown / radio / checkbox
  const addOption = (index) => {
    const updated = [...fields];
    updated[index].options.push("");
    setFields(updated);
  };

  const updateOption = (fieldIndex, optionIndex, value) => {
    const updated = [...fields];
    updated[fieldIndex].options[optionIndex] = value;
    setFields(updated);
  };

  // submit form to backend
const handleSubmit = async () => {
  if (!formName || fields.length === 0) {
    alert("Form name and at least one field required");
    return;
  }

  try {
    // 1️⃣ Create form
    const formRes = await api.post("/admin/forms", {
      form_name: formName
    });

    const formId = formRes.data._id;

    // 2️⃣ Add fields
    await api.post(`/admin/forms/${formId}/fields`, {
      fields
    });

    alert("Form created successfully");
    setFormName("");
    setFields([]);
  } catch (err) {
    console.error(err);
    alert("Failed to create form");
  }
};


//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Create New Form</h2>

//       {/* form name */}
//       <input
//         type="text"
//         placeholder="Form Name"
//         className="w-full border p-2 mb-4 rounded"
//         value={formName}
//         onChange={(e) => setFormName(e.target.value)}
//       />

//       {/* dynamic fields */}
//       {fields.map((field, index) => (
//         <div key={index} className="border p-4 mb-4 rounded">
//           <input
//             type="text"
//             placeholder="Field Label"
//             className="w-full border p-2 mb-2 rounded"
//             value={field.label}
//             onChange={(e) =>
//               updateField(index, "label", e.target.value)
//             }
//           />

//           <select
//             className="w-full border p-2 mb-2 rounded"
//             value={field.type}
//             onChange={(e) =>
//               updateField(index, "type", e.target.value)
//             }
//           >
//             {FIELD_TYPES.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Placeholder"
//             className="w-full border p-2 mb-2 rounded"
//             value={field.placeholder}
//             onChange={(e) =>
//               updateField(index, "placeholder", e.target.value)
//             }
//           />

//           <label className="flex items-center gap-2 mb-2">
//             <input
//               type="checkbox"
//               checked={field.required}
//               onChange={(e) =>
//                 updateField(index, "required", e.target.checked)
//               }
//             />
//             Required
//           </label>

//           {/* options for dropdown / radio / checkbox */}
//           {["dropdown", "radio", "checkbox"].includes(field.type) && (
//             <div className="mt-2">
//               <p className="font-semibold mb-1">Options</p>

//               {field.options.map((opt, optIndex) => (
//                 <input
//                   key={optIndex}
//                   type="text"
//                   placeholder={`Option ${optIndex + 1}`}
//                   className="w-full border p-2 mb-1 rounded"
//                   value={opt}
//                   onChange={(e) =>
//                     updateOption(index, optIndex, e.target.value)
//                   }
//                 />
//               ))}

//               <button
//                 type="button"
//                 className="text-sm text-blue-600"
//                 onClick={() => addOption(index)}
//               >
//                 + Add Option
//               </button>
//             </div>
//           )}
//         </div>
//       ))}

//       <button
//         type="button"
//         className="bg-gray-700  px-4 py-2 rounded mr-2"
//         onClick={addField}
//       >
//         Add Field
//       </button>

//       <button
//         type="button"
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         onClick={handleSubmit}
//       >
//         Save Form
//       </button>
//     </div>
//   );

return (
  <div className="min-h-screen bg-gray-100 py-10">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Create New Form
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Define form fields dynamically
      </p>

      {/* Form Name */}
      <div className="mb-8">
        <label className="block font-medium mb-2">
          Form Name
        </label>
        <input
          type="text"
          placeholder="e.g. Job Application Form"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </div>

      {/* Fields */}
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">
                Field {index + 1}
              </h3>
            </div>

            {/* Label */}
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Field Label
              </label>
              <input
                type="text"
                placeholder="Field label"
                className="w-full border rounded-md p-2"
                value={field.label}
                onChange={(e) =>
                  updateField(index, "label", e.target.value)
                }
              />
            </div>

            {/* Type */}
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Field Type
              </label>
              <select
                className="w-full border rounded-md p-2"
                value={field.type}
                onChange={(e) =>
                  updateField(index, "type", e.target.value)
                }
              >
                {FIELD_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Placeholder */}
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Placeholder
              </label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full border rounded-md p-2"
                value={field.placeholder}
                onChange={(e) =>
                  updateField(index, "placeholder", e.target.value)
                }
              />
            </div>

            {/* Required */}
            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) =>
                  updateField(index, "required", e.target.checked)
                }
              />
              <span className="text-sm font-medium">
                Required field
              </span>
            </label>

            {/* Options */}
            {["dropdown", "radio", "checkbox"].includes(field.type) && (
              <div className="mt-4">
                <p className="font-medium mb-2">
                  Options
                </p>

                <div className="space-y-2">
                  {field.options.map((opt, optIndex) => (
                    <input
                      key={optIndex}
                      type="text"
                      placeholder={`Option ${optIndex + 1}`}
                      className="w-full border rounded-md p-2"
                      value={opt}
                      onChange={(e) =>
                        updateOption(index, optIndex, e.target.value)
                      }
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={() => addOption(index)}
                >
                  + Add Option
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          onClick={addField}
        >
          + Add Field
        </button>

        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Save Form
        </button>
      </div>
    </div>
  </div>
);

};

export default CreateForm;


