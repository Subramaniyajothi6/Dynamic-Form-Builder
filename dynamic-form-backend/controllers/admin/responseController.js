const FormResponse = require("../../models/FormResponse");
const FormResponseValue = require("../../models/FormResponseValue");

/**
 * LIST ALL RESPONSES FOR A FORM
 * GET /api/admin/responses/form/:formId
 */
const getResponsesByForm = async (req, res) => {
  try {
    const { formId } = req.params;

    const responses = await FormResponse
      .find({ form_id: formId })
      .populate("user_id", "name email")
      .sort({ submitted_at: -1 });

    return res.json(responses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET SINGLE RESPONSE WITH FIELD LABELS
 * GET /api/admin/responses/:responseId
 */
const getSingleResponse = async (req, res) => {
  try {
    const { responseId } = req.params;

    const values = await FormResponseValue.find({
      response_id: responseId
    }).populate("field_id","label type");

    const formattedResponse = values.map(item => ({
      label: item.field_id.label,
      value: item.value
    }));

    return res.json(formattedResponse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * EXPORTS
 */
module.exports = {
  getResponsesByForm,
  getSingleResponse
};
