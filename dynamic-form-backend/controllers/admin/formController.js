const FieldOption = require("../../models/FieldOption");
const Form = require("../../models/Form");
const FormField = require("../../models/FormField");

/**
 * CREATE FORM
 * POST /api/admin/forms
 */
const createForm = async (req, res) => {
    try {
        const { form_name } = req.body;

        if (!form_name) {
            return res.status(400).json({ message: "Form name is required" });
        }

        const form = await Form.create({ form_name });

        return res.status(201).json(form);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * ADD FIELDS TO FORM
 * POST /api/admin/forms/:formId/fields
 */
const addFieldsToForm = async (req, res) => {
    try {
        const { formId } = req.params;
        const { fields } = req.body;

        if (!Array.isArray(fields) || fields.length === 0) {
            return res.status(400).json({ message: "Fields are required" });
        }

        for (const field of fields) {
            const createdField = await FormField.create({
                form_id: formId,
                label: field.label,
                type: field.type,
                required: field.required || false,
                placeholder: field.placeholder || "",
                sort_order: field.sort_order || 0
            });

            if (
                ["dropdown", "radio", "checkbox"].includes(field.type) &&
                Array.isArray(field.options)
            ) {
                const options = field.options.map(option => ({
                    field_id: createdField._id,
                    option_text: option
                }));

                await FieldOption.insertMany(options);
            }
        }

        return res.status(201).json({
            message: "Form fields added successfully"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });

    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch forms" });
  }
};

/**
 * EXPORTS
 */
module.exports = {
    createForm,
    addFieldsToForm,
    getAllForms
};
