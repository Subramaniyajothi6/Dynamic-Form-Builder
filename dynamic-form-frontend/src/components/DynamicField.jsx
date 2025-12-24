const DynamicField = ({ field, value, onChange }) => {
  const commonClasses =
    "w-full border rounded-md p-2 focus:outline-none focus:ring";

  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          className={commonClasses}
          placeholder={field.placeholder}
          required={field.required}
          value={value || ""}
          onChange={(e) => onChange(field._id, e.target.value)}
        />
      );

    case "textarea":
      return (
        <textarea
          className={commonClasses}
          placeholder={field.placeholder}
          required={field.required}
          value={value || ""}
          onChange={(e) => onChange(field._id, e.target.value)}
        />
      );

    case "number":
      return (
        <input
          type="number"
          className={commonClasses}
          required={field.required}
          value={value || ""}
          onChange={(e) => onChange(field._id, e.target.value)}
        />
      );

    case "date":
      return (
        <input
          type="date"
          className={commonClasses}
          required={field.required}
          value={value || ""}
          onChange={(e) => onChange(field._id, e.target.value)}
        />
      );

    case "dropdown":
      return (
        <select
          className={commonClasses}
          required={field.required}
          value={value || ""}
          onChange={(e) => onChange(field._id, e.target.value)}
        >
          <option value="">Select</option>
          {field.options.map((opt) => (
            <option key={opt._id} value={opt.option_text}>
              {opt.option_text}
            </option>
          ))}
        </select>
      );

    case "radio":
      return (
        <div className="space-y-1">
          {field.options.map((opt) => (
            <label key={opt._id} className="flex items-center gap-2">
              <input
                type="radio"
                name={field._id}
                value={opt.option_text}
                checked={value === opt.option_text}
                onChange={() =>
                  onChange(field._id, opt.option_text)
                }
              />
              {opt.option_text}
            </label>
          ))}
        </div>
      );

    case "checkbox":
      return (
        <div className="space-y-1">
          {field.options.map((opt) => {
            const checkedValues = value || [];
            return (
              <label key={opt._id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={opt.option_text}
                  checked={checkedValues.includes(opt.option_text)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onChange(field._id, [...checkedValues, opt.option_text]);
                    } else {
                      onChange(
                        field._id,
                        checkedValues.filter(v => v !== opt.option_text)
                      );
                    }
                  }}
                />
                {opt.option_text}
              </label>
            );
          })}
        </div>
      );

    default:
      return null;
  }
};

export default DynamicField;
