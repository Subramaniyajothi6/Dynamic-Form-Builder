const FormResponse = require("../../models/FormResponse");
const FormResponseValue = require("../../models/FormResponseValue");

/**
 * SUBMIT FORM
 * POST /api/user/submit
 */
const submitForm = async (req, res) => {
  try {
    const { form_id, values } = req.body;

    if (!form_id || !Array.isArray(values) || values.length === 0) {
      return res.status(400).json({ message: "Invalid form submission data" });
    }

    const response = await FormResponse.create({
      form_id: form_id,
      user_id: req.user.id
    });

    const responseValues = values.map(item => ({
      response_id: response._id,
      field_id: item.field_id,
      value: item.value
    }));

    await FormResponseValue.insertMany(responseValues);

    return res.status(201).json({
      message: "Form submitted successfully",
      response_id: response._id
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * EXPORTS
 */
module.exports = {
  submitForm
};
