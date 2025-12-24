const FieldOption = require("../../models/FieldOption");
const Form = require("../../models/Form");
const FormField = require("../../models/FormField");



/**
 * GET ALL FORMS
 * GET /api/user/forms
 */
const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find().select("form_name");
    return res.json(forms);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET FORM STRUCTURE BY ID
 * GET /api/user/forms/:id
 */
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;

    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    const fields = await FormField
      .find({ form_id: id })
      .sort("sort_order");

    const fieldsWithOptions = await Promise.all(
      fields.map(async field => {
        let options = [];

        if (["dropdown", "radio", "checkbox"].includes(field.type)) {
          options = await FieldOption.find({ field_id: field._id });
        }

        return {
          ...field.toObject(),
          options
        };
      })
    );

    return res.json({
      form_id: form._id,
      form_name: form.form_name,
      fields: fieldsWithOptions
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * EXPORTS
 */
module.exports = {
  getAllForms,
  getFormById
};
